import React from 'react'
import { Icon, Footer } from 'react-materialize'
import dmca from '../../assets/img/dmca_premi_badge_4.png'

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
            <a href="https://www.dmca.com/Protection/Status.aspx?ID=1e60d5d3-96ef-467f-867b-c6dfd2b1ae4d&refurl=https://sarkariresults.info/" target='_blank' rel="noopener noreferrer">
                <img src={dmca} alt="{dmca}"/> 
            </a>
            </Footer>
            
        </div>
    )
}


export default SiteFooter
