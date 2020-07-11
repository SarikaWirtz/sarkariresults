import React from 'react'
import liveImg from '../../assets/img/live-2.gif'
import FrontpageGrid from '../tables/FrontPageGrid'
import { Button }from 'react-materialize'


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
            
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        orem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets 
            containing Lorem Ipsum passages, and more recently with desktop publishing 
            oftware like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </section>
    )
}

 export default SiteContent

