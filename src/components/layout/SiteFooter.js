import React from 'react'
import { Icon, Footer } from 'react-materialize';

const SiteFooter = () => {
    return (
        <div className='footer-wrapper'>
            <Footer
            className="site-footer"
            copyrights="&copy Copyright 2019 -20 at WWW.SARKARIRESULTS.INFO"
            links={
                <ul>
                    <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Result</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Latest Job</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Admission</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                </ul>
            }
            >
            <h5 className="white-text">
                For Any Query And Feedback Contact us On
            </h5>
            <p className="grey-text text-lighten-4">
                <p className="contact-email darken-5">support@sarkariresults.info <Icon tiny>lock</Icon></p>
            </p>
            </Footer>
            
        </div>
    )
}


export default SiteFooter
