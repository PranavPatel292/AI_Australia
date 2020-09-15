import React from 'react';
import {NavLink} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./Navigation.css"
import history from './history'

class Navigation extends React.Component{
    render(){
        return(
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            
                            {/* this is for the toogle buuton */}

                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            {/* actual navgator links */}
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav padding-nav justify-content-between w-100">
                                    <li className="nav-item">
                                        <NavLink className="nav-link " onClick={()=> history.push('/')} to="/" exact>About Us</NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink className="nav-link " onClick={()=> history.push('/technology')} to="/technology">Technology</NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink className="nav-link"  onClick={()=> history.push('/Case_Studies')} to="/Case_Studies">Case Studies</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" onClick={()=> history.push('/rec')} to="/rec">Resources</NavLink>
                                    </li>
                                </ul>
                            </div>
                            {/* the serach element*/}
                        
                        </nav>
                    </div>
                </div>
            </div>
        )
    }    
}

export default Navigation;