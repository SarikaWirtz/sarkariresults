import React from 'react'
import { Row, Col } from 'react-materialize'
import LatestResultCard from './LatestResultCard'
import AdmitCardCard from './AdmitCardCard'


const FrontPageCards =() => {
    return (
        <>
        <Row>
            <Col m={4} s={12}>
               <LatestResultCard></LatestResultCard>
            </Col>
            <Col m={4} s={12}>
               <AdmitCardCard></AdmitCardCard>
            </Col>
            <Col m={4} s={12}>
               <AdmitCardCard></AdmitCardCard>
            </Col>
        </Row>
        </>
    )
}

export default FrontPageCards