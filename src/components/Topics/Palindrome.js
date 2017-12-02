import React, { Component } from 'react';


class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            answer: ''
        }
    }

    handlechange(val) {
        this.setState({ userInput: val })
    }

    problemSolver(val) {
        var bol;
        val.toString() === val.toString().split('').reverse().join('') ? bol = 'True' : bol = 'False';

        this.setState({ answer: bol })
    }

    render() {

        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handlechange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.problemSolver(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: {JSON.stringify(this.state.answer)}</span>
            </div>
        )
    }
}

export default Palindrome