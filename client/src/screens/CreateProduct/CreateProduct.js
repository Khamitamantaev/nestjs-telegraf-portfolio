import React, { useState, useEffect } from 'react'
import { Form, Col } from 'react-bootstrap';
import Loading from '../../components/loading/Loading'
import ErrorMessage from '../../components/error/ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { createProductAction } from '../../actions/productActions';
import FileBase from 'react-file-base64'
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
        console.log(state.categories)
        setState({
            ...state,
            [e.target.name] : e.target.name === 'categories' ? state.categories.slice.call(e.target.selectedOptions).map(item => item.value): e.target.value
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

    return (
        <main className="page product-page">
            <section className="clean-block clean-product dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">Create Product Page</h2>
                    </div>
                    <div className="block-content">
                        <div className="product-info">
                            <div className="row">
                                <div className="col-md-6">
                                    <FileBase
                                        type="file"
                                        multiple={false}
                                        onDone={async ({ base64 }) => setState({ ...state, selectedFile: await resizeImage(base64, 300, 400) })}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <div className="info">
                                        <main className="page contact-us-page">
                                            <section className="clean-block clean-form dark">
                                                <div className="container">
                                                    <form onSubmit={submitHandler}>
                                                        <div className="form-group">
                                                            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                                                            {loading && <Loading />}
                                                        </div>
                                                        <div className="form-group">
                                                            <Form.Label>Title</Form.Label>
                                                            <input className="form-control"
                                                                name='title'
                                                                type="text"
                                                                value={state.title}
                                                                placeholder="Enter the title"
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <Form.Label>Categories</Form.Label>
                                                            <Form.Group as={Col} controlId="my_multiselect_field">
                                                                <Form.Control name='categories' as="select" multiple value={state.categories} onChange={handleChange}>
                                                                    <option value="phone">Phone</option>
                                                                    <option value="computer">Computer</option>
                                                                    <option value="sport">Sport</option>
                                                                </Form.Control>
                                                            </Form.Group>
                                                        </div>
                                                        <div className="form-group">
                                                            <Form.Label>Price</Form.Label>
                                                            <input className="form-control"
                                                                name='price'
                                                                type="number"
                                                                value={state.price}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <Form.Label>Description</Form.Label>
                                                            <textarea
                                                                className="form-control"
                                                                name="description"
                                                                value={state.description}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <button
                                                                className="btn btn-primary btn-block"
                                                                type="submit"
                                                            >
                                                                Create Product
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </section>
                                        </main>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clean-related-items">
                            <h3>Related Products</h3>
                            {/* Здесь я хочу автоматом выводить продукты просто найденные с той же категории */}
                            {/* {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                            {loading && <Loading />}
                            <div className="items">
                                <div className="row justify-content-center">
                                    {products ? products.map((pr) => <ProductItem title={pr.title} price={pr.price} />) : null}
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CreateProduct