import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { createProductAction } from '../../actions/productActions';
import Product from '../../components/product/Product';

const CreateProduct = () => {
    const [state, setState] = useState({
        title: "",
        categories: [],
        price: 0,
        description: "",
        selectedFile: ""
    })

    const resetHandler = () => {
        setState({
            title: "",
            categories: [],
            price: 0,
            description: ""
        })
    }

    let navigate = useNavigate();
    const dispatch = useDispatch()
    const productCreate = useSelector((state) => state.productCreate)
    const { userInfo } = useSelector((state) => state.userLogin)
    const { loading, error } = productCreate

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
        dispatch(createProductAction(state.title, state.price, state.description, state.categories, state.selectedFile))
        resetHandler()
        navigate('/products')
    }

    return <Product
        state={state}
        error={error}
        handleChange={handleChange}
        loading={loading}
        resize={resizeImage}
        setState={setState}
        submitButton="Create"
        submitHandler={submitHandler}
        title="Create Product"
    />
}

export default CreateProduct