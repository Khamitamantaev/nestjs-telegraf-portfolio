import { 
    USER_LOGIN_FAIL, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT, 
    USER_REGISTER_FAIL, 
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS 
} from "../constants/userConstants"
import axios from 'axios'
import { authLogin, authRegister } from "../api"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
        const { data } = await axios.post(authLogin, {
            login: email,
            password: password
        }, config)
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message : error.message
        })
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}

export const register = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
        
        const { data } = await axios.post(authRegister, {
            login: email,
            password: password
        }, config)
        dispatch({ type: USER_REGISTER_SUCCESS })
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message : error.message
        })
    }
}