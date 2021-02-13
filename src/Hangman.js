import { useState, useEffect } from 'react'

function Dashes(props) {
    const { randomWord, guesses } = props
    const randomWordArr = randomWord.split('')
    return <div className="flex">
        {randomWordArr.map(item => <div class="dash">{guesses.includes(item) ? item : null}</div>)}
    </div>
}

function LetterButtons(props) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    return <div>
        {letters.map(letter => <button onClick={() => props.onClick(letter)}>{letter}</button>)}
    </div>
}

const words = [
    'hello',
    // 'bye',
    // 'cool'
];

export default function Hangman() {
    const [randomWord, setRandomWord] = useState('')
    const [guesses, setGuesses] = useState([])
    const [lives, setLives] = useState(8)
    const [won, setWon] = useState(false)

    function makeRandomWord() {
        const randomIndex = Math.floor(Math.random() * words.length)
        setRandomWord(words[randomIndex])
    }

    useEffect(makeRandomWord, [])
    useEffect(() => {
        let hasWon = true
        for (let letter of randomWord) {
            if (guesses.includes(letter) == false) {
                hasWon = false
            }
        }
        // take off guesses.length to show bug I did...
        if (hasWon && guesses.length) {
            setWon(true)
        }
    }, [guesses, randomWord])
    function handleGuesses(letter) {
        if (guesses.includes(letter) == false) {
            setGuesses([...guesses, letter])
        }
        if (randomWord.includes(letter) == false) {
            setLives(lives - 1)
        }
    }
    function resetGame() {
        const randomIndex = Math.floor(Math.random() * words.length)
        makeRandomWord()
        setLives(8)
        setGuesses([])
        setWon(false)
    }
    return (
        <div>
            {
                won ?
                <div>
                    <h1>you win</h1>
                    <button onClick={resetGame}>play again?</button>
                </div>
                : <div>
                    <LetterButtons onClick={handleGuesses} />
                    <Dashes randomWord={randomWord} guesses={guesses} />
                </div>
            }

            {/* show bug here... */}
            {lives === 0 ? <p>you lost</p> : null}
        </div>
    )
}