import React from 'react'
import Recruiter_Nav from "./Recruiter_Nav"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Questions from './Question'
import './createAssesment.css'
import history from './history'


class createAssesment extends React.Component {

    state = {
        cats: [{ questionCounter: 1 }],
    }

    addQuestion = (e) => {
        this.setState((prevState) => ({
            cats: [...prevState.cats, { questionCounter: 1 }]
        }))
        console.log(this.state.cats)
        console.log(this.state.cats.length)
    }

    render() {
        let { cats } = this.state;
        return (
            <div>
                <div className="container-fluid nav_bg">
                    <div class="col-12 mx-auto">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-sm-12 mx-auto" >
                                <div className="row">

                                    <div className="col-12 col-lg-2 col-sm-12" >
                                        <Recruiter_Nav />
                                    </div>

                                    <div className="col-12 col-lg-8 col-sm-12" >

                                        <div className="row cust_rec">
                                            <div className="col-12 col-lg-12 col-sm-12">
                                                <div className="row justify-content-center">
                                                    <h4>Create Assesment</h4>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="row cust_rec">
                                            <div className="col-12 col-lg-12 col-sm-12">
                                                <Questions />
                                            </div>
                                            <div className="col-12 col-lg-12 col-sm-12">
                                                <div className="row justify-content-end">
                                                    <Button type="primary">Add Question</Button>
                                                </div>
                                            </div>
                                        </div> */}

                                        {
                                            cats.map((val, idx) => {
                                                let catId = idx;
                                                return (
                                                    <div id={catId}>
                                                        <div className="row cust_rec">
                                                            <div className="col-12 col-lg-12 col-sm-12">
                                                                <Questions questionId={idx} />
                                                            </div>
                                                            <div className="col-12 col-lg-12 col-sm-12">
                                                                <div className="row justify-content-end">
                                                                    <Button type="primary" onClick={this.addQuestion}>Add Question</Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                        <div className="row cust_rec">
                                            <div className="col-12 col-lg-12 col-sm-12">
                                                <div className="row justify-content-lg-start justify-content-sm-center">
                                                    <h6>Goodbye</h6>
                                                    <Form.Control type="text" as="textarea"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row cust_rec">
                                            <div className="col-12 col-lg-12 col-sm-12">
                                                <div className="row justify-content-lg-end justify-content-sm-center">
                                                    <Button type="primary" className="button-align">Save</Button>
                                                    <Button type="primary" className="button-align" onClick={()=> history.push('/postJob')}>Next</Button>
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

export default createAssesment;