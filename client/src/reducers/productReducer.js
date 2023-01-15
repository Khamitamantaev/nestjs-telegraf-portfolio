import { 
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_REQUEST, 
    PRODUCT_CREATE_SUCCESS, 
    PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS 
} from "../constants/productConstants"

export const productListReducer = (state = { products: [], skip: 0, limit: 6, productsLength: 0}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true }
        case PRODUCT_LIST_SUCCESS:
            return { 
                loading: false, 
                products: action.payload,
                productsLength: action.length,
                skip: action.skip, 
                limit: action.limit,
            }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true }
        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}