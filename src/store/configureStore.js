import {
	applyMiddleware,
	compose,
	createStore
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import monitorReducerEnhancer from './enhancers/monitorReducerEnhancer';
import loggerMiddleware from './middleware/loggerMiddleware';
import rootReducer from './reducers/rootReducer';

const configureStore = (preloadedState) => {
	const middlewares = [loggerMiddleware, thunkMiddleware];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
	const composedEnhancers = compose(...enhancers);

	const store = createStore(rootReducer, preloadedState, composedEnhancers);

	return store;
}

export default configureStore;