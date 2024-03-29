import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productList, setCurrentProductAction } from '../../actions/productActions'
import ErrorMessage from '../../components/error/ErrorMessage'
import Loading from '../../components/loading/Loading'
import { useNavigate } from "react-router-dom";
import Product from './Product'
import './Products.css'

const Products = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const { products, loading, error, productsLength } = useSelector((state) => state.productList)
    const { userInfo } = useSelector((state) => state.userLogin)
    const productCreate = useSelector((state) => state.productCreate)
    const { success: successCreate } = productCreate
    const [currentSkip, setCurrentSkip] = useState(0)
    const [currentLimit, setCurrentLimit] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedCategories, setSelectedCategories] = useState(["phone"])

    const skipCountHandler = (skip) => {
        // console.log({ "SKIP/CURRENT_LIMIT" : skip/currentLimit, "MATH": Math.ceil(productsLength/currentLimit)})
        if (skip < 0 || skip / currentLimit >= Math.ceil(productsLength / currentLimit)) {
            return
        } else {
            setCurrentSkip(skip);
            setCurrentPage(skip === 0 ? 1 : skip / 6 + 1)
        }
    }

    const handleChange = (e) => {
        if (e.target.checked) {
            setSelectedCategories([...selectedCategories, e.target.value])
        } else {
            setSelectedCategories(selectedCategories.filter((category) => category !== e.target.value));
        }
    }

    const handleClick = (product) => {
        // console.log(product)
        dispatch(setCurrentProductAction(product))
        navigate("/updateproduct");
    }


    useEffect(() => {
        if (!userInfo) {
            navigate("/");
        }
        // console.log('SELECTED:', selectedCategories)
        // console.log('SKIP: ',currentSkip)
        dispatch(productList(selectedCategories, currentLimit, currentSkip))
    }, [dispatch, navigate, userInfo, successCreate, currentLimit, currentSkip, selectedCategories])

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
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultChecked="true" id="formCheck-1" value="phone" onChange={handleChange} />
                                                <label className="form-check-label" htmlFor="formCheck-1">Phones</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="formCheck-2" value="computer" onChange={handleChange} />
                                                <label className="form-check-label" htmlFor="formCheck-2">Computers</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="formCheck-3" value="sport"  onChange={handleChange} />
                                                <label className="form-check-label" htmlFor="formCheck-3">Sport</label>
                                            </div>
                                        </div>
                                        {/* <div className="filter-item">
                                            <h3>Brands</h3>
                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-5" /><label className="form-check-label" htmlFor="formCheck-5">Samsung</label></div>
                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-6" /><label className="form-check-label" htmlFor="formCheck-6">Apple</label></div>
                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-7" /><label className="form-check-label" htmlFor="formCheck-7">HTC</label></div>
                                        </div>
                                        <div className="filter-item">
                                            <h3>OS</h3>
                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-8" /><label className="form-check-label" htmlFor="formCheck-8">Android</label></div>
                                            <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-9" /><label className="form-check-label" htmlFor="formCheck-9">iOS</label></div>
                                        </div> */}
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
                                    {error && userInfo ? <ErrorMessage variant='danger'>{error}</ErrorMessage> : null}
                                    {loading && <Loading />}
                                    <div className="row no-gutters">
                                        {products ? products.map((pr) => <Product handleClick={handleClick} key={pr._id} product={pr} />) : null}
                                    </div>
                                    <nav>
                                        <ul className="pagination fixed-bottom">
                                            <li className="page-item" onClick={() => skipCountHandler(currentSkip - 6)}>
                                                <a className="page-link" aria-label="Previous" href="#">
                                                    <span aria-hidden="true">«</span>
                                                </a>
                                            </li>
                                            {currentPage - 1 !== 0 ? <li className="page-item"><a className="page-link" href="#">{currentPage - 1}</a></li> : null}
                                            <li className="page-item active"><a className="page-link" href="#">{currentPage}</a></li>
                                            <li className="page-item"><a className="page-link" href="#">{currentPage + 1}</a></li>
                                            <li className="page-item" href="#">
                                                <a className="page-link"
                                                    href="#"
                                                    onClick={() => skipCountHandler(currentSkip + 6)}
                                                    aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                </a>
                                            </li>
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