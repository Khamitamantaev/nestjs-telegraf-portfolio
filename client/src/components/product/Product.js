import React from 'react'
import { Form, Col } from 'react-bootstrap';
import Loading from '../../components/loading/Loading'
import ErrorMessage from '../../components/error/ErrorMessage'
import FileBase from 'react-file-base64'
import SimpleModal from '../modal/Modal'
const Product = ({
    title,
    submitButton,
    submitHandler,
    handleDeleteSubmit,
    handleChange,
    error,
    loading,
    resize,
    state,
    setState,
    show,
    handleClose,
    handleShow
}) => {
    return (
        <main className="page product-page">
            <section className="clean-block clean-product dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">{title}</h2>
                    </div>
                    <div className="block-content">
                        <div className="product-info">
                            <div className="row">
                                <div className="col-md-6">
                                    {state._id ?
                                        <div style={{ textAlign: 'center' }}>
                                            <div>
                                                <a>
                                                    <img className="img-fluid d-block mx-auto" src={state.selectedFile} alt='simple' />
                                                </a>

                                            </div>
                                            <div style={{ display: 'inline-block' }}>
                                                <FileBase

                                                    type="file"
                                                    multiple={false}
                                                    onDone={async ({ base64 }) => setState({ ...state, selectedFile: await resize(base64, 300, 400) })}
                                                />
                                            </div>
                                        </div>
                                        :
                                        <FileBase
                                            type="file"
                                            multiple={false}
                                            onDone={async ({ base64 }) => setState({ ...state, selectedFile: await resize(base64, 300, 400) })}
                                        />}
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
                                                                {submitButton}
                                                            </button>
                                                        </div>
                                                    </form>
                                                    <button
                                        className="btn btn-danger btn-block"
                                        onClick={handleShow}
                                    >
                                        Delete Product
                                    </button>
                                                </div>
                                                
                                            </section>
                                        </main>
                                    </div>
                                </div>
                                <div>
                    
                                    <SimpleModal
                                        show={show}
                                        submitButtonText="Delete"
                                        handleSubmit={handleDeleteSubmit} 
                                        headingText="Delete Product"
                                        questionText="You shure delete this product?"
                                        handleClose={handleClose}
                                    />
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

export default Product