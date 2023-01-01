import React, { useEffect, useState } from 'react'
import Loading from '../../components/loading/Loading'
import ErrorMessage from '../../components/error/ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions'
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo }  = userLogin

    useEffect(() => {
        if(userInfo) {
            navigate("/");
        }
    }, [navigate, userInfo])

    const submitHandler = async (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }


    return (
        <div>
            <main className="page login-page">
                <section className="clean-block clean-form dark">
                    <div className="container">
                        <div className="block-heading">
                            <h2 className="text-info">Log In</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                        </div>
                      
                        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                        {loading && <Loading/>}
            
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    className="form-control item"
                                    type="email"
                                    id="email"
                                    value={email}
                                    placeholder='Enter Email'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    className="form-control" 
                                    type="password" 
                                    id="password" 
                                    placeholder='Enter Password' 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="checkbox" />
                                    <label className="form-check-label" htmlFor="checkbox">Remember me</label>
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">Log In</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default LoginScreen