import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
            <LinkContainer to="/">
                <Navbar.Brand>Portfolio</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/resume">
                        <Nav.Link>About Me</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contactme">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;