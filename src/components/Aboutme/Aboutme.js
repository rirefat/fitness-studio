import React from 'react';
import './Aboutme.css'
import github from '../../images/social/github.png'
import facebook from '../../images/social/facebook.png'
import linkedIn from '../../images/social/linkedin.png'

const Aboutme = () => {
    return (
        <div className='about-page mb-5 py-5'>
            <h1 className='page-title mt-5'>About Page</h1>
            <div className="details container mt-5 py-3 mb-5 py-5">
                <div className='d-flex justify-content-center'>
                    <img src="https://i.ibb.co/rxMSvZV/rafiul-islam-refat.jpg" className='img img-fluid' alt="" />
                </div>
                <div>
                    <h1 className='my-2'>Hey, I'm Rafiul Islam</h1>
                    <p className='mt-4'>I'm a Front End Web developer who is passionate about making errors-free websites with 100% client satisfaction. I have a passion for learning and sharing my knowledge with others as much as possible. I love to solve real-world problems. I am strategic, goal- oriented, and always work with an end goal in mind. Over the past years, I created 100s of websites for my clients using WordPress. I pride myself on doing quality work and maintaining excellent communication. I also enjoy working with include ReactJS, JavaScript as well as PHP. My dream is to be a very skilled developer and wish to work as a developer in Google.</p>
                    
                    <p>Nowadays, none can deny the importance of a website. A strong online presence is the backbone of a successful business. WordPress is the perfect solution to develop an attractive, responsive, and user-friendly website. WordPress is world’s best CMS and I offer this solution at a competitive price.! I’m ready to help you build a strong online presence for your business. Just choose a package and I will ensure you 100% satisfaction & world-class service.</p>

                    <h5>My Skills:</h5>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Bootstrap</li>
                        <li>TailWind</li>
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Firebase</li>
                        <li>WordPress</li>
                    </ul>
                    <div className='social-profiles d-flex align-items-center'>
                        <h5>Visit my profile: </h5>
                        <div className="links">
                            <a href="https://github.com/rirefat" ><img className='mx-1' src={github} alt="" /></a>
                            <a href="https://github.com/rirefat" ><img className='mx-1' src={facebook} alt="" /></a>
                            <a href="https://github.com/rirefat" ><img className='mx-1' src={linkedIn} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;