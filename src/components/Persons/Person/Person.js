import React, { Component } from 'react';

import PropTypes from 'prop-types';

import WithClass from '../../../hoc/WithClass';
import { AuthContext } from '../../../containers/App';

import cssClasses from './Person.css';

class Person extends Component {

  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
    this.inputElement.current.focus();
  }

  render() {

    console.log('[Person.js] Inside render');

    return (
      <WithClass className={cssClasses.Person}>
        <AuthContext.Consumer>
          {auth => auth ? 'I\'m Authenticated': 'I\'m not Authenticated'}
        </AuthContext.Consumer>
        <p 
          onClick={this.props.delete}>
          My name is {this.props.name} and my age is {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input 
          ref={this.inputElement}
          type="text" 
          onChange={this.props.changed}
          value={this.props.name} />
      </WithClass>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  delete: PropTypes.func,
  changed: PropTypes.func
}

export default Person;
