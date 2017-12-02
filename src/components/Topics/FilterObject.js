import React, { Component } from 'react';


class FilterObject extends Component {
    constructor (){
        super();

        this.state = {
            unFilteredArray: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput: '',
            FilteredArray: []
        }
    }

    onChange(val){
        this.setState = ({
            userInput: val
        })
    }

    solveProblem(input){
        var unfilt = this.state.unFilteredArray;
        var arr = [];
        arr = unfilt.filter((x, i, arr)=>arr[i].hasOwnProperty(input))

        this.setState({
            filteredArray: arr
        })
    }

    render() {

        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Unfiltered Array: { JSON.stringify(this.state.unFilteredArray) }</span>
                <input className="inputLine" onChange={(e)=>e.onChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.solveProblem(this.state.userInput)}>Click</button>
                <span className="resultsBox filterObjectRB">Filtered Array: { JSON.stringify(this.state.filteredArray) }</span>
            </div>

        )
    }
}

export default FilterObject