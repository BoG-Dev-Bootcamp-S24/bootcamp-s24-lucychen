import React from 'react';
import './ArrowButton.css';

//props & destruct: create two constants for props, here are props.arrowButtonClick & props.disabled
//disabled when the list reach the first element
const ArrowButton = ({onArrowButtonClick, disabled}) => (
  <div className = "arrow-container">
    <button className="arrow-button" onClick={() => onArrowButtonClick(false)} disabled={disabled}>
      &lt;
    </button>
    <button className="arrow-button" onClick={() => onArrowButtonClick(true)}>
      &gt;
    </button>
  </div>
);
//{} is used to indicate that the lines in {} is a javaScript code, run this as a code instead of string or something
//system knows onArrowButtonClick is a function b/c I use it in a way consistent with function

//FUNCTION CALLS:
//direct function call: onClick = {onArrowButtonClick(false)} -> system run this at the render stage
//function reference: onClick = {onArrowButtonClick} -> event handler, system knows to run this when event happen, 
//                                                      but does not allow direct parameter passed in
//Arrow Function: onClick = {() => onArrowButtonClick(false)} -> create a new function that when called, will run the function it points to
//                                                                deferred execution & passing arguments

export default ArrowButton;