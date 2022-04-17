import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="top-banner">
                <div className='w-50 mx-auto'>
                    <div>
                    <h1 className='secondary-title highlighted-orange'>Luke Owen</h1>
                    <h1 className='main-title'>Your New <span className='highlighted-orange'>Personal Trainer</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate saepe quo laboriosam consequatur enim corporis? Eveniet, deserunt officiis hic qui facilis rerum reiciendis modi. Aut debitis inventore exercitationem officia quasi!</p>
                    <Button className='me-3' variant="outline-light">Sign Up</Button>
                    <Button className='me-3' variant="outline-light">About Me</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;