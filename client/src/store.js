import { configureStore, combineReducers, applyMiddleware  } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer'
import { 
    currentProductReducer, 
    productCreateReducer, 
    productDeleteReducer, 
    productListReducer, 
    productUpdateReducer 
} from './reducers/productReducer'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    productList: productListReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    currentProduct: currentProductReducer,
    productDelete: productDeleteReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')):null
const currentProductFromStorage = localStorage.getItem('currentProduct')? JSON.parse(localStorage.getItem('currentProduct')):null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    currentProduct: { product: currentProductFromStorage } 
}

const store = configureStore(
{ 
    reducer: rootReducer, 
    preloadedState: initialState,
    composedEnhancer
})

export default store