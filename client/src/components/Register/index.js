import React, { Component } from 'react';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import API from '../../utils/API';
import './style.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: null,
            lastname: null,
            emailaddress: null,
            username: null,
            password: null,
            redirectTo: null
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
		event.preventDefault();
        const response = await API.createUser(this.state)
        console.log(this.state);
        console.log(response);
        if (response.status === 200) this.props.handleSuccess();
	};

    render() {
        return (
            <div>
            <h1>Let's get started, shall we?</h1>
            <p>Submit your info below and we'll whip up an account for you.</p>
            <Form noValidate>
                <Form.Group as={Row} controlId="formFirstName">
                    <Col sm={12}>
                        <Form.Control
                            className="inputsize"
                            type="text"
                            placeholder="First Name"
                            name="firstname"
                            onChange={this.handleInputChange}
                            required
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formLastName">
                    <Col sm={12}>
                        <Form.Control
                            className="inputsize"
                            type="text"
                            placeholder="Last Name"
                            name="lastname"
                            onChange={this.handleInputChange}
                            required
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formEmail">
                    <Col sm={12}>
                        <Form.Control
                            className="inputsize"
                            type="email"
                            placeholder="Email"
                            name="emailaddress"
                            onChange={this.handleInputChange}
                            required
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formUsername">
                    <Col sm={12}>
                        <InputGroup>
                            <Form.Control
                                className="inputsize"
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange={this.handleInputChange}
                                required
                            />
                            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                        </InputGroup>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPassword">
                    <Col sm={12}>
                        <Form.Control
                            className="inputsize"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={this.handleInputChange}
                            required
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Button type="submit" className="quizBtn" onClick={this.handleSubmit}>Sign me up!</Button>
            </Form>
            </div>
        );
    }
}

export default Register;
