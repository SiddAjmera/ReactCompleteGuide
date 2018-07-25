import React, { Component } from 'react';
import './App.css';

import Radium from 'radium';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'jkdshfkjhds1', name: 'Siddharth', age: 26 },
      { id: 'lskdjgakjsd2', name: 'Krishna', age: 24 },
      { id: 'kjsdhfuefiu3', name: 'Rajat', age: 25 }
    ],
    showPersons: false
  };

  togglePersonsVisibility = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  deletePersonHandler = (index) => {
    let persons = [ ...this.state.persons ];
    persons.splice(index, 1);
    this.setState({
      persons
    });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;
    this.setState({
      persons
    });
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = (<h3>Persons are hidden</h3>);

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  key={person.id}
                  delete={() => this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age}
                  changed={ (event) => this.nameChangeHandler(event, person.id) }/>
              );
            })
          }
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if(this.state.persons.length <=2) classes.push('red');
    if(this.state.persons.length <=1) classes.push('bold');
    
    return (
      <div className="App">
        <h1>Hi! Welcome to my React App.</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          style={style} 
          onClick={this.togglePersonsVisibility}>
          {this.state.showPersons ? 'Hide Persons': 'Show Persons'}
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
