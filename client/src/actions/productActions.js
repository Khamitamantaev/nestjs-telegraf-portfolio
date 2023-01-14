import axios from "axios";
import { createProductUrl, findProductsUrl } from "../api";
import { 
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS 
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

        console.log(data)

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

// export const changePage = (currentPage, limit, skip ) => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: PRODUCT_LIST_SUCCESS,
//             payload: data,
//             limit,
//             skip
//         })
//     } catch (error) {
        
//     }
// }