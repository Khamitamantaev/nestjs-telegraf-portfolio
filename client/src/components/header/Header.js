import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link ,useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/userActions';
const Header = () => {
    const dispatch = useDispatch()
    // const userLogin = useSelector(state => state.userLogin)
    let navigate = useNavigate();
    // const { userInfo } = userLogin
    const logoutHandler = () => {
        dispatch(logout())
        navigate("/");
    }

    // useEffect(() => {
    //   console.log('UserInfo from Header: ', userInfo)
    // }, [userInfo])
    

    return (
        <Navbar bg="primary" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand as={Link} to="/">
                        Khammerson
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className='ml-auto'
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/products">
                                Products
                        </Nav.Link>
                        <NavDropdown title="Khamit Amantaev" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action4">
                                My Profile
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logoutHandler}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header