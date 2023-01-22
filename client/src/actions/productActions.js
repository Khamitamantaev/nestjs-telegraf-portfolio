import axios from "axios";
import { createProductUrl, deleteProductUrl, findProductsUrl, updateProductUrl } from "../api";
import { 
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CURRENT_FAIL,
    PRODUCT_CURRENT_REQUEST,
    PRODUCT_CURRENT_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_UPDATE_FAIL, 
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS
} from "../constants/productConstants";

export const productList = (categories, limit, skip) => async (dispatch, getState) => {
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

        const { data } = await axios.post(findProductsUrl, {
            categories,
            limit,
            skip
        }, config)

        // console.log('DATA:', data)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data[0].results,
            length: data[0].count.length ? data[0].count[0].count: 0,
            limit,
            skip
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message : error.message
        })
    }
}

export const createProductAction = (title, price, description, categories, selectedFile) => async (dispatch, getState) => {
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

        const { data } = await axios.post(createProductUrl, {
            title, 
            price, 
            description, 
            categories,
            selectedFile
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

export const updateProductAction = (title, price, description, categories, selectedFile, _id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_UPDATE_REQUEST
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

        const { data } = await axios.put(updateProductUrl + '/' + _id, {
            title, 
            price, 
            description, 
            categories,
            selectedFile
        }, config)

        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message : error.message
        })
    }
}

export const setCurrentProductAction = (product) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CURRENT_REQUEST
        })

        dispatch({
            type: PRODUCT_CURRENT_SUCCESS,
            payload: product
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_CURRENT_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message : error.message
        })
    }
}

export const deleteProductAction = (_id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST
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

        const { data } = await axios.delete(deleteProductUrl + '/' + _id, config)

        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message : error.message
        })
    }
}