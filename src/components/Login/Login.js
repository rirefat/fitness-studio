import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

const Login = () => {
    const emailRef = useRef('')
    const passRef = useRef('')
    const navigate = useNavigate();

    const navigateRegister =()=>{
        navigate('/register');
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        signInWithEmailAndPassword(email, pass)
    }

    if(user){
        navigate('/home')
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const resetPassword = async() =>{
        const email = emailRef.current.value;
        console.log(email)
        await sendPasswordResetEmail(email);
        toast('Check Email To Reset Password');
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
                <p className='my-3'>Forget Password? <span className='highlighted-text' onClick={resetPassword}>Reset Password</span></p>
                <div className='text-center'>OR</div>
                <SocialLogin></SocialLogin>
                <ToastContainer />
        </div>
    );
};

export default Login;