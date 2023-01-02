import React, { useState, setState } from 'react'
import Form from 'react-bootstrap/Form';
import Loading from '../../components/loading/Loading'
import ErrorMessage from '../../components/error/ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { createProductAction } from '../../actions/productActions';

const CreateProduct = () => {

    const [state, setState] = useState({
        title: "",
        category: "phone",
        price: 0,
        description: ""
    })


    const resetHandler = () => {
        setState({
            title: "",
            category: "",
            price: 0,
            description: ""
        })
    }

    let navigate = useNavigate();
    const dispatch = useDispatch()
    const productCreate = useSelector((state) => state.productCreate)
    const { loading, error } = productCreate


    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(!state.title || !state.description || state.price === 0) return
        dispatch(createProductAction(state.title, state.price, state.description, state.category))
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
                                    <a href="assets/img/tech/image1.jpg">
                                        <img className="img-fluid d-block mx-auto" src="assets/img/tech/image1.jpg" alt='figbassw' />
                                    </a>
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
                                                            <label>Title</label>
                                                            <input className="form-control"
                                                                name='title'
                                                                type="text"
                                                                value={state.title}
                                                                placeholder="Enter the title"
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Category</label>
                                                            <Form.Select
                                                                name='category'
                                                                aria-label="Default select example"
                                                                onChange={handleChange}
                                                                value={state.category}
                                                            >
                                                                <option value="phone">Phone</option>
                                                                <option value="computer">Computer</option>
                                                                <option value="sport">Sport</option>
                                                            </Form.Select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Price</label>
                                                            <input className="form-control"
                                                                name='price'
                                                                type="number"
                                                                value={state.price}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Description</label>
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