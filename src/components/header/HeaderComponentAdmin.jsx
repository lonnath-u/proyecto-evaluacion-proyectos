import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
export default function HeaderComponentAdmin(){
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                        <Navbar.Brand href="/">Evaluador Proyectos</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>
                                <a href="/Admin" className="text-sha btn btn-dark text-start">Inicio</a>
                                <a href="/AssignProjects" className="text-sha btn btn-dark text-start">Asignar Proyectos</a>
                                <a href="/" className="text-sha btn btn-dark text-start">Cerrar Sesion</a>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}