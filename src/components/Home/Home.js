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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate saepe quo laboriosam consequatur enim corporis? Eveniet, deserunt officiis hic qui facilis rerum reiciendis modi. Aut debitis inventore exercitationem officia quasi!</p>
                    <Button onClick={navigateRegPage} className='me-3' variant="outline-light">Sign Up</Button>
                    <Button onClick={navigateAboutPage} className='me-3' variant="outline-light">About Me</Button>
                    </div>
                </div>
            </div>

            <div className="about-me container" id='about'>
                <h1 className='text-center'>Hello, my name is Luke Owen, I’m a your new personal trainer!</h1>
                <p className='my-5'>Typewriter post-ironic trust fund, venmo health goth meditation selfies. Chartreuse vice actually bicycle rights, four dollar toast lumbersexual YOLO fingerstache pug squid sriracha taxidermy. Try-hard keffiyeh seitan, normcore ennui aesthetic put a bird on it pinterest farm-to-table.</p>

                <div className='row container'>
                    <div className="left-part col-md-6">
                        <img src={img} alt="" className='img-fluid'/>
                    </div>
                    <div className="right-part col-md-6">
                        <h3>About Me</h3>
                        <p className='my-3'>Meditation, craft beer single-origin coffee knausgaard echo park small batch banh mi fanny pack. Pinterest small batch yuccie, semiotics authentic artisan literally cray pickled health goth thundercats pug aesthetic.</p>
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
        </div>
    );
};

export default Home;