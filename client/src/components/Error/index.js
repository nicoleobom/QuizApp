import React from 'react';
import { Toast } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ErrorMessage() {
    return (
        window.alert('Please enter a username and password')
    )
}

export default ErrorMessage;