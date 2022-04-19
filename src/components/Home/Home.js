import React from 'react';
import img from '../../images/luke-layers.png'
import { Button, ProgressBar } from 'react-bootstrap';
import './Home.css';
import Package from '../Package/Package';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
    const navigateAboutPage=()=>{
        navigate('/about');
    }
    const navigateRegPage=()=>{
        navigate('/register');
    }
    return (        
        <div>
            {/*========================================== Top Banner Section ==========================================*/}
            <div className="top-banner" id='home-top'>
                <div className='w-50 mx-auto'>
                    <div>
                    <h1 className='secondary-title highlighted-orange'>Luke Owen</h1>
                    <h1 className='main-title'>Your New <span className='highlighted-orange'>Personal Trainer</span></h1>
                    <p className='mb-0'>Fitness Studio is more than a place where high performers come to be their best. </p>
                    <p className='m-0'>We’ve transformed every aspect of our membership to encompass integrated digital and in-club offerings to keep you at your best—all the time, any time. </p>
                    <p className='mt-0'>Discover the offerings below, plus The Fitness Studio Standard for health, safety, and cleanliness.</p>
                    <Button onClick={navigateRegPage} className='me-3 my-2' variant="outline-light">Sign Up</Button>
                    <Button onClick={navigateAboutPage} className='me-3 my-2' variant="outline-light">About Me</Button>
                    </div>
                </div>
            </div>

            <div className="about-me container" id='about'>
                <h1 className='text-center'>Hello, my name is <span className='highlighted-orange'>Luke Owen</span> , I’m a your new personal trainer!</h1>
                <p className='my-5'>You and your dedicated personal trainer will create a plan that's tailored to your goals—and together, you'll work to unlock the results you want. At every step of the way, you'll be driven by a passionate trainer using the latest science during in-club sessions and at home with Virtual Personal Training.</p>

                <div className='row container'>
                    <div className="left-part col-md-6">
                        <img src={img} alt="" className='img-fluid'/>
                    </div>
                    <div className="right-part col-md-6">
                        <h3>About Me</h3>
                        <p className='my-3'>It all starts with you and your Fitness Studio trainer. For over 15 years, I've paired hundreds of thousands of members with expert trainers that know how to design a program to support your unique goals, passions, and personality.</p>
                        <div className='mt-4'>
                            <span>NUTRITIONIST</span>
                            <ProgressBar className='experience-status my-2 w-75' animated now={95} />
                            <span>GROUP TRAININGS</span>
                            <ProgressBar className='experience-status my-2 w-75' animated now={95} />
                            <span>PERSONAL TRAINING</span>
                            <ProgressBar className='experience-status my-2 w-75' animated now={85} />
                            <span> PHYSIOTHERAPIST</span>
                            <ProgressBar className='experience-status my-2 w-75' animated now={75} />
                            <span> MENTORING</span>
                            <ProgressBar className='experience-status my-2 w-75' animated now={90} />
                        </div>
                    </div>
                </div>
            </div>
            <div  id='pricing'>
                <Package></Package>
            </div>
            <div className="call-to-action container py-5 my-5">
                <div className='mx-5 d-flex justify-content-center align-items-center'>
                    <h1>It’s time to change in yourself come & Start training with the pros!</h1>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={navigateRegPage}>Sign Up Personal Training</button>
                </div>
            </div>
            <div className="facts-achievements">
                <div className="container d-flex justify-content-center">
                    <div className="first text-center mx-5 p-5">
                        <h2>13</h2>
                        <p>Awards Won</p>
                    </div>
                    <div className="second text-center mx-5 p-5">
                        <h2>214</h2>
                        <p>Workouts</p>
                    </div>
                    <div className="third text-center mx-5 p-5">
                        <h2>287</h2>
                        <p>Satisifed Clients</p>
                    </div>
                    <div className="forth text-center mx-5 p-5">
                        <h2>9</h2>
                        <p>Partners Gym</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;