import React from "react";
import { Button, Row, Col, Form, Container, Jumbotron, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../utils/API";


export default class SignIn extends React.Component {
  state = {
    username: "",
    password: "",
    isSignedIn: false
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    
    this.setState({ [name]: value });
  };

  handleFormSubmit = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    debugger;
    if(!username.length || !password.length) alert('Please enter both a username and password');
    const response = await API.loginUser({ username, password })
    if(response.status === 200) {
      this.props.history.push('/')
      this.setState({ isSignedIn: true })
    }
  };

  render() { 
    return(
      <Container className="my-auto signin">
        <Row className="logo-center">
          <Col sm='12'>
            <Navbar.Brand>
              <img src={require("../assets/logo.png")} width="350px" alt="logo" />
            </Navbar.Brand>
          </Col>
        </Row>
        <Row>
          <Col sm='12'>
            <Jumbotron className="px-5 py-4 m-0 text-center jumbo">
              <h1>Hello there!</h1>
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Control 
                    className="inputsize"
                    value={this.state.username}
                    type="text" 
                    placeholder="Username" 
                    name='username'
                    onChange={this.handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                  className="inputsize"
                  value={this.state.password} 
                  type="password" 
                  placeholder="Password"
                  name= "password"
                  onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <p className="signUp">Don't have an account? <Link to="/signup" className="signUpLink">Sign Up</Link></p>
                </Form.Group>
                <Button className="quizBtn" variant="primary" type="submit" onClick={this.handleFormSubmit}>
                  Let me in!
                </Button>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
  )
  }
};