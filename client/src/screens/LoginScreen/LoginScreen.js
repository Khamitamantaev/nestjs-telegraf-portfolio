import React from 'react'

const LoginScreen = () => {
    return (
        <div>
            <main className="page login-page">
                <section className="clean-block clean-form dark">
                    <div className="container">
                        <div className="block-heading">
                            <h2 className="text-info">Log In</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                        </div>
                        <form>
                            <div className="form-group"><label htmlFor="email">Email</label><input className="form-control item" type="email" id="email" /></div>
                            <div className="form-group"><label htmlFor="password">Password</label><input className="form-control" type="password" id="password" /></div>
                            <div className="form-group">
                                <div className="form-check"><input className="form-check-input" type="checkbox" id="checkbox" /><label className="form-check-label" htmlFor="checkbox">Remember me</label></div>
                            </div><button className="btn btn-primary btn-block" type="submit">Log In</button></form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default LoginScreen