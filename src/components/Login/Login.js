import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const emailRef = useRef('')
    const passRef = useRef('')
    const navigate = useNavigate();

    const navigateRegister =()=>{
        navigate('/register');
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
    }
    return (
        <div className='container w-25 mx-auto login-form'>
            <h1 className='text-center mb-5 login-title'>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passRef} required/>
                </Form.Group>
                <Button variant="warning" type="submit">
                    LOGIN
                </Button>
                </Form>
                <p className='my-3'>New to Fitness Studio? <span className='highlighted-text' onClick={navigateRegister}>Register Now</span></p>
        </div>
    );
};

export default Login;