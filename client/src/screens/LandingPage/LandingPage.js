import React,{ useEffect } from 'react'
import './LandingPage.css'
import { Button, Container, Row } from 'react-bootstrap'

const LandingPage = () => {

    // useEffect(() => {
    //     const userJwt = localStorage.getItem('jwt')
    //     if(userJwt) {
    //         history.push("/products")
    //     }
    // }, [history, userJwt])

  return (
    <div className='main'>
        <Container>
            <Row>
                <div className='intro-text'>
                    <div>
                        <h1 className='title'> Welcome to Khammerson App</h1>
                        <p className='subtitle'>One store for everyone.</p>
                    </div>
                    <div className='buttonContainer'>
                        <a href='/login'>
                            <Button  className='loginButton'>
                                Login
                            </Button>
                        </a>
                        <a href='/register'>
                            <Button  className='registerButton' variant='outline-primary'>
                                Signup
                            </Button>
                        </a>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default LandingPage