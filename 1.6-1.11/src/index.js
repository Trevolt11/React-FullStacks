import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticLine = ({ text, value }) => {
  return (
    <table>
      <tr>
        <th>
          {text}
        </th>
        <td>
          {value}
        </td>
      </tr>
    </table>
  )
}

const Statistics = ({ good, bad, neutral }) => {

  const total = good + bad + neutral
  const average = total * (good * 0.010)
  const positive = good / total * 100

  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        No feedback Given
      </div>
    )
  }

  return (
    <div>
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />

      <table>
        <tr>
          <th>average:</th>
          <td>{average}</td>
        </tr>
        <tr>
          <th>positive:</th>
          <td>{positive}</td>
        </tr>

      </table>

    </div>
  )
}



const Button = ({ HandleClicked, nameButton }) => <button onClick={HandleClicked}> {nameButton} </button>

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const setGoodValue = Value => {
    setGood(Value)
  }


  const setNeutralValue = Value => {
    setNeutral(Value)
  }


  const setBadValue = Value => {
    setBad(Value)
  }


  return (
    <div>
      <h3>give feedback</h3>

      <Button nameButton={'good'} HandleClicked={() => setGoodValue(good + 1)} />
      <Button nameButton={'neutral'} HandleClicked={() => setNeutralValue(neutral + 1)} />
      <Button nameButton={'bad'} HandleClicked={() => setBadValue(bad + 1)} />


      <h3>statistics</h3>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))