import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Checkout.css'
import img from '../../images/payment-methods.png'
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate=useNavigate()
    const proceedCheckout =(event)=>{
        event.preventDefault();
        navigate('/payment-confirm');
    }
    return (
        <div className='checkout container mb-5 '>
            <h1 className='text-center mt-5 page-title'>Checkout</h1>
            <div className="main-body">
                <div className="form my-5">
                    <form onSubmit={proceedCheckout}>
                        <Row className="g-2 mb-4">
                            <Col md>
                                <FloatingLabel controlId="floatingInputGrid" label="Your Full Name">
                                <Form.Control type="text" required/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="g-2 mb-4">
                            <Col md>
                                <FloatingLabel controlId="floatingInputGrid" label="Your Address">
                                <Form.Control type="text" required/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="g-2 mb-4">
                            <Col md>
                                <FloatingLabel controlId="floatingInputGrid" label="Your Phone Number">
                                <Form.Control type="number" required/>
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="floatingInputGrid" label="Your Age">
                                <Form.Control type="number" required/>
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="floatingSelectGrid" label="Gender Selection">
                                    <Form.Select aria-label="Floating label select example" required>
                                        <option>Gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="g-2 mb-4">
                            <Col md>
                                <FloatingLabel controlId="floatingSelectGrid" label="Package Selection">
                                    <Form.Select aria-label="Floating label select example">
                                        <option>Select Package</option>
                                        <option value="1">NOVICE</option>
                                        <option value="2">Semi-Pro</option>
                                        <option value="3">Pro</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="floatingSelectGrid" label="Start Working From">
                                <Form.Select aria-label="Floating label select example">
                                    <option>Joining Month</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="g-2 mb-4">
                            <Col md>
                                <FloatingLabel controlId="floatingSelectGrid" label="Payment Methods">
                                <Form.Select aria-label="Floating label select example">
                                    <option>Select Your Payment Method</option>
                                    <option value="1">VISA</option>
                                    <option value="2">Mastercard</option>
                                    <option value="3">American Express</option>
                                    <option value="3">DBBL Nexus</option>
                                    <option value="3">QCash</option>
                                    <option value="3">bKash</option>
                                    <option value="3">Rocket</option>
                                    <option value="3">mKash</option>
                                    <option value="3">MY Cash</option>
                                    <option value="3">IFIC Mobile Banking</option>
                                    <option value="3">City Touch</option>
                                    <option value="3">BRAC Bank</option>
                                    <option value="3">Bank Asia</option>
                                    <option value="3">Islami Bank</option>
                                    <option value="3">MTB</option>
                                    <option value="3">AB Bank</option>
                                    <option value="3">Payza</option>
                                </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="floatingInputGrid" label="Your Transaction ID">
                                <Form.Control type="text" required/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <button type='submit' className='checkout-btn'>Proceed Checkout</button>
                        </Row>
                    </form>
                    
                </div>
                <div>
                    <h5 className='my-3'>We Accepted:</h5>
                    <div className="payment-methods w-100 d-flex align-items-start justify-content-center">
                        <img src={img} alt="" className='img-fluid w-100 shadow'/>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default Checkout;