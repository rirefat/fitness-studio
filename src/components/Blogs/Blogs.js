import React from 'react';
import './Blogs.css'
import blog1 from '../../images/blogs/Authentication_vs_Authorization.png'
import blog2 from '../../images/blogs/firebase.png'
import blog3 from '../../images/blogs/firebase-services.png'

const Blogs = () => {
    return (
        <div className='blog container'>
            <h1 className='tex-center page-title'>Blog Page</h1>
            <div className="blog-post">
                <div className="left-part">
                    <h1>Difference between <span className='highlighted-text'>authorization</span> and <span className='highlighted-text'>authentication</span></h1>
                    <p>Both Authentication and Authorization are used in reference to knowledge security, which allows the safety on an autonomous data system. Each of these are extremely important subjects that are commonly associated with the internet as major components of its service architecture. However, each of the terms are incredibly distinct, having whole different meanings. Despite the fact that they are generally used in the same context with the same instrument, they are completely different.</p>
                    <p>The identity of users is verified during the authentication process before they are granted access to the system. During the authorization process, the authority of the individual or user to access the resources is verified. The authentication process comes before the authorisation process, whereas the authorization process comes after the authentication process.</p>
                </div>
                <div className="left-part d-flex justify-content-center align-items-center">
                    <img src={blog1} className="img-fluid" alt="" />
                </div>
            </div>
            <hr />
            <div className="blog-post">
                <div className="left-part d-flex justify-content-center align-items-center">
                <img src={blog2} className="img-fluid" alt="" />
                </div>
                <div className="right-part">
                    <h1>Why are you using <span className='highlighted-text'>firebase</span> ? What other options do you have to implement authentication?</h1>
                    <p>Firebase is, in fact, a less technical and time-saving alternative to building full-fledged backend code for dynamic apps.We should also think about using this tool if you want to host and administer our app on the cloud. Because it is serverless, Firebase eliminates the need to worry about the complexities of cloud server configuration.It also allows us access to other Google goods and capabilities, such as Google Drive and Sheets, as a Google Cloud service. For example, we may import fake data from Google Sheets and utilize it to serve our app momentarily.</p>
                    <p>There're many ways to implement the authentication using Firebase. Such as we may build authentication using Email-Password,Phone Number, Google, Facebook, Microsoft Account, Facebook, Github, Apple Account, Yahoo, Twitter, Game Center, Play Games Accounts.</p>
                    <h5>However there are some other options for Authentication which are:</h5>
                    <ul>
                        <li>Parse</li>
                        <li>Supabase</li>
                        <li>Kuzzle</li>
                        <li>Back4App</li>
                        <li>Backendless</li>
                        <li>appwrite</li>
                        <li>Hasura</li>
                        <li>Nhost</li>
                        <li>Deployd</li>
                        <li>Atmosphere</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="blog-post">
                <div className="left-part">
                    <h1>What other services does <span className='highlighted-text'>firebase</span> provide other than authentication</h1>
                    <p>Firebase was created by Firebase Inc. and was eventually purchased by Google. It offers a variety of services to assist you in developing high-quality mobile and web applications to help your business thrive. It works with Web, iOS, Android, and OS X clients. Developers don't have to worry about backend programming, authentication, API development, database (real-time cloud-hosted NoSQL database and cloud firestore), file storage, and so on with Firebase. Firebase delivers all services in a highly effective and speedy manner.
                    </p>
                    <p>Firebase is a complete solution that may assist you in creating mobile or web apps more quickly, with less resources, and with more efficiency. Now, let's have a look at some of the services and how they might be used.</p>
                    <h5>Firebase offers a variety of services, the most useful of which are:</h5>
                    <ul>
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Authentication</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Predictions</li>
                        <li>Cloud Messaging</li>
                        <li>Dynamic Links</li>
                        <li>Remote Config</li>
                    </ul>
                </div>
                <div className="left-part d-flex justify-content-center align-items-center">
                <img src={blog3} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blogs;