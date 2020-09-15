import React from 'react'
import Recruiter_Nav from "./Recruiter_Nav"
import Button from 'react-bootstrap/Button'
import './CadidatesDetails.css'

class CandidatesDetails extends React.Component {
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

                                    <div className="col-12 col-lg-8 col-sm-12 cust_card_candidate" >
                                        <div className="row">

                                            <div className="col-12 col-lg-3">
                                                <div className="row justify-content-center">
                                                    <h5>Total Application</h5>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-3">
                                                <div className="row justify-content-center">
                                                    <h5>Highest Score</h5>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-3">
                                                <div className="row justify-content-center">
                                                    <h5>Lowest Score</h5>
                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-3">
                                                <div className="row justify-content-center">
                                                    <h5>Most common trait</h5>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row justify-content-around">
                                            <div className="col-12 col-lg-10 cust_card">

                                                <div className="row ">
                                                    <div className="col-12 col-lg-12">
                                                        <div className="row justify-content-center">
                                                            <h1>Name</h1>
                                                        </div>
                                                    </div>
                                                </div><br />

                                                <div className="row justify-content-around">
                                                    <div className="col-12 col-lg-4">

                                                        <div className="row justify-content-center">
                                                            <h4>Contact details</h4>
                                                        </div>

                                                        <div className="row justify-content-center">
                                                            <p>Type anything here!</p>
                                                        </div>

                                                        <div className="row justify-content-center">
                                                            <p>Type anything here!</p>
                                                        </div>

                                                        <div className="row justify-content-center">
                                                            <h4>Application Status</h4>
                                                        </div>

                                                        <div className="row justify-content-center">
                                                            <p>Type anything here!</p>
                                                        </div>

                                                        <div className="row justify-content-center">
                                                            <p>Type anything here!</p>
                                                        </div>

                                                    </div>

                                                    <div className="col-12 col-lg-4">
                                                        <div className="row justify-content-center">
                                                            <h2>Score</h2>
                                                        </div>
                                                        <div className="row row justify-content-center">
                                                            <h3>95</h3>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-4">
                                                        <div class="row justify-content-center">
                                                            <Button className="btn btn-success w-50">Accept</Button>
                                                        </div> <br />
                                                        <div class="row justify-content-center">
                                                            <Button className="btn btn-danger w-50">Reject</Button>
                                                        </div><br />
                                                        <div class="row justify-content-center">
                                                            <Button className="btn btn-warning w-50">Undecided</Button>
                                                        </div><br />
                                                    </div>

                                                </div><br />

                                                <div className="row ">
                                                    <div className="col-12 col-lg-6">
                                                        <div className="row justify-content-center">
                                                            <h5>Strengths</h5>
                                                        </div>
                                                        <div className="row justify-content-center">

                                                            <div className="col-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <p>Type anything here!</p>
                                                                </div>

                                                            </div>
                                                            <div className="col-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <p>Score</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="row justify-content-center">

                                                            <div className="col-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <p>Type anything here!</p>
                                                                </div>

                                                            </div>
                                                            <div className="col-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <p>Score</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="row justify-content-center">

                                                            <div className="col-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <p>Type anything here!</p>
                                                                </div>

                                                            </div>
                                                            <div className="col-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <p>Score</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-6">
                                                        <div className="row justify-content-center">
                                                            <h5>Scope for improvement</h5>
                                                        </div>
                                                        <div className="row justify-content-center">

                                                            <div className="col-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <p>Type anything here!</p>
                                                                </div>

                                                            </div>
                                                            <div className="col-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <p>Score</p>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="row justify-content-center">

                                                            <div className="col-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <p>Type anything here!</p>
                                                                </div>

                                                            </div>
                                                            <div className="col-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <p>Score</p>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="row justify-content-center">

                                                            <div className="col-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <p>Type anything here!</p>
                                                                </div>

                                                            </div>
                                                            <div className="col-6 col-lg-6">
                                                                <div className="row justify-content-center">
                                                                    <p>Score</p>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>


                                                </div><br />

                                                <div className="row ">
                                                    <div className="col-12 col-lg-6">
                                                        <div className="row justify-content-center">
                                                            <h5>Audio Recoarding</h5>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-lg-6">
                                                        <div className="row justify-content-center">
                                                            <audio controls>
                                                                <source src="http://localhost:3001/music" type="audio/wav" /> {/* only the server rec are allowed, not the local resources */}
                                                            </audio>
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
                </div>
            </div>
        )
    }
}

export default CandidatesDetails