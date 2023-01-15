import { configureStore, combineReducers, applyMiddleware  } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer'
import { productCreateReducer, productListReducer } from './reducers/productReducer'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    productList: productListReducer,
    productCreate: productCreateReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')):null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const store = configureStore(
{ 
    reducer: rootReducer, 
    preloadedState: initialState,
    composedEnhancer
})

export default store