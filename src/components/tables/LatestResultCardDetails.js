import React, { Component } from 'react'
import { Button } from 'react-materialize'
import data from '../data/data.json'


// const newdata = data.map( data => {
//      //console.log(data);
//     return (
//         <li><a className="" href="#!" target="_blank" alt=''>{data.title}</a></li>
//     )
// })

const LatestResultCardDetails = (props) => {
        
        console.log(props.match.params.id);
        // const id = props.match.params.id;
        const { project } = props;
        if(project) {
        return (
            <div className="card-wrapper">
                console.log(project);
                <p>i am result details page + {project.title}</p>
            </div>
            ) 
        }
    
}


export default LatestResultCardDetails