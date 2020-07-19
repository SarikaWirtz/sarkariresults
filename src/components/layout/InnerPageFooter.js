import React, { Component } from 'react'
import { Row, Col, Icon} from 'react-materialize'

const InnerPageFooter = () => {
    return (
        <div className="container innerpagefooter_wrapper">
            <Row className="innerpage_contact___us">
                <Col s={12}>
                    <p className="innerpage_contact-email darken-5">For Any Query And Feedback Email us To <a href="mailto:support@sarkariresults.info"><strong>support@sarkariresults.info</strong></a> <Icon tiny>lock</Icon></p>
                    <h5 className="innerpage_contact-copyright">© Copyright 2018 at WWW.SARKARIRESULT.INFO  </h5>
                    <p>
                        <strong>Disclaimer :</strong> The Examination Results / Marks published in this Website is only for the 
                        immediate Information to the Examinees an does not to be a constitute to be a 
                        Legal Document. While all efforts have been made to make the Information available 
                        on this Website as Authentic as possible. We are not responsible for any Inadvertent 
                        Error that may have crept in the Examination Results / Marks being published in this 
                        Website nad for any loss to anybody or anything caused by any Shortcoming, Defect or 
                        Inaccuracy of the Information on this Website.
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default InnerPageFooter