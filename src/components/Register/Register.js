import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

      const [updateProfile, updating, profileError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin =()=>{
        navigate('/login');
    }
    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const pass = event.target.pass.value;
        createUserWithEmailAndPassword(email,pass);
    }

    if(user){
        navigate('/home');
    }
    return (        
        <div>            
            <div className='container w-25 mx-auto login-form'>
            <h1 className='register-title mb-3'>Register Now</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Write your name" required/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='pass' placeholder="Password" required/>
                </Form.Group>
                <Button variant="warning" type="submit">
                    Register
                </Button>
                </Form>
                <p className='my-3'>Already Have An Account? <span className='highlighted-text' onClick={navigateLogin}>Please Login</span></p>
                <div className='text-center'>OR</div>
                <SocialLogin></SocialLogin>
        </div>
        </div>
    );
};

export default Register;
