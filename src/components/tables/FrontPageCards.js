import React from 'react'
import { Row, Col } from 'react-materialize'
import AdmitCardCard from './AdmitCardCard'
import LResultSummay from './LatestResult/LResultSummary'



const FrontPageCards =() => {
    
    return (
        <>
        <Row className="all_news">
            <Col m={4} s={12}>
                <LResultSummay></LResultSummay>
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