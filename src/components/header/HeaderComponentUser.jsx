import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
export default function HeaderComponentUser(){
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
                                <a href="/User" className="text-sha btn btn-dark text-start">Inicio</a>
                                <a href="/CreateProjectUser" className="text-sha btn btn-dark text-start">Nuevo Proyecto</a>
                                <a href="/" className="text-sha btn btn-dark">Cerrar Sesion</a>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}