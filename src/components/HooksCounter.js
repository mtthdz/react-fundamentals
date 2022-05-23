import React from "react";
import { useState } from 'react';

/**
 * hooks are what we use to manage a functional component's state
 * the base hook uses the useState hook, where the variable type is an array
 *  the array takes two values:
 *  1. the stateful value name (think variable name)
 *  2. the function name that manipulates state
 *  the useState hook initializes the stateful object, where the argument
 *  passed equates to the initial stateful value
 * 
 * the functions increaseCount() and decreaseCount() are called on the
 * onClick() event trigger. they define what will happen to the component's 
 * state when triggered
 * 
 * we can set the stateful value name i.e. countValue in our JSX markup
 */
const HooksCounter = () => {
  const [countValue, setCount] = useState(0);

  const increaseCount = () => {
    setCount( countValue + 1);
  }

  const decreaseCount = () => {
    setCount( countValue - 1);
  }

  return(
		<div>
			<h2>Hooks Counter</h2>
			<p>Number is currently {countValue}</p>
			<button onClick={increaseCount}>+</button>
			<button onClick={decreaseCount}>-</button>
		</div>
  );
}

export default HooksCounter;