import React, { Component } from 'react';


class Palindrome extends Component {
    constructor(){
        super();

        this.state={
            userInput: '',
            answer: ''
        }
    }

    handlechange(val){
        this.setState({userInput: val})
    }

    problemSolver(val){
        
        val.toString()===val.toString().split('').reverse().join('')?this.setState ({answer: true}):this.setState ({answer: true});
    }

    render() {

        return (
            <div>
                <h4 className="puzzleBox filterStringPB">Palindrome</h4>
                <input className="inputLine" onChange ={(e)=>this.handlechange(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.problemSolver(this.state.userInput)}></button>
                <span className="resultsBox">{JSON.stringify(this.state.answer, null, 10)}</span>
                </div>
        )
    }
}

export default Palindrome