import React from 'react'
import { Image } from 'react-bootstrap';

const Product = ({ title, price, selectedFile, href }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
    <div className="clean-product-item">
        <div className="image">
            <a href={href}>
                <img className="img-fluid d-block mx-auto" src={selectedFile} alt='simple'  />
            </a>
        </div>
        <div className="product-name"><a href="#">{title}</a></div>
        <div className="about">
            <div className="rating">
                <img src="assets/img/star.svg"  alt='star'/>
                <img src="assets/img/star.svg" alt='star'/>
                <img src="assets/img/star.svg" alt='star'/>
                <img src="assets/img/star-half-empty.svg" alt='star'/>
                <img src="assets/img/star-empty.svg" alt='star'/>
            </div>
            <div className="price">
                <h3>${price}</h3>
            </div>
        </div>
    </div>
</div>
  )
}

export default Product