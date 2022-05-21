import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../store/actions/counterActions';

const ReduxPage = () => {
	const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();

	return (
		<div>
			<p>Number is currently {counter}</p>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
		</div>
	)
}

export default ReduxPage;