import axios from "axios";
import { 
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS 
} from "../constants/productConstants";

export const productList = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST
        })

        const {
            userLogin: { userInfo: { token } }
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${token.accessToken}`
            }
        }

        const { data } = await axios.post("http://127.0.0.1:5000/api/product/find", {
            category: 'phone',
            limit: 6
        }, config)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message : error.message
        })
    }
}

export const createProductAction = (title, price, description, category) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo: { token } }
        } = getState()

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token.accessToken}`
            }
        }

        const { data } = await axios.post("http://127.0.0.1:5000/api/product/create", {
            title, 
            price, 
            description, 
            category
        }, config)

        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message : error.message
        })
    }
}