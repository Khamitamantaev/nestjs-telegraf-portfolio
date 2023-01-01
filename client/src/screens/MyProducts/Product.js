import React from 'react'

const Product = ({ price, title }) => {
    return (
        <div className="col-sm-6 col-lg-4">
            <div className="clean-related-item">
                <div className="image">
                    <a href="#">
                        <img className="img-fluid d-block mx-auto" src="assets/img/tech/image2.jpg" />
                    </a>
                </div>
                <div className="related-name"><a href="#">{title}</a>
                    <div className="rating"><img src="assets/img/star.svg" />
                    <img src="assets/img/star.svg" /><img src="assets/img/star.svg" />
                    <img src="assets/img/star-half-empty.svg" /><img src="assets/img/star-empty.svg" />
                </div>
                    <h4>${price}</h4>
                </div>
            </div>
        </div>
    )
}

export default Product