// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letter: 0}

  inputText = event => {
    console.log(event.target.value.length)
    this.setState({letter: event.target.value.length})
  }

  render() {
    const {letter} = this.state
    return (
      <div className="bg-card">
        <img
          className="cal-img"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
        <div className="letters-card">
          <h1 className="cal-heading">Calculate the Letters you enters</h1>
          <label className="input-top-text" htmlFor="input">
            Enter the phrase
          </label>
          <input
            id="input"
            type="text"
            className="input-text"
            placeholder="Enter the phrase"
            onChange={this.inputText}
          />
          <p className="count-text">No.of letters: {letter}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
