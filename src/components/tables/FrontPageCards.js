import React from 'react'
import { Row, Col, Header, Footer } from 'react-materialize'
import LatestResultCard from './LatestResultCard'


const FrontPageCards =() => {
    return (
        <>
        <Row>
            <Col m={6} s={12}>
               <LatestResultCard></LatestResultCard>
            </Col>
        </Row>
        </>
    )
}

export default FrontPageCards