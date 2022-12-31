import { configureStore, combineReducers, applyMiddleware  } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const rootReducer = combineReducers({
    reducer: {}
})

const initialState = {}

const store = configureStore(
{ 
    reducer: rootReducer, 
    preloadedState: initialState,
    composedEnhancer
})

console.log(store.getState())

export default store