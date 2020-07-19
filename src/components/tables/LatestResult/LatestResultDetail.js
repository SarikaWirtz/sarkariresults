import React, { Component } from 'react'
import data from '../../data/latestData.json'
import {Table, thread, th, tr, Row, Col} from 'react-materialize'
import InnerPageFooter from '../../layout/InnerPageFooter'

class LatestResultDetail extends Component {
    state = {
          
         latestresult: null,
         admitCardDetails: [],
         
    }
    componentDidMount() {
        //  console.log(this.props);
         let id = this.props.match.params.latest_result_id;
        //  const data = import('../../data/data.json');
            data.map( response => {
                if(response.id == id) {
                    this.setState({
                        latestresult: response,
                        admitCardDetails: response.admitCard.details || this.state.admitCardDetails,
                     })
                }  
             })
    }
    render() {
        
        //for admit card details
        const {admitCardDetails}  = this.state;
        const admitcardDetailList = admitCardDetails ? (
            
            admitCardDetails.map((list, index) => {
               return (
                   <li key={index} className="admitcard_detail_list detail_list">
                       {list.list}
                   </li>
               )
            })
            ) : (
                <div className="center">
                    No post yet
                </div>
            )
        const Latestnews = this.state.latestresult ? (
        <div className="result container">
            <Table className="latestresult_header">
                <tbody>
                        <tr>
                            <td className="article_summary">
                                Name of Post:
                            </td>
                            <td className="article_summery_title left">
                                { this.state.latestresult.nameOfPost } 
                            </td>
                    
                        </tr>
                        <tr>
                            <td className="article_summary">
                                Post Update Date:
                            </td>
                            <td className="article_summery_date left bold">
                                { this.state.latestresult.postDate }
                            </td>
                    
                        </tr>
                        <tr>
                            <td className="article_summary">
                                Short Information
                            </td>
                            <td className="article_summary_information"> 
                                { this.state.latestresult.information }
                            </td>
                    
                        </tr>
                </tbody>
            </Table>

            <div className="latestresult_body">
                <Row>
                    <Col s={12}>
                        <div className="center heading-group">
                            <h2 className="tabletitle"> { this.state.latestresult.tabletitle } </h2>
                            <h3 className="tablesubTitle bold"> { this.state.latestresult.tableSubTitle } </h3>
                        </div>
                    </Col>
                </Row>  
            
                <Row>
                    <Col s={12} m={6}>
                        <h3 className="tablesubTitle bold"> { this.state.latestresult.admitCard.title } </h3>
                        <h3 className="tablesubTitle bold"> { this.state.latestresult.applicationfee.title } </h3>
                        <ul>
                            {admitcardDetailList}
                            {  
                                this.state.latestresult.applicationfee.details.map( (res, index) => {
                                    return (
                                        <li key={index} className="applicatiinfee_list detail_list">{res.fee}</li>
                                    )
                                    
                                })
                            }
                        </ul>
                        <Row>
                            <Col s={12}>
                                <h3 className="howtodownload_title tablesubTitle bold">
                                    Payment Mode
                                </h3>
                                <p className="payment_option">
                                    Pay Exam Fee through Credit Card, Debit Card, Net Banking Fee Mode.
                                </p>
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col s={12} m={6} className="important_dates_wrapper">
                            <h3 className="tablesubTitle bold">  { this.state.latestresult.importantDates.title } </h3>
                            
                        <ul>
                            { 

                                (this.state.latestresult.importantDates.details) ? ( 
                                    this.state.latestresult.importantDates.details.map((res, index) =>{ 
                                        return (
                                            
                                                <li key={index} className="important_dates_list">{ res.list}</li>
                                        )
                                    
                                    }) 
                                ) : (
                                    <div>
                                        no result
                                    </div>
                                )
                            }  
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} className="howtodownload">
                        <h3 className="howtodownload_title tablesubTitle bold">
                            {this.state.latestresult.howtoDownloadResult.title}
                        </h3>
                        <ul>
                            { 
                                this.state.latestresult.howtoDownloadResult.details.map((res, index) =>{ 
                                    return (
                                            
                                        <li key={index} className="howtoDownloadResult_list">{ res.step}</li>
                                    )
                                    
                                })
                            }  
                        </ul>
                    </Col>
                </Row>
                <Row className="enrolled_candidates" s={12}>
                    <p>Enrolled Candidates Can Download Result now.</p>
                </Row>
                
                <Row className="important_links" s={12}>
                    <Row>
                        <Col s={12}>
                            <h3 className="important_links__title tablesubTitle bold">
                                {this.state.latestresult.importantLinks.title}
                            </h3>
                        </Col>
                    </Row>
                    
                    <div className="important_links__details">

                        <ul>
                            { 
                                this.state.latestresult.importantLinks.details.map((res, index) =>{ 
                                    return (
                                        <Row>
                                            <Col s={6}>
                                                <li key={index} className="important_links_list">{ res.detail}</li>
                                            </Col>
                                            <Col s={6}>
                                                <li key={index} className="important_links_button-link">{ res.buttonText}</li>
                                            </Col>
                                        </Row>
                                    )   
                                })
                            }  
                        </ul>
                    </div>                            
                </Row>
            </div>
         </div>
         ) : (
             <div>
            <p>Loading post</p>
            </div>
         )
        return (
            <div>
                <h3>{Latestnews}</h3>
                <InnerPageFooter></InnerPageFooter>
            </div>
        )
        
    }
}

export default LatestResultDetail