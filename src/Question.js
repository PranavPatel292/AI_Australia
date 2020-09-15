import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Questions extends React.Component {

    render() {
        return (
            <div className="">
                <div className="row justify-content-lg-start justify-content-sm-center">
                    <h6>Question {this.props.questionId + 1}</h6>
                    <Form.Control type="text" />
                    <p>Condition</p>

                    <div className="col-12 col-lg-12 col-sm-12">
                        <div className="row justify-content-start">
                            <div className="col-4 col-lg-2 col-sm-4">
                                <div className="row justify-content-end">
                                    <p>Type</p>
                                </div>
                            </div>

                            <div className="col-4 col-lg-4 col-sm-4">
                                <div className="row justify-content-center">
                                    <p>Type</p>
                                </div>
                            </div>

                            <div className="col-4 col-lg-4 col-sm-4">
                                <div className="row justify-content-center">
                                    <p>Type</p>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-start">
                            <div className="col-4 col-lg-2 col-sm-4">
                                <div className="row justify-content-end">
                                    <p>Type</p>
                                </div>
                            </div>

                            <div className="col-4 col-lg-4 col-sm-4">
                                <div className="row justify-content-center">
                                    <p>Type</p>
                                </div>
                            </div>

                            <div className="col-4 col-lg-4 col-sm-4">
                                <div className="row justify-content-center">
                                    <p>Type</p>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-start">
                            <div className="col-4 col-lg-2 col-sm-4">
                                <div className="row justify-content-end">
                                    <p>Type</p>
                                </div>
                            </div>

                            <div className="col-4 col-lg-4 col-sm-4">
                                <div className="row justify-content-center">
                                    <p>Type</p>
                                </div>
                            </div>

                            <div className="col-4 col-lg-4 col-sm-4">
                                <div className="row justify-content-center">
                                    <p>Type</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Questions;