import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../../actions/productActions'
import ErrorMessage from '../../components/error/ErrorMessage'
import Loading from '../../components/loading/Loading'
import MainScreen from '../../components/main-screen/MainScreen'
import ProductItem from './ProductItem'
import { useNavigate } from "react-router-dom";


const MyProducts = () => {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.productList)
  const { userInfo } = useSelector((state)=> state.userLogin)
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(productList())
    if(!userInfo) {
        navigate("/");
    }
  }, [dispatch, navigate, userInfo])

  return (
    <MainScreen title="Welcome to Products">
      <main className="page product-page">
        <section className="clean-block clean-product dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Product Page</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
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
                      <h3>Lorem Ipsum</h3>
                      <div className="rating">
                        <img src="assets/img/star.svg" alt='star' />
                        <img src="assets/img/star.svg" alt='star' />
                        <img src="assets/img/star.svg" alt='star'/>
                        <img src="assets/img/star-half-empty.svg" alt='star' />
                        <img src="assets/img/star-empty.svg" alt='star' />
                      </div>
                      <div className="price">
                        <h3>$300.00</h3>
                      </div><button className="btn btn-primary" type="button"><i className="icon-basket" />Add to Cart</button>
                      <div className="summary">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nunc, pretium at augue at, convallis pellentesque ipsum. Vestibulum diam risus, sagittis at fringilla at, pulvinar vel risus. Vestibulum dignissim
                          eu nulla eu imperdiet. Morbi mollis tellus a nunc vestibulum consequat. Quisque tristique elit et nibh dapibus sodales. Nam sollicitudin a urna sed iaculis.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-info">
                <div>
                  <ul className="nav nav-tabs" id="myTab">
                    <li className="nav-item">
                      <a className="nav-link active" 
                        role="tab" data-toggle="tab" 
                        id="description-tab" 
                        href="#description"
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" id="specifications-tabs" href="#specifications">Specifications</a></li>
                    <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" id="reviews-tab" href="#reviews">Reviews</a></li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane active fade show description" role="tabpanel" id="description">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <div className="row">
                        <div className="col-md-5">
                          <figure className="figure">
                            <img className="img-fluid figure-img" src="assets/img/tech/image3.png" alt='figbass' />
                          </figure>
                        </div>
                        <div className="col-md-7">
                          <h4>Lorem Ipsums</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-7 right">
                          <h4>Lorem Ipsum</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="col-md-5">
                          <figure className="figure">
                            <img className="img-fluid figure-img" src="assets/img/tech/image3.png"  alt='figbass' />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade show specifications" role="tabpanel" id="specifications">
                      <div className="table-responsive table-bordered">
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <td className="stat">Display</td>
                              <td>5.2"</td>
                            </tr>
                            <tr>
                              <td className="stat">Camera</td>
                              <td>12MP</td>
                            </tr>
                            <tr>
                              <td className="stat">RAM</td>
                              <td>4GB</td>
                            </tr>
                            <tr>
                              <td className="stat">OS</td>
                              <td>iOS</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="tab-pane fade show" role="tabpanel" id="reviews">
                      <div className="reviews">
                        <div className="review-item">
                          <div className="rating">
                            <img src="assets/img/star.svg"  alt='star' />
                            <img src="assets/img/star.svg"  alt='star'/>
                            <img src="assets/img/star.svg"  alt='star'/>
                            <img src="assets/img/star.svg" alt='star' />
                            <img src="assets/img/star-empty.svg"  alt='star'/>
                          </div>
                          <h4>Incredible product</h4><span className="text-muted"><a href="#">John Smith</a>, 20 Jan 2018</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nunc, pretium at augue at, convallis pellentesque ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="review-item">
                          <div className="rating">
                            <img src="assets/img/star.svg" alt='star' />
                            <img src="assets/img/star.svg" alt='star' />
                            <img src="assets/img/star.svg" alt='star'/>
                            <img src="assets/img/star.svg" alt='star'/>
                            <img src="assets/img/star-empty.svg" alt='star'/>
                          </div>
                          <h4>Incredible product</h4>
                            <span className="text-muted">
                               <a href="#">John Smith</a>, 20 Jan 2018
                            </span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nunc, pretium at augue at, convallis pellentesque ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="review-item">
                          <div className="rating">
                            <img src="assets/img/star.svg" alt='star'/>
                            <img src="assets/img/star.svg" alt='star'/>
                            <img src="assets/img/star.svg" alt='star'/>
                            <img src="assets/img/star.svg" alt='star'/>
                            <img src="assets/img/star-empty.svg" alt='star'/>
                          </div>
                          <h4>Incredible product</h4><span className="text-muted"><a href="#">John Smith</a>, 20 Jan 2018</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nunc, pretium at augue at, convallis pellentesque ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clean-related-items">
                <h3>Related Products</h3>
                {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                { loading && <Loading/> }
                <div className="items">
                  <div className="row justify-content-center">
                    {products ? products.map((pr) => <ProductItem title={pr.title} price={pr.price} />) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainScreen>
  )
}

export default MyProducts