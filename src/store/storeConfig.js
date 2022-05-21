import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';

import loggerMiddleware from './middleware/loggerMiddleware';
import rootReducer from './reducers/rootReducer';

const storeConfig = (preloadedState) => {
	const middlewares = [loggerMiddleware, thunkMiddleware];

	const store = configureStore({
		reducer: rootReducer,
		middleware: middlewares,
		preloadedState,
	});

	return store;
}

export default storeConfig;