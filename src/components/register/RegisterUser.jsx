import React from "react";
import {Row, Col, Button, Form} from 'react-bootstrap'
import SpinnerComponent from '../spinner/SpinnerComponent.jsx';
export default class RegisterUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documento : "",
            nombre: "",
            email: "",
            password:"",
            type: "",
            loading : true,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        const data = {
            documento : this.state.documento,
            nombre: this.state.nombre,
            email: this.state.email,
            password: this.state.password,
            type : this.state.type,
        }
        console.log(data);
        this.setState({loading:false});
        setTimeout(() => {
            window.location = "/";
        }, 2000);
        
        event.preventDefault();    
    }
    render() {
        return (
            <div className="w-100 mt-5">
                <div className="mx-auto w-50">
                    <Row className="border-bottom">
                        <Col>
                            <span className="font-32">
                                Registrar Usuario
                            </span> 
                        </Col>
                    </Row>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mx-1 my-3">
                            <Form.Label>Documento</Form.Label>
                            <Form.Control className="form-control" name="documento" value={this.state.documento} onChange={this.handleInputChange} maxLength="50" required/>
                        </Form.Group>
                        <Form.Group className="mx-1 my-3" controlId="formBasic">
                            <Form.Label>Nombre Completo:</Form.Label>
                            <Form.Control type="text" className="form-control"  name="nombre" value={this.state.nombre} onChange={this.handleInputChange} maxLength="100" required/>
                        </Form.Group>
                        <Form.Group className="mx-1 my-3" controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" className="form-control"  name="email" value={this.state.email} onChange={this.handleInputChange} maxLength="100" required/>
                        </Form.Group>
                        <Form.Group className="mx-1 my-3" controlId="formBasic">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control type="password" className="form-control"  name="password" value={this.state.password} onChange={this.handleInputChange} maxLength="100" required/>
                        </Form.Group>
                        <Form.Group className="mx-1 my-3">
                            <Form.Label>Tipo Usuario:</Form.Label>
                            <Form.Control size="sm" as="select" name="type" value={this.state.type} onChange={this.handleInputChange} required>
                                <option>Autor</option>
                                <option>Evaluador</option>
                            </Form.Control>
                        </Form.Group>
                        

                        <div id ="alerta">
                            {
                                this.state.loading ? this.state.alerta : <div class="d-flex justify-content-center mb-2"><SpinnerComponent /></div>
                            }
                        </div>
                        <div className="d-flex justify-content-end mb-2"> 
                            <a href="/" variant="danger" className="btn btn-danger ">
                                Cancelar
                            </a>
                            <Button variant="success" className="close-button mx-4" type="submit">
                                Crear
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}