import React from 'react'
import Recruiter_Nav from "./Recruiter_Nav"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./Recruiter.css"
import history from './history'

class Recrutier extends React.Component {
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
                                        <div className="col-6 col-lg-6 col-sm-6">
                                            <div className="row justify-content-start">
                                                <h4>Recrutier's Company Page</h4>
                                            </div>
                                        </div>

                                        <div className="col-6 col-lg-6 col-sm-6">
                                            <div className="row justify-content-end">
                                            <p>something can go here!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6 col-lg-6 col-sm-6">
                                            <div className="row justify-content-start">
                                                <span>
                                                    <p>Somethings will go here!</p>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="col-6 col-lg-6 col-sm-6">
                                            <div className="row justify-content-end">
                                            <Button variant="primary" onClick={()=> history.push('/buttonJobs')}>Create New Jobs</Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-lg-12 col-sm-12">
                                            <h3>Active Job Position</h3>
                                        </div>
                                    </div>

                                    <div className="row justify-content-around">
                                        <div className="col-12 col-lg-6 col-sm-12 col-md-6">
                                            <div className="row justify-content-around">
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Img variant="top" src="holder.js/100px180" />
                                                    <Card.Body>
                                                        <Card.Title>Card Title</Card.Title>
                                                        <Card.Text>
                                                            Some quick example text to build on the card title and make up the bulk of
                                                            the card's content.
                                                        </Card.Text>

                                                        <div className="col-12 col-lg-12 justify-content-start">
                                                            <div className="row">
                                                                <div className="col-12 col-lg-6 justify-content-start">
                                                                    <Card.Text>
                                                                        500
                                                                    </Card.Text>
                                                                </div>

                                                                <div class="col-12 col-lg-6 justify-content-end">
                                                                    <Card.Text>
                                                                        20/09/20
                                                                    </Card.Text>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-12 col-lg-12 justify-content-start">
                                                            <div className="row">
                                                                <div className="col-12 col-lg-6 justify-content-start">
                                                                    <Card.Text>
                                                                        Candidates
                                                                    </Card.Text>
                                                                </div>

                                                                <div class="col-12 col-lg-6 justify-content-end">
                                                                    <Card.Text>
                                                                        Deadline
                                                                    </Card.Text>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </div>

                                        <div className="col-12 col-lg-6 col-sm-12 col-md-6">
                                            <div className="row justify-content-around">
                                            <Card style={{ width: '18rem' }}>
                                                    <Card.Img variant="top" src="holder.js/100px180" />
                                                    <Card.Body>
                                                        <Card.Title>Card Title</Card.Title>
                                                        <Card.Text>
                                                            Some quick example text to build on the card title and make up the bulk of
                                                            the card's content.
                                                        </Card.Text>

                                                        <div className="col-12 col-lg-12 justify-content-start">
                                                            <div className="row">
                                                                <div className="col-12 col-lg-6 justify-content-start">
                                                                    <Card.Text>
                                                                        500
                                                                    </Card.Text>
                                                                </div>

                                                                <div class="col-12 col-lg-6 justify-content-end">
                                                                    <Card.Text>
                                                                        20/09/20
                                                                    </Card.Text>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-12 col-lg-12 justify-content-start">
                                                            <div className="row">
                                                                <div className="col-12 col-lg-6 justify-content-start">
                                                                    <Card.Text>
                                                                        Candidates
                                                                    </Card.Text>
                                                                </div>

                                                                <div class="col-12 col-lg-6 justify-content-end">
                                                                    <Card.Text>
                                                                        Deadline
                                                                    </Card.Text>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                    <br/><br/><br/><br/><br/>
                                    <div className="row justify-content-around">
                                        <div className="col-12 col-lg-6 col-sm-12">
                                            <div className="row justify-content-around">
                                                <h3>Candidate Numbers</h3>
                                            </div>
                                            <div className="row justify-content-around">
                                                <img src="#" alt="candidatesNumbers"/>
                                            </div>
                                        </div>

                                        <div className="col-12 col-lg-6 col-sm-12">
                                        <div className="row justify-content-around">
                                                <h3>Most common traits?</h3>
                                            </div>
                                            <div className="row justify-content-around">
                                                <img src="#" alt="commonTraits"/>
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

export default Recrutier;