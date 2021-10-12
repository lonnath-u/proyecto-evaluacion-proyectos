import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
export default function HeaderComponentEvaluator(){
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
                                <a href="/Evaluator" className="text-sha btn btn-dark text-start">Inicio</a>
                                <a href="/CreateProjectEvaluator" className="text-sha btn btn-dark text-start">Nuevo Proyecto</a>
                                <a href="/EvaluateProjects" className="text-sha btn btn-dark text-start">Evaluar</a>
                                <a href="/" className="text-sha btn btn-dark text-start">Cerrar Sesion</a>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}