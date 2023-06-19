import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    return (
        <Navbar className='navbar' bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className='logotype' src="/sw-logo.png" alt="logotype" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='nav-item' as={NavLink} end to="/">Start</Nav.Link>
                        <Nav.Link className='nav-item' as={NavLink} end to="/films">Films</Nav.Link>
                        <Nav.Link className='nav-item' as={NavLink} end to="/people">Characters</Nav.Link>
                        <Nav.Link className='nav-item' as={NavLink} end to="/planets">Planets</Nav.Link>
                        <Nav.Link className='nav-item' as={NavLink} end to="/species">Species</Nav.Link>
                        <Nav.Link className='nav-item' as={NavLink} end to="/starships">Starships</Nav.Link>
                        <Nav.Link className='nav-item' as={NavLink} end to="/vehicles">Vehicles</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
