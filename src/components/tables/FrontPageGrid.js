import React from 'react'
import { Row, Col, CardPanel } from 'react-materialize'
// import { Link } from 'react-router-dom'


const FrontpageGrid = () => {
    return (
        <div className="grid-wrapper">
            <Row>
                <Col m={3} s={12}>
                    <CardPanel className="cardpanel1">
                    <a href="#">
                        <span className="white-text bold">
                            ITBP Constable Apply Online 2020
                        </span>
                    </a>
                    </CardPanel>
                </Col>
                <Col m={3} s={12}>
                    <CardPanel className="cardpanel2">
                    <a href="#">
                        <span className="white-text bold">
                            Haryana Board 10th Result 2020
                        </span>
                    </a>
                    </CardPanel>
                </Col>
                <Col m={3} s={12}>
                    <CardPanel className="cardpanel3">
                    <a href="#">
                        <span className="white-text bold">
                            BPSC Asst. Professor Apply Online 2020
                        </span>
                    </a>
                    </CardPanel>
                </Col>
                <Col m={3} s={12}>
                    <CardPanel className="cardpanel4">
                    <a href="#">
                        <span className="white-text bold">
                            SSC CPO SI Apply Online 2020
                        </span>
                    </a>
                    </CardPanel>
                </Col>
            </Row>
            <Row>
                <Col m={3} s={12}>
                    <CardPanel className="cardpanel5">
                    <a href="#">
                        <span className="white-text bold">
                            UP Board 10th, 12th Scrutiny Form 2020
                        </span>
                    </a>
                    </CardPanel>
                </Col>
                <Col m={3} s={12}>
                    <CardPanel className="cardpanel6">
                    <a href="#">
                        <span className="white-text bold">
                            CSBC Sepoy Apply Online 2020
                        </span>
                    </a>
                    </CardPanel>
                </Col>
                <Col m={3} s={12}>
                    <CardPanel className="cardpanel6">
                    <a href="#">
                        <span className="white-text bold">
                            India Post GDS Apply Online 2020
                        </span>
                    </a>
                    </CardPanel>
                </Col>
                <Col m={3} s={12}>
                    <CardPanel className="cardpanel8">
                    <a href="#">
                        <span className="white-text bold">
                            UPPCL Electrician Apply Online 2020
                        </span>
                    </a>
                    </CardPanel>
                </Col>
            </Row>
        </div>
    )
}

export default FrontpageGrid