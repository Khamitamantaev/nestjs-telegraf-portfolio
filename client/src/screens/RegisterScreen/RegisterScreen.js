import React, { useState, useEffect } from 'react'
import ErrorMessage from '../../components/error/ErrorMessage'
import Loading from '../../components/loading/Loading'
import axios from 'axios'

const RegisterScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            setMessage(null)
            try {
                const config = {
                    headers: {
                        "Content-type": "application/json"
                    }
                }
                setLoading(true) // Начало загрузки
                const { data } = await axios.post('http://127.0.0.1:5000/api/auth/register', {
                    login: email,
                    password: password
                }, config)
                console.log(data)
                localStorage.setItem('userInfo', JSON.stringify(data))
                setLoading(false) // Конец загрузки
            } catch (error) {
                setError(error.response.data.message)
                setTimeout(() => setError(false), 4000)
                setLoading(false)
            }
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