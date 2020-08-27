import React from "react"
import "./Login.css"

class Login extends React.Component {
    render() {
        return (
            <div id="login">
                <div class="container-fuild">
                    <div class="row "> {/* top row */}
                        <div class="col-10 col-lg-10 mx-auto image1">
                            <div class="row justify-content-center logo"> {/* first row  use padding here*/}
                                <h1>Schabu</h1>
                            </div>

                            <div class="row justify-content-center"> {/* second row */}
                                <div class="bg col-8 col-lg-3 login_form">
                                    <div class="row justify-content-start"> {/*this for the form rows*/}
                                        <h4>Log In</h4>
                                    </div> <br />
                                    <form>
                                        <div class="row justify-content-center"> {/*this for the form rows*/}
                                            <input type="email" class="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        </div> <br />

                                        <div class="row justify-content-center"> {/*this for the form rows*/}
                                            <input type="password" class="form-control w-100" id="exampleInputPassword1" placeholder="Password" />
                                        </div>

                                        <div class="row justify-content-center"> {/*this for the form rows*/}
                                            <section>Type anything here!</section>
                                        </div>

                                        <div class="row justify-content-center "> {/*this for the form rows*/}
                                            <div class="form-check">
                                                <input type="checkbox" class="col-12 form-check-input" id="exampleCheck1" /><br /><label class="form-check-label "><b><i>Check me out</i></b></label>
                                            </div>
                                        </div>

                                        <div class="row justify-content-center"> {/*this for the form rows*/}
                                            <section>Type anything here!</section>
                                        </div><br/>

                                        <div class="row justify-content-center"> {/*this for the form rows*/}
                                            <button type="submit" class="btn btn-primary w-50">Submit</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;