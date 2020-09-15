import React from "react"
import "./Aboutus.css"
import Header from "./header"
import img1 from "./images/iStock-1026914886.jpg"

class AboutUs extends React.Component {
    render() {
        return (
            <div id="about_us">
                <div class="container-fluid ">
                <Header />
                    <div class="col-10 mx-auto">
                        
                        {/*move the below code [Get in touch] to new file as it is used in two or more place */}
                        <div class="row">
                            <div class="col-12 mx-auto">
                                <div class="first d-flex justify-content-center">
                                    <div class="my-auto">
                                        <div class="col-12 d-flex justify-content-center flex-column">
                                            <section>Type anything here!</section>
                                            <section>Type anything here!1</section>
                                        </div>
                                        <br />
                                        <div class="col-12 d-flex justify-content-center">
                                            <button type="button" class="btn btn-outline-dark btn-lg">Get in Touch</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row second">
                            <div class="col-6 mx-auto my-auto flex-column">
                                <div class="d-flex justify-content-center">
                                    <h3>About us - 1</h3>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <section>Type anything here!</section>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <section>Type anything here!</section>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <section>Type anything here!</section>
                                </div>
                            </div>
                            <div class="col-6 mx-auto my-auto">
                                <img src={img1} className="img-fluid" alt="image_to_show"/>
                            </div>
                        </div>

                        <div class="row third">
                            <div class="col-6 mx-auto my-auto">
                                <img src={img1} className="img-fluid" alt="image_to_show" />
                            </div>
                            <div class="col-6 mx-auto my-auto d-flex justify-content-center">
                                <h3>About us - 2</h3>
                            </div>
                        </div>

                        <div class="row">
                            <div class="row col-12">
                                <div class="col-12 mx-auto my-auto d-flex justify-content-center">
                                    <h1>Team</h1>
                                </div>
                            </div>

                            <div class="row col-12 fourth">
                                <div class="col-12 mx-auto my-auto d-flex justify-content-center">
                                    <div class="row col-12">
                                        <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
                                            <img src="" alt="team_member_1" />
                                            <h5 class="team_member_name">Team Memeber 1</h5>
                                            <p class="team_member_posotion">Web Dev</p>
                                            <p class="team_member_info">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam modi tempora eius.</p>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
                                            <img src="" alt="team_member_2" />
                                            <h5 class="team_member_name">Team Memeber 2</h5>
                                            <p class="team_member_posotion">Web Dev</p>
                                            <p class="team_member_info">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam modi tempora eius.</p>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
                                            <img src="" alt="team_member_3" />
                                            <h5 class="team_member_name">Team Memeber 3</h5>
                                            <p class="team_member_posotion">Web Dev</p>
                                            <p class="team_member_info">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam modi tempora eius.</p>
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
                                            <img src="" alt="team_member_4" />
                                            <h5 class="team_member_name">Team Memeber 4</h5>
                                            <p class="team_member_posotion">Web Dev</p>
                                            <p class="team_member_info">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam modi tempora eius.</p>
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

export default AboutUs;