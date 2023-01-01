import React from 'react'

const AuthLandingPage = () => {
    return (
        <main className="page landing-page">
            <section className="clean-block clean-hero" style={{ backgroundImage: 'url("assets/img/tech/image4.jpg")', color: 'rgba(9, 162, 255, 0.85)' }}>
                <div className="text">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p><button className="btn btn-outline-light btn-lg" type="button">Learn More</button></div>
            </section>
            <section className="clean-block clean-info dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">Info</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6"><img className="img-thumbnail" src="assets/img/scenery/image5.jpg" /></div>
                        <div className="col-md-6">
                            <h3>Lorem impsum dolor sit amet</h3>
                            <div className="getting-started-info">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div><button className="btn btn-outline-primary btn-lg" type="button">Join Now</button></div>
                    </div>
                </div>
            </section>
            <section className="clean-block features">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">Features</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-5 feature-box">
                            <i className="icon-star icon"/>
                            <h4 style={{ marginLeft: "40px"}}>Bootstrap 4</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                        </div>
                        <div className="col-md-5 feature-box"><i className="icon-pencil icon" />
                            <h4 style={{ marginLeft: "40px"}}>Customizable</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                        </div>
                        <div className="col-md-5 feature-box"><i className="icon-screen-smartphone icon" />
                            <h4 style={{ marginLeft: "40px"}}>Responsive</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                        </div>
                        <div className="col-md-5 feature-box"><i className="icon-refresh icon" />
                            <h4 style={{ marginLeft: "40px"}}>All Browser Compatibility</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="clean-block about-us">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-lg-4">
                            <div className="card clean-card text-center"><img className="card-img-top w-100 d-block" src="assets/img/avatars/avatar1.jpg" />
                                <div className="card-body info">
                                    <h4 className="card-title">John Smith</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <div className="icons"><a href="#"><i className="icon-social-facebook" /></a><a href="#"><i className="icon-social-instagram" /></a><a href="#"><i className="icon-social-twitter" /></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="card clean-card text-center"><img className="card-img-top w-100 d-block" src="assets/img/avatars/avatar2.jpg" />
                                <div className="card-body info">
                                    <h4 className="card-title">Robert Downturn</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <div className="icons"><a href="#"><i className="icon-social-facebook" /></a><a href="#"><i className="icon-social-instagram" /></a><a href="#"><i className="icon-social-twitter" /></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="card clean-card text-center"><img className="card-img-top w-100 d-block" src="assets/img/avatars/avatar3.jpg" />
                                <div className="card-body info">
                                    <h4 className="card-title">Ally Sanders</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <div className="icons"><a href="#"><i className="icon-social-facebook" /></a><a href="#"><i className="icon-social-instagram" /></a><a href="#"><i className="icon-social-twitter" /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AuthLandingPage