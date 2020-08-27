import React from "react"
import Form from "./Form"
import "./SignUp.css"

class SignUp extends React.Component {
    render() {
        return (
            <div id="demo1">
                <div class="container-fluid ">
                    <div class="col-10 mx-auto">
                        <div class="row image">
                            <div class="col-lg-6 col-12 mx-auto d-flex justify-content-center">
                                <div class="mx-auto d-flex justify-content-center">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1>Type anything here!</h1>
                                            <section>Type anything here!</section>
                                            <section>Type anything here!</section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 mx-auto my-auto">
                                <Form />
                            </div>
                        </div>

                        <div class="row col-12 col-lg-12">
                            <div class="col-12 mx-auto my-auto d-flex justify-content-center">
                                <div class="row col-12">
                                    <div class="col-lg-4">
                                        <img src="" alt="Benefits_1" />
                                        <h5 class="team_member_name">Benefits 1</h5>
                                        <p class="team_member_posotion">Type anthing here!</p>
                                        <p class="team_member_info">Neque porro quisquam est</p>
                                    </div>
                                    <div class="col-lg-4">
                                        <img src="" alt="Benefits_2" />
                                        <h5 class="team_member_name">Benefits 2</h5>
                                        <p class="team_member_posotion">Type anthing here!</p>
                                        <p class="team_member_info">Neque porro quisquam est</p>
                                    </div>
                                    <div class="col-lg-4">
                                        <img src="" alt="Benefits_3" />
                                        <h5 class="team_member_name">Benefits 3</h5>
                                        <p class="team_member_posotion">Type anthing here!</p>
                                        <p class="team_member_info">Neque porro quisquam est</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-lg-12 mx-auto my-auto d-flex justify-content-center">
                                <div class="row col-12">
                                    <div class="col-12 col-lg-12 mx-auto my-auto d-flex justify-content-center">
                                        <h1>Benefits</h1>
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

export default SignUp;