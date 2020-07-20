import React from 'react'
import liveImg from '../../assets/img/live-2.gif'
import FrontpageGrid from '../tables/FrontPageGrid'
import { Button }from 'react-materialize'
import FrontPageCards from '../tables/FrontPageCards'


const SiteContent = () => {
    return (
        <section className="container">
            <p className="bold">SarkariResults.info Provides Latest Update of Every government jobs includes Sarkari Result, Latest Jobs Online form, Admit card for the various examination held in all over the India. Find the notification and short details for every Result, State and Central govt examinations.</p>
            <p>
                <a href='https://sarkariresults.info/'>
                    <img className="live-img" src={liveImg} alt="{liveImg}" />
                </a>
            </p>
            <h2>No. 1 Jobs and Education Portal</h2>
            <FrontpageGrid></FrontpageGrid>
                <Button className="followfacebook"
                    href="https://www.facebook.com/sarkariupdate"
                    node="a"
                    waves="light"
                    >
                    Join Us On Facebook
                </Button>
            <FrontPageCards></FrontPageCards>
            
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                test test test
            </p>
        </section>
    )
}

 export default SiteContent

