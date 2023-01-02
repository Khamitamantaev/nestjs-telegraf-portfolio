import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../../actions/productActions'
import ErrorMessage from '../../components/error/ErrorMessage'
import Loading from '../../components/loading/Loading'
import { useNavigate } from "react-router-dom";
import Product from './Product'

const Products = () => {
    const dispatch = useDispatch()
    const { products, loading, error } = useSelector((state) => state.productList)
    const { userInfo } = useSelector((state) => state.userLogin)

    const productCreate = useSelector((state) => state.productCreate)
    const { success: successCreate } = productCreate

    let navigate = useNavigate();

    useEffect(() => {
        dispatch(productList())
        if (!userInfo) {
            navigate("/");
        }
    }, [dispatch, navigate, userInfo, successCreate])

    return (
        <main className="page catalog-page">
            <section className="clean-block clean-catalog dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">Catalog Page</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="d-none d-md-block">
                                    <div className="filters">
                                        <div className="filter-item">
                                            <h3>Categories</h3>
                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-1" /><label className="form-check-label" htmlFor="formCheck-1">Phones</label></div>
                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-2" /><label className="form-check-label" htmlFor="formCheck-2">Laptops</label></div>
                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-3" /><label className="form-check-label" htmlFor="formCheck-3">PC</label></div>
                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-4" /><label className="form-check-label" htmlFor="formCheck-4">Tablets</label></div>
                                        </div>
                                        <div className="filter-item">
                                            <h3>Brands</h3>
                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-5" /><label className="form-check-label" htmlFor="formCheck-5">Samsung</label></div>
                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-6" /><label className="form-check-label" htmlFor="formCheck-6">Apple</label></div>
                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-7" /><label className="form-check-label" htmlFor="formCheck-7">HTC</label></div>
                                        </div>
                                        <div className="filter-item">
                                            <h3>OS</h3>
                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-8" /><label className="form-check-label" htmlFor="formCheck-8">Android</label></div>
                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-9" /><label className="form-check-label" htmlFor="formCheck-9">iOS</label></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-md-none"><a className="btn btn-link d-md-none filter-collapse" data-toggle="collapse" aria-expanded="false" aria-controls="filters" href="#filters" role="button">Filters<i className="icon-arrow-down filter-caret" /></a>
                                    <div className="collapse" id="filters">
                                        <div className="filters">
                                            <div className="filter-item">
                                                <h3>Categories</h3>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-1" /><label className="form-check-label" htmlFor="formCheck-1">Phones</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-2" /><label className="form-check-label" htmlFor="formCheck-2">Laptops</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-3" /><label className="form-check-label" htmlFor="formCheck-3">PC</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-4" /><label className="form-check-label" htmlFor="formCheck-4">Tablets</label></div>
                                            </div>
                                            <div className="filter-item">
                                                <h3>Brands</h3>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-5" /><label className="form-check-label" htmlFor="formCheck-5">Samsung</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-6" /><label className="form-check-label" htmlFor="formCheck-6">Apple</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-7" /><label className="form-check-label" htmlFor="formCheck-7">HTC</label></div>
                                            </div>
                                            <div className="filter-item">
                                                <h3>OS</h3>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-8" /><label className="form-check-label" htmlFor="formCheck-8">Android</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-9" /><label className="form-check-label" htmlFor="formCheck-9">iOS</label></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="products">
                                {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                                { loading && <Loading/> }
                                    <div className="row no-gutters">
                                        {products ? products.map((pr) => <Product key={pr._id} title={pr.title} price={pr.price} />) : null}
                                    </div>
                                    <nav>
                                        <ul className="pagination">
                                            <li className="page-item disabled"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Products