import React, { Component } from 'react';


export default class FilterString extends Component {
    
    constructor() {
      super();
  
      this.state = {
        names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
        userInput: '',
        filteredNames: []
      };
    }
  
    handleChange(val) {
      this.setState({ userInput: val });
    }
  
    filterNames(userInput) {
      var names = this.state.names;
      var filteredArr = [];
  
      for ( var i = 0; i < names.length; i+=1 ) {
        if ( names[i].startsWith(userInput) ) {
          filteredArr.push(names[i]);
        }
      }
  
      this.setState({ filteredNames: filteredArr });
    }
  
    render() {
      return (
        <div className="puzzleBox filterStringPB">
          <h4> Filter String </h4>
          <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
          <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
          <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
        </div>
      )
    }
  }