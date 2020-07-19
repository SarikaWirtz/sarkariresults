import React, { Component } from 'react'
import data from '../data/test.json'

const datalist = data;
// console.log(datalist);



class Test extends Component {
    constructor() {
        super();
        this.state = {
            datalist: datalist
        }
    }
    
    render() {
        return (
          <div>
            {this.state.datalist.map(({title, premises, conclusion}, i) => {
              return <div key={i} className="card">
                <div className="card-body">
                  <h1>{title}</h1>
                  
                  {
                      premises ? (
                        premises.map((premise, j) => {
                            return <p key={j}>{premise.premise}</p>
                          })
                      ) : (
                          <div>no data</div>
                      )
                  
                  }
                  <p>{conclusion}</p>
                </div>
              </div>
            })}
          </div>
        );
      }
};


export default Test