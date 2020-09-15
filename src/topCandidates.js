import React from 'react'
import Recruiter_Nav from "./Recruiter_Nav"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './topCandidates.css'
import history from './history'


class topCandidates extends React.Component {
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

                                        <div className="row justify-content-center">
                                            <h1>Top Candidates</h1>
                                        </div> <br /><br />

                                        <div className="row justify-content-around">
                                            <div className="col-12 col-lg-5 cust_card">

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="row justify-content-center">
                                                            <h6>Scores</h6>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <h2>96</h2>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="row align-items-center justify-content-center">
                                                            <h1 onClick={()=> history.push('/candidatesDetails')} >Name</h1>
                                                        </div>
                                                    </div>
                                                </div><br />

                                                <div className="row">
                                                    <div className="col-lg-4 col-4">
                                                        <div className="row justify-content-center">
                                                            <Button className="btn btn-success w-50">Accept</Button>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4 col-4">
                                                        <div className="row align-items-center justify-content-center">
                                                            <Button className="btn btn-danger w-50">Reject</Button>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4 col-4">
                                                        <div className="row align-items-center justify-content-center">
                                                            <Button className="btn btn-warning w-60">Undecided</Button>
                                                        </div>
                                                    </div>
                                                </div><br />

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="row justify-content-center">
                                                            <h6>Primary Traits</h6>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <p>Type anything here</p>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <p>Type anything here!</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="row justify-content-center">
                                                            <h6>Scope for improvement</h6>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <p>Type anything here</p>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <p>Type anything here!</p>
                                                        </div>
                                                    </div>

                                                </div><br />


                                            </div>

                                            <div className="col-12 col-lg-5 cust_card">

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="row justify-content-center">
                                                            <h6>Scores</h6>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <h2>96</h2>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="row align-items-center justify-content-center">
                                                            <h1 onClick={()=> history.push('/candidatesDetails')}>Name</h1>
                                                        </div>
                                                    </div>
                                                </div><br />

                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="row justify-content-center">
                                                            <Button className="btn btn-success">Accept</Button>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="row align-items-center justify-content-center">
                                                            <Button className="btn btn-danger">Reject</Button>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="row align-items-center justify-content-center">
                                                            <Button className="btn btn-warning">Undecided</Button>
                                                        </div>
                                                    </div>
                                                </div><br />

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="row justify-content-center">
                                                            <h6>Primary Traits</h6>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <p>Type anything here</p>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <p>Type anything here!</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="row justify-content-center">
                                                            <h6>Scope for improvement</h6>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <p>Type anything here</p>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <p>Type anything here!</p>
                                                        </div>
                                                    </div>

                                                </div><br />


                                            </div>

                                        </div> <br /><br />

                                        <div className="row justify-content-around">
                                            <div className="col-12 col-lg-5 cust_card">

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="row justify-content-center">
                                                            <h6>Scores</h6>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <h2>96</h2>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="row align-items-center justify-content-center">
                                                            <h1 onClick={()=> history.push('/candidatesDetails')}>Name</h1>
                                                        </div>
                                                    </div>
                                                </div><br />

                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="row justify-content-center">
                                                            <Button className="btn btn-success">Accept</Button>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="row align-items-center justify-content-center">
                                                            <Button className="btn btn-danger">Reject</Button>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="row align-items-center justify-content-center">
                                                            <Button className="btn btn-warning">Undecided</Button>
                                                        </div>
                                                    </div>
                                                </div><br />

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="row justify-content-center">
                                                            <h6>Primary Traits</h6>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <p>Type anything here</p>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <p>Type anything here!</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="row justify-content-center">
                                                            <h6>Scope for improvement</h6>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <p>Type anything here</p>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <p>Type anything here!</p>
                                                        </div>
                                                    </div>

                                                </div><br />


                                            </div>

                                            <div className="col-12 col-lg-5 cust_card">

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="row justify-content-center">
                                                            <h6>Scores</h6>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <h2>96</h2>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="row align-items-center justify-content-center">
                                                            <h1 onClick={()=> history.push('/candidatesDetails')}>Name</h1>
                                                        </div>
                                                    </div>
                                                </div><br />

                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="row justify-content-center">
                                                            <Button className="btn btn-success">Accept</Button>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="row align-items-center justify-content-center">
                                                            <Button className="btn btn-danger">Reject</Button>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <div className="row align-items-center justify-content-center">
                                                            <Button className="btn btn-warning">Undecided</Button>
                                                        </div>
                                                    </div>
                                                </div><br />

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="row justify-content-center">
                                                            <h6>Primary Traits</h6>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <p>Type anything here</p>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <p>Type anything here!</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="row justify-content-center">
                                                            <h6>Scope for improvement</h6>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <p>Type anything here</p>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <p>Type anything here!</p>
                                                        </div>
                                                    </div>

                                                </div><br />


                                            </div>

                                        </div> <br /><br />

                                        <div className="row justify-content-around">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Applicant</th>
                                                            <th scope="col">Score</th>
                                                            <th scope="col">Application Status</th>
                                                            <th scope="col">Interview Status</th>
                                                            <th scope="col">Contact</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr rowSpan="2">
                                                            <th scope="row" onClick={()=> history.push('/candidatesDetails')} className="rowName">John Doe</th>
                                                            <td >88</td>
                                                            <td >Done</td>
                                                            <td>Completed<tr>30/08/2020</tr></td>
                                                            <td >000000000<tr>abc@gmail.com</tr></td>
                                                        </tr>

                                                        <tr rowSpan="2">
                                                            <th scope="row" onClick={()=> history.push('/candidatesDetails')} className="rowName">John Doe</th>
                                                            <td >88</td>
                                                            <td >Done</td>
                                                            <td>Completed<tr>30/08/2020</tr></td>
                                                            <td >000000000<tr>abc@gmail.com</tr></td>
                                                        </tr>

                                                        <tr rowSpan="2">
                                                            <th scope="row" onClick={()=> history.push('/candidatesDetails')} className="rowName">John Doe</th>
                                                            <td >88</td>
                                                            <td >Done</td>
                                                            <td>Completed<tr>30/08/2020</tr></td>
                                                            <td >000000000<tr>abc@gmail.com</tr></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
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

export default topCandidates;