import React from 'react';
import google from '../../images/social/google.png'
import facebook from '../../images/social/facebook.png'
import './SocialLogin.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    
    let errorElement;

    // if(loading){
    //     return <Loading></Loading>
    // }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate('/home');
    }
    return (
        <div>
            <div className="container social-login">
                
                <div className="google">
                    <button 
                    onClick={() => signInWithGoogle()}
                    style={{backgroudColor: 'white'}}>
                        <img src={google} alt="" />
                        Sign In With Google
                    </button>
                </div>

                {/* <div className="facebook">
                    <button>
                        <img src={facebook} alt="" />
                        Sign In With FaceBook
                    </button>
                </div> */}
                {errorElement}
            </div>
        </div>
    );
};

export default SocialLogin;