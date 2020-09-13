import React from 'react';
import { Container, Jumbotron, Form, Button } from 'react-bootstrap';
import API from '../utils/API';

class Settings extends React.Component {
    state = {
        newUsername: "",
        newPassword: "",
        isSignedIn: true
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        const { newUsername, newPassword } = this.state;
        if (!newUsername.length || !newPassword.length) alert ('Please make sure your username is more than 3 characters and your password is more than 8 characters.')
        const response = await API.updateUserInfo({ newUsername, newPassword })
        if (response.status === 200) alert ('Saved!')
    }

    render() { 
        return(
        <Container className="my-auto signin">
         <Jumbotron className="px-5 py-4 m-0 text-center jumbo">
           <h1>Settings</h1>
             <Form>
               <Form.Group controlId="formUsername">
                 <Form.Control 
                   className="inputsize"
                   value={this.state.newUsername}
                   type="text" 
                   placeholder="Update your username" 
                   name='newUsername'
                   onChange={this.handleInputChange}
                   />
               </Form.Group>
 
               <Form.Group controlId="formBasicPassword">
                 <Form.Control
                 className="inputsize"
                 value={this.state.newPassword} 
                 type="password" 
                 placeholder="Update your password"
                 name= "newPassword"
                 onChange={this.handleInputChange}
                 />
               </Form.Group>
               <Button className="quizBtn" variant="primary" type="submit" onClick={this.handleFormSubmit}>
                 Save!
               </Button>
             </Form>
         </Jumbotron>
       </Container>
   )
   }
}

export default Settings;