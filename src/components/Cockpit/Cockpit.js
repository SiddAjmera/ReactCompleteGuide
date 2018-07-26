import React from 'react';

import cssClasses from './Cockpit.css';

const cockpit = (props) => {

  const classes = [];
  if(props.persons.length <=2) classes.push(cssClasses.red);
  if(props.persons.length <=1) classes.push(cssClasses.bold);

  let buttonClass = '';
  if(props.showPersons) buttonClass = cssClasses.Red;

  return (
    <div className={cssClasses.Cockpit}>
      <h1>Hi! Welcome to my React App.</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button 
        className={buttonClass}
        onClick={props.togglePersonsVisibility}>
        {props.showPersons ? 'Hide Persons': 'Show Persons'}
      </button>
    </div>
  );
}

export default cockpit;
