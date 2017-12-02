import React, { Component } from 'react';


class Sum extends Component {
 constructor(){
     super();

     this.state ={
         number1 : 0,
         number2 : 0,
         sum: null

     }
 }

 changeNumber1(val){
     this.setState({number1: val})
 }
 changeNumber2(val){
    this.setState({number2: val})
 }

 solveProblem(){
     var num1 = Number(this.state.number1);
     var num2 = Number(this.state.number2);

     var answer = (num1 + num2);

     this.setState({sum: answer})
 }
    render() {

        return (
            <div className="puzzleBox sumPB">
                    <h4>Sum</h4>
                    <input className="inputLine" onChange = {(e)=>this.changeNumber1(e.target.value)}></input>
                    <input className="inputLine" onChange = {(e)=>this.changeNumber2(e.target.value)}></input>
                    <button className="confirmationButton" onClick = {() => this.solveProblem()}>Add</button>
                    <span className="resultsBox">Sum: {JSON.stringify(this.state.sum)}</span>

                </div>
        )
    }
}

export default Sum