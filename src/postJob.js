import React from 'react'
import Recruiter_Nav from "./Recruiter_Nav"
import data from './data'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './postJob.css'
import history from './history'

class postJob extends React.Component {
    render() {
        return (
            <div id="recrutier">
                <div className="container-fluid nav_bg">
                    <div class="col-12 mx-auto">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-sm-12 mx-auto" >
                                <div className="row">

                                    <div className="col-12 col-lg-2 col-sm-12" >
                                        <Recruiter_Nav />
                                    </div>

                                    <div className="col-12 col-lg-8 col-sm-12 postJob" >

                                        <div className="row justify-content-center">
                                            <p>Type anything here! (will come from the server)</p>
                                        </div>

                                        <div className="row justify-content-center">
                                            <p>Type anything here! (will come from the server)</p>
                                        </div>

                                        <div className="row justify-content-start">
                                            <p>Select Job portals</p>
                                        </div>

                                        <div className="row justify-content-start">
                                            <div className="col-12 col-lg-2">
                                                <img src="#" alt="job1" />
                                            </div>
                                            <div className="col-12 col-lg-2">
                                                <img src="#" alt="job2" />
                                            </div>
                                            <div className="col-12 col-lg-2">
                                                <img src="#" alt="job3" />
                                            </div>
                                            <div className="col-12 col-lg-2">
                                                <img src="#" alt="job4" />
                                            </div>
                                            <div className="col-12 col-lg-2">
                                                <img src="#" alt="job5" />
                                            </div>
                                            <div className="col-12 col-lg-2">
                                                <img src="#" alt="job6" />
                                            </div>
                                        </div><br />

                                        <div className="row justify-content-start">
                                            <p>Payment details</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-lg-2">
                                                <div className="row justify-content-end">
                                                    <h6>Name on the card</h6>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-8">
                                                <Form.Control type="text" className="w-100" as="text" />
                                            </div>
                                        </div><br />

                                        <div className="row">
                                            <div className="col-12 col-lg-2">
                                                <div className="row justify-content-end">
                                                    <h6>Card number</h6>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-8">
                                                <Form.Control type="text" className="w-100" as="text" />
                                            </div>
                                        </div>

                                        <div class="row cust_rec justify-content-end">
                                            <Button type="primary" className="button-align">Save</Button>
                                            <Button type="primary" className="button-align" onClick={()=> history.push('/jobtitle')}>Post</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default postJob;