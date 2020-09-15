import React from 'react'
import Recruiter_Nav from "./Recruiter_Nav"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import history from './history'
import './createJob.css'

class createJob extends React.Component {
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

                                    <div className="col-12 col-lg-8 col-sm-12" >
                                        <div className="row cust_rec">
                                            <div className="col-12 col-lg-12 col-sm-12">
                                                <div className="row justify-content-center">
                                                    <h2>Crate New Job</h2>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-12 col-sm-12">

                                                <div className="row form-margin">
                                                    <div className="col-12 col-lg-2">
                                                        <div className="row justify-content-lg-end form-margin">
                                                            <p>Title</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-10 ">
                                                        <div className="row justify-content-around form-input">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row form-margin">
                                                    <div className="col-12 col-lg-2">
                                                        <div className="row justify-content-lg-end form-margin">
                                                            <p>Company</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-10 ">
                                                        <div className="row justify-content-around form-input">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row form-margin">
                                                    <div className="col-12 col-lg-2">
                                                        <div className="row justify-content-lg-end form-margin">
                                                            <p>Location</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-10 ">
                                                        <div className="row justify-content-around form-input">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row form-margin">
                                                    <div className="col-12 col-lg-2">
                                                        <div className="row justify-content-lg-end form-margin">
                                                            <p>Role type</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-10 ">
                                                        <div className="row justify-content-around form-input">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row form-margin">
                                                    <div className="col-12 col-lg-2">
                                                        <div className="row justify-content-lg-end form-margin">
                                                            <p>Experience</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-10 ">
                                                        <div className="row justify-content-around form-input">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row form-margin">
                                                    <div className="col-12 col-lg-2">
                                                        <div className="row justify-content-lg-end form-margin">
                                                            <p>Company Website</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-10 ">
                                                        <div className="row justify-content-around form-input">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row form-margin">
                                                    <div className="col-12 col-lg-2">
                                                        <div className="row justify-content-lg-end form-margin">
                                                            <p>Salary</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-10 ">
                                                        <div className="row justify-content-around form-input">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row form-margin">
                                                    <div className="col-12 col-lg-2">
                                                        <div className="row justify-content-lg-end form-margin">
                                                            <p>Salary Strucutre</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-10 ">
                                                        <div className="row justify-content-around form-input">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row form-margin">
                                                    <div className="col-12 col-lg-2">
                                                        <div className="row justify-content-lg-end form-margin">
                                                            <p>Company profile</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-10 ">
                                                        <div className="row justify-content-around form-input">
                                                            <Form.Control type="text" as="textarea" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row form-margin">
                                                    <div className="col-12 col-lg-2">
                                                        <div className="row justify-content-lg-end form-margin">
                                                            <p>Attach Video</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-10 ">
                                                        <div className="row justify-content-around form-input">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row form-margin">
                                                    <div className="col-12 col-lg-2">
                                                        <div className="row justify-content-lg-end form-margin">
                                                            <p>Deadline</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-10 ">
                                                        <div className="row justify-content-around form-input">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-12 col-sm-12 candidate">


                                                <div className="row form-margin">
                                                    <div className="col-12 col-lg-2">
                                                        <div className="row justify-content-lg-end form-margin">
                                                            <p>Role Details</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-10 ">
                                                        <div className="row justify-content-around form-input">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row form-margin">
                                                    <div className="col-12 col-lg-2">
                                                        <div className="row justify-content-lg-end form-margin">
                                                            <p>Role Requirement</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-10 ">
                                                        <div className="row justify-content-around form-input">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="row form-margin">
                                                    <div className="col-12 col-lg-2">
                                                        <div className="row justify-content-lg-end form-margin">
                                                            <p>Primary</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-10 ">
                                                        <div className="row justify-content-around form-input">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row form-margin">
                                                    <div className="col-12 col-lg-2">
                                                        <div className="row justify-content-lg-end form-margin">
                                                            <p>Secondary</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-10 ">
                                                        <div className="row justify-content-around form-input">
                                                            <Form.Control type="text" />
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                            <div className="col-12 col-lg-12 col-sm-12">
                                                <div className="row justify-content-end">
                                                    <Button variant="primary" type="submit" >Submit</Button>
                                                    <Button variant="primary" className="button-align" onClick={()=> history.push('/createassesment')}>Next</Button>
                                                </div>


                                            </div>

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

export default createJob;