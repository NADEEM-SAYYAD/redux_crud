import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <React.Fragment>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand to="/">Users Management</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="/">
                                <Nav.Link>System Users</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/addUser">
                                <Nav.Link>Add User</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}
export default Navigation;