import React, { Component } from 'react';
import cssClasses from './App.css';

import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import WithClass from '../hoc/WithClass';
/* import Standard  from '../hoc/Standard'; */
import StandardClass  from '../hoc/StandardClass';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 'jkdshfkjhds1', name: 'Siddharth', age: 26 },
        { id: 'lskdjgakjsd2', name: 'Krishna', age: 24 },
        { id: 'kjsdhfuefiu3', name: 'Rajat', age: 25 }
      ],
      showPersons: false,
      toggleClicked: 0
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[App.js] Inside componentDidUpdate');
  }

  togglePersonsVisibility = () => {
    const showPersons = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !showPersons,
        toggleClicked: prevState.toggleClicked + 1 
      }
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

    console.log('[App.js] Inside render');

    let persons = (<h3>Persons are hidden</h3>);
    
    if(this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons}
        personDeleted={this.deletePersonHandler}
        nameChanged={this.nameChangeHandler}/>;
    }

    return (
      <WithClass className={cssClasses.App}>
        <button onClick={ () => this.setState({ showPersons: true })}>Show Persons</button>
        <Cockpit 
          persons={this.state.persons}
          togglePersonsVisibility={this.togglePersonsVisibility}
          showPersons={this.state.showPersons}/>
        {persons}
      </WithClass>
    );
  }
}

/* export default Standard(App, cssClasses); */
export default StandardClass(App, cssClasses);
