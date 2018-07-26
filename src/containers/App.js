import React, { Component } from 'react';
import cssClasses from './App.css';

import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

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
    
    if(this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons}
        personDeleted={this.deletePersonHandler}
        nameChanged={this.nameChangeHandler}/>;
    }

    return (
      <div className={cssClasses.App}>
        <Cockpit 
          persons={this.state.persons}
          togglePersonsVisibility={this.togglePersonsVisibility}
          showPersons={this.state.showPersons}/>
        {persons}
      </div>
    );
  }
}

export default App;
