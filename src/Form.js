import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./Form.css"

class Form extends React.Component {
    render() {
        return (
            <div id="Sign_Form">
                <div class="container-fluid">
                    <div class="col-10 mx-auto">
                        <div class="row">
                            <div class="col-12 mx-auto my-auto">

                                <div class="row">
                                    <div class="col-12">
                                        <h4>Sign Up Now</h4>
                                    </div>
                                </div>
                                <form class="">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-lg-6  col-12">
                                                <input type="text" name="first_name" placeholder="First Name" className="form-control" />
                                            </div>
                                            <div class="col-lg-6  col-12">
                                                <input type="text" name="last_name" placeholder="Last Name" className="form-control" />
                                            </div>
                                        </div><br />

                                        <div class="row">
                                            <div class="col-lg-12 col-sm-12 col-12">
                                                <input type="text" name="last_name" placeholder="Type anything here!" className="form-control" />
                                            </div>
                                        </div><br />

                                        <div class="row">
                                            <div class="col-12">
                                                <input type="text" name="last_name" placeholder="Type anything here!" className="form-control" />
                                            </div>
                                        </div><br />

                                        <div class="row">
                                            <div class="col-12">
                                                <input type="text" name="last_name" placeholder="Type anything here!" className="form-control" />
                                            </div>
                                        </div><br />

                                        <div class="row">
                                            <div class="col-12">
                                                <input type="text" name="last_name" placeholder="Type anything here!" className="form-control" />
                                            </div>
                                        </div><br />

                                        <div class="row">
                                            <div class="col-12">
                                                <input type="text" name="last_name" placeholder="Type anything here!" className="form-control" />
                                            </div>
                                        </div><br />

                                        <div class="row">
                                            <div class="col-12 d-flex justify-content-center">
                                                <div class="form-group form-check">
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                    <label class="form-check-label" >Check here for accept the terms and conditions</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div className="col-12 d-flex justify-content-center">
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div className="col-12 col-lg-6 d-flex justify-content-center">
                                                <section>Type anything here!</section>
                                            </div>
                                            <div className="col-12 col-lg-6 d-flex justify-content-center">
                                                <section>Type anything here!</section>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;