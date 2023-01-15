import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {  updateProductAction } from '../../actions/productActions';
import Product from '../../components/product/Product';

const UpdateProduct = () => {

    const product = useSelector((state) => state.currentProduct.product)
   
    const [state, setState] = useState(product)

    let navigate = useNavigate();
    const dispatch = useDispatch()
    const productUpdate = useSelector((state) => state.productUpdate)
    const { userInfo } = useSelector((state) => state.userLogin)
    const { loading, error } = productUpdate

    useEffect(() => {
        if (!userInfo) {
            navigate("/");
        }
    }, [dispatch, navigate, userInfo])


    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.name === 'categories' ? state.categories.slice.call(e.target.selectedOptions).map(item => item.value) : e.target.value
        });
    }

    const resizeImage = (base64Str, maxWidth = 400, maxHeight = 350) => {
        return new Promise((resolve) => {
            let img = new Image()
            img.src = base64Str
            img.onload = () => {
                let canvas = document.createElement('canvas')
                const MAX_WIDTH = maxWidth
                const MAX_HEIGHT = maxHeight
                let width = img.width
                let height = img.height

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width
                        width = MAX_WIDTH
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height
                        height = MAX_HEIGHT
                    }
                }
                canvas.width = width
                canvas.height = height
                let ctx = canvas.getContext('2d')
                ctx.drawImage(img, 0, 0, width, height)
                resolve(canvas.toDataURL())
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (!state.title || !state.description || state.price <= 0 || !state.selectedFile || state.categories.length === 0) return
        dispatch(updateProductAction(state.title, state.price, state.description, state.categories, state.selectedFile, state._id))
        navigate('/products')
    }

    return <Product
        state={state}
        error={error}
        handleChange={handleChange}
        loading={loading}
        resize={resizeImage}
        setState={setState}
        submitButton="Update"
        submitHandler={submitHandler}
        title="Update Product"
    />
}

export default UpdateProduct