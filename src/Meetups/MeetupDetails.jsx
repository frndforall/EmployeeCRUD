import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from '../App/Nav';
import { meetupactions } from '../_actions';
import { Container,Card, CardImg, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

class MeetupDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
      console.log(this.props.match.params.id);
      this.props.dispatch(meetupactions.getMeetupDetails(this.props.match.params.id));
    }

    render() {
        debugger;
        const {meetupDetails} = this.props;
        const meetupData = meetupDetails.items;
        return (
          <div className="app flex-row align-items-center">  
          <Container>  
            <Row>  
              <Col >  
                <Card >  
                  <CardBody >    
                      <h1>Meetup Details</h1>
                      {meetup.loading && <em>Loading users...</em>}
                      {meetup.error && <span className="text-danger">ERROR</span>}
                      {meetupData &&  <div>
         
                        <Row>
                          <Col lg={20}>
                            <Card>
                              <CardHeader>
                                <strong><i className="icon-info pr-1"></i>Meetup Name: {meetupData && meetupData.title}</strong>
                              </CardHeader>
                              <CardBody>
                                
                                  <CardImg src={meetupData &&meetupData.image} /><br/>
                                  Description : {meetupData &&meetupData.description}<br/>
                                  Short Info  : {meetupData && meetupData.shortInfo} <br />
                                  People Count: {meetupData && meetupData.joinedPeopleCount}<br />
                                
                                  Meetup From: {meetupData && meetupData.timeFrom}<br />
                                  Meetup To: {meetupData && meetupData.timeTo}<br />

                                  <MeetupCategory category = {meetupData && meetupData.category}/>
                                  <MeetupUser user = {meetupData && meetupData.meetupCreator}/>

                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                        </div>
                }
               </CardBody>  
             </Card>  
           </Col>  
         </Row>  
       </Container>  
     </div>  
        );
    }
}

function mapStateToProps(state) {
    const { meetupDetails } = state;
    return {
      meetupDetails
    };
}

function MeetupCategory(props) {
  return(
    <div>
      <strong>Category</strong>
      <Card>
        Name: {props.category && props.category.name}<br/>
        Created at: {props.category && props.category.createdAt}<br/>
      </Card>
    </div>
  );
}

function MeetupUser(props) {
  return(
    <div>
      <strong>User</strong>
      <Card>
        Creator: {props.user && props.user.name}<br/>
        <CardImg src={props.user && props.user.avatar}/><br/>
      </Card>
    </div>
  );
}

const meetup = connect(mapStateToProps)(MeetupDetails);
export { meetup as MeetupDetails };