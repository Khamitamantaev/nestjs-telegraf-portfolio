import axios from "axios";
import { 
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
            category: 'almata',
            limit: 5
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