import React from "react"
import "./Case_Studies.css"
import Header from "./header"
import img1 from "./images/iStock-1026914886.jpg"

class Case_Studies extends React.Component {
    render() {
        return (
            <div id="about_us">
                <div class="container-fluid ">
                <Header/>
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
                                    <h3>Case - 1</h3>
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
                                <img src={img1} className="img-fluid" alt="image_to_show" />
                            </div>
                        </div>

                        <div class="row third">
                            <div class="col-6 mx-auto my-auto">
                                <img src={img1} className="img-fluid" alt="image_to_show" />
                            </div>
                            <div class="col-6 mx-auto my-auto d-flex justify-content-center">
                                <h3>Case - 2</h3>
                            </div>
                        </div>

                        <div class="row fourth">
                            <div class="col-6 mx-auto my-auto d-flex justify-content-center">
                                <h3>Case - 3</h3>
                            </div>
                            <div class="col-6 mx-auto my-auto">
                                <img src={img1} className="img-fluid" alt="image_to_show" />
                            </div>
                        </div>

                        <div class="row fifth">
                            <div class="row col-12">
                                <div class="col-12 mx-auto my-auto d-flex justify-content-center">
                                    <h1>Trusted By:</h1>
                                </div>
                            </div>

                            <div class="row col-12 fifth">
                                <div class="col-12 mx-auto my-auto d-flex justify-content-center">
                                    <div class="row col-12">
                                        <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
                                            <img src="" alt="Trust By - 1" />
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
                                            <img src="" alt="Trust By - 2" />
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
                                            <img src="" alt="Trust By - 3" />
                                        </div>
                                        <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
                                            <img src="" alt="Trust By - 4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br /><br />

                        <div class="row sixth">
                            <div class="row col-12">
                                <div class="col-12 mx-auto my-auto d-flex justify-content-center">
                                    <h1>Testomonials</h1>
                                </div>
                            </div>
                            <div class="row col-12 fifth">
                                <div class="col-12 mx-auto my-auto d-flex justify-content-center">
                                    <div class="row col-12">
                                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                                            <img src="" alt="Testomonial 1" />
                                            <h5>Testomonial 1</h5>
                                            <section>Type anything here!</section>
                                        </div>
                                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                                            <img src="" alt="Testomonial 2" />
                                            <h5>Testomonial 1</h5>
                                            <section>Type anything here!</section>
                                        </div>
                                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                                            <img src="" alt="Testomonial 3" />
                                            <h5>Testomonial 1</h5>
                                            <section>Type anything here!</section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br /><br />

                        <div class="row seven">
                            <div class="col-12 mx-auto my-auto">
                                <div class="row col-12 ">
                                    <div class="col-6 mx-auto my-auto d-flex justify-content-center">
                                        <h4>Type anything here!:</h4>
                                    </div>

                                    <div class="col-6 mx-auto my-auto d-flex justify-content-center">
                                    <h4>Type anything here!:</h4>
                                    </div>
                                </div>

                                <div class="row col-12 ">
                                    <div class="col-6 mx-auto my-auto d-flex justify-content-center">
                                    <h4>Type anything here!:</h4>
                                    </div>

                                    <div class="col-6 mx-auto my-auto d-flex justify-content-center">
                                    <h4>Type anything here!:</h4>
                                    </div>
                                </div><br/><br/>

                                <div class="row col-12 ">
                                <div class="col-12 d-flex justify-content-center">
                                            <button type="button" className="btn btn-outline-dark btn-lg">Lets talk</button>
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

export default Case_Studies;