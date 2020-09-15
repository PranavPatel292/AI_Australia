import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { NavLink } from 'react-router-dom';
import "./Recruiter_Nav.css"

class Recrutier extends React.Component {
    render() {
        return (
            <div id="recrutier">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-12 mx-auto " >
                            <div class="row ">
                                <div class="col-12 col-lg-12 col-sm-12 col-md-12 verticalHeight" >
                                    
                                    <nav className="navbar navbar-expand-lg navbar-light bg-light">


                                        <div class="row">
                                            <div class="col-12 col-lg-2">
                                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span class="navbar-toggler-icon"></span>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                            <ul className="navbar-nav padding-nav h-100 flex-column">

                                            <div class="row">
                                                    <div class="col-12 col-lg-12">
                                                        <li className="nav-item">
                                                            <span><img src="" alt="img"/><NavLink className="nav-link" style={{display: "inline-block"}} to="#" exact>Schabu</NavLink></span>
                                                        </li>
                                                    </div><br/><br/><br/><br/><br/><br/>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12 col-lg-12">
                                                        <li className="nav-item">
                                                        <span><img src="" alt="img"/><NavLink className="nav-link" style={{display: "inline-block"}} to="/rec" exact>Home</NavLink></span>
                                                        </li>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12 col-lg-12">
                                                        <li className="nav-item">
                                                        <span><img src="" alt="img"/><NavLink className="nav-link" style={{display: "inline-block"}} to="/activejobposting" exact>Job Position</NavLink></span>
                                                        </li>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12 col-lg-12">
                                                        <li className="nav-item">
                                                        <span><img src="" alt="img"/><NavLink className="nav-link" style={{display: "inline-block"}} to="/topcandidate" exact>Candidate</NavLink></span>
                                                        </li>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12 col-lg-12">
                                                        <li className="nav-item">
                                                        <span><img src="" alt="img"/><NavLink className="nav-link" style={{display: "inline-block"}} to="#" exact>Notification</NavLink></span>
                                                        </li>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12 col-lg-12">
                                                        <li className="nav-item">
                                                        <span><img src="" alt="img"/><NavLink className="nav-link" style={{display: "inline-block"}} to="#" exact>New job</NavLink></span>
                                                        </li>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12 col-lg-12">
                                                        <li className="nav-item">
                                                        <span><img src="" alt="img"/><NavLink className="nav-link" style={{display: "inline-block"}} to="#" exact>Settings</NavLink></span>
                                                        </li>
                                                    </div>
                                                </div>


                                            </ul>
                                        </div>
                                    </nav>
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