import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from '../store/actions/counterActions';

/**
 * This is the exact same counting component as HooksCounter, however 
 * utilizing Redux over Hooks. Redux is a global state management library 
 * that lets us avoid passing state through opinionated one-way component
 * relationships. 
 * 
 * because our counter reducer is set up within our redux store, we only need
 * two hooks to manipulate our component state: useSelector and useDispatch
 *  1. useSelector grabs the stateful value we want to use from the global store,
 *     as long as the provider component wraps our parent-most component
 *  2. useDispatch is a hook we use to call actions associated with the reducer we
 *     are using. Our reducer consists of a switch case that will complete functionality
 *     based on what action is being dispatched
 */
const ReduxCounter = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();

	return (
		<div>
			<h2>Redux Counter</h2>
			<p>Number is currently {counter}</p>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
		</div>
	)
}

export default ReduxCounter;