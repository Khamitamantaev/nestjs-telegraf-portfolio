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

export const productUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true }
        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const currentProductReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CURRENT_REQUEST:
            return { loading: true }
        case PRODUCT_CURRENT_SUCCESS:
            return { 
                loading: false, 
                product: action.payload
            }
        case PRODUCT_CURRENT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true }
        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}