import React, { useState, useEffect } from 'react'
import ErrorMessage from '../../components/error/ErrorMessage'
import Loading from '../../components/loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../actions/userActions'
import { useNavigate } from "react-router-dom";
const RegisterScreen = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const userRegister = useSelector((state) => state.userRegister)
    const { userInfo } = userLogin
    const { loading, error } = userRegister

    useEffect(() => {
        if(userInfo) {
            navigate("/products");
        }
    }, [navigate, userInfo])

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            setMessage("Password do not match")
        } else {
            dispatch(register(email, password))
        }
    }

    return (
        <div>
            <main className="page registration-page">
                <section className="clean-block clean-form dark">
                    <div className="container">
                        <div className="block-heading">
                            <h2 className="text-info">Registration</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                        </div>
                        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                        {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
                        {loading && <Loading />}
                        <form onSubmit={onSubmitHandler}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    value={email}
                                    className="form-control item"
                                    type="email" id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    value={password}
                                    className="form-control item"
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Confirm Password</label>
                                <input
                                    value={confirmPassword}
                                    className="form-control item"
                                    type="password"
                                    id="confirm_password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">Sign Up</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default RegisterScreen