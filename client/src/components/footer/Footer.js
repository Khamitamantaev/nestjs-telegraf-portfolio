import React from 'react'
import './footer.css'
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <footer className='center'>
            <Container>
                <Row>
                    <Col className='text-center py-3'> Copyright &copy; Khammerson inc.</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer