import React from 'react'
import Recruiter_Nav from "./Recruiter_Nav"
import Button from 'react-bootstrap/Button'
import history from './history'
import './buttonJobs.css'

class buttonJobs extends React.Component {
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

                                    <div className="col-12 col-lg-8 buttonmargin">
                                        <div className="row justify-content-center" >
                                            <h1>New Job Post</h1>
                                        </div> <br /><br />

                                        <div className="row justify-content-center" >
                                            <Button variant="primary" onClick={() => history.push('/createjob')} className="w-90">Create a new listing</Button>
                                        </div> <br/><br/><br/>

                                        <div className="row justify-content-center" >
                                            <Button variant="primary" onClick={() => history.push('/createjob')} className="w-90 btn-secondary">Use an exisitng template</Button>
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

export default buttonJobs;