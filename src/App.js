import React, { Component } from 'react';
import cssClasses from './App.css';

/* import Radium, { StyleRoot } from 'radium'; */

import ErrorBoundry from './ErrorBoundry/ErrorBoundry';
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

    let persons = (<h3>Persons are hidden</h3>);
    let buttonClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <ErrorBoundry key={person.id}>
                  <Person
                    delete={() => this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age}
                    changed={ (event) => this.nameChangeHandler(event, person.id) }/>
                </ErrorBoundry>
              );
            })
          }
        </div>
      );
      buttonClass = cssClasses.Red;
    }

    const classes = [];
    if(this.state.persons.length <=2) classes.push(cssClasses.red);
    if(this.state.persons.length <=1) classes.push(cssClasses.bold);
    
    return (
      <div className={cssClasses.App}>
        <h1>Hi! Welcome to my React App.</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          className={buttonClass}
          onClick={this.togglePersonsVisibility}>
          {this.state.showPersons ? 'Hide Persons': 'Show Persons'}
        </button>
        {persons}
      </div>
    );
  }
}

/* export default Radium(App); */
export default App;
