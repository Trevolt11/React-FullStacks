import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Buttoncustom = ({ HandleClicked, nameButton }) => <button onClick={HandleClicked}> {nameButton} </button>

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const UpdateValue = ({ value, position, size }) => {
    let arr = Array.apply(null, { length: size }).map(function () { return 0; })
    arr[position] = value
    const arr1 = arr
    return (
        <div>
            <p>
                hola
            </p>
            <p>{arr1}</p>

        </div>
    )
}

const MoreVotes = ({ votes }) => {
    const n = Math.max(...votes)
    const index = votes.indexOf(n);
    console.log(anecdotes[index])

    return (
        <div>
            <h3>Anecdote with most votes</h3>
            <p>{anecdotes[index]}</p>
            <p>has {n} votes</p>
        </div>
    )
}

const App = (props) => {
    const anecdotesSize = anecdotes.length
    const [selected, setSelected] = useState(0)
    const [arr, setArr] = useState(Array.apply(null, { length: anecdotesSize }).map(function () { return 0; }))
    const [selected1, setSelected1] = useState(0)

    const copy = arr

    const Update = () => {
        arr[selected] += 1
        setArr(copy)
    }

    const result = copy[selected]

    return (
        <div>
            <h3>Anecdote of the day</h3>
            {props.anecdotes[selected]}
            <p>has {arr[selected]} votes</p>
            <br />
            <Buttoncustom HandleClicked={Update} nameButton="voto" />
            <Buttoncustom HandleClicked={() => setSelected(getRandomInt(anecdotesSize))} nameButton="Next anecdote" />

            <MoreVotes votes={arr} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)