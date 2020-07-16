import React from 'react'
import { Row, Col, Link  } from 'react-materialize'
import logo from '../../assets/img/logo.png'

const SiteHeader = () => {
    return (
        <header className='header-wrapper'>
            <Row className="container"> 
                <Col s={12}> 
                    <Row className="">
                        <Col className="site-logo" s={12} m={3} >
                            <a href="/"><img src={logo } alt={"logo" } className="section"/></a>
                        </Col>
                        <Col className="" s={12} m={6}>
                            <h1 className="site-title white-text">SARKARI RESULTS</h1>
                            <h2 className="sub-title white-text">WWW.SARKARIRESULTS.INFO</h2>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </header>

        
    )
}

export default SiteHeader