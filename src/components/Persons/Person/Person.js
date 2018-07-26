import React from 'react';

import cssClasses from './Person.css';

const person = (props) => {

  return (
    <div className={cssClasses.Person}>
      <p onClick={props.delete}>My name is {props.name} and my age is {props.age}</p>
      <p>{props.children}</p>
      <input 
        type="text" 
        onChange={props.changed}
        value={props.name} />
    </div>
  );
}

export default person;
