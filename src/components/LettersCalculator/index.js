// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeItem = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Calculate the Letters you Enter</h1>
          <div className="phrase-container">
            <label htmlFor="phrase" className="phase-heading">
              Enter the phrase
            </label>
            <input
              id="phrase"
              type="text"
              placeholder="Enter the phrase"
              className="input-item"
              onChange={this.onChangeItem}
            />
          </div>
          <div className="count-container">
            <p className="count">No.of Letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
