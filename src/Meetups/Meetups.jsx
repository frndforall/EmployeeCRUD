import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from '../App/Nav';
import { meetupactions } from '../_actions';
import {Table , Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
// import { format } from "date-fns";


function MeetupDetails(props) {
    const item = props.item
    const itemLink = `/meetups/${item._id}`
  
    return (
            <Col xs="12" sm="6" md="4">
              <Card>
                <CardHeader>
                    Meetup: <Link to={itemLink}>{item.title}</Link>
                </CardHeader>
                <CardBody>
                  Name: <Link to={itemLink}>{item.description}</Link><br/>
                  Started: {item.createdAt}<br/>
                  Item From: {item.timeFrom}<br/>
                  Item to: {item.timeTo}<br/>
                </CardBody>
              </Card>
             </Col>
    )
  }


class Meetups extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(meetupactions.getAllMeetups());
    }

    render() {
        debugger;
        const {meetups} = this.props;
        return (
            <div className="animated fadeIn">
                <Navigation />
                {meetups.loading && <em>Loading users...</em>}
                {meetups.error && alert('Error in API call'+meetups.error)}
                {meetups.items &&
                     <div className="animated fadeIn">
                     <Row>
                       <Col>
                         <Card>
                           <CardHeader>
                             <i className="fa fa-align-justify"></i> Meetups
                           </CardHeader>
                           <CardBody>
                             <Table responsive hover>
                               <tbody>
                                 <tr>
                                 <Row>
                                 {meetups.items.map((item, index) =>
                                   <MeetupDetails key={index} item={item}/>
                                 )}
                                 </Row>
                                 </tr>
                               </tbody>
                             </Table>
                           </CardBody>
                         </Card>
                       </Col>
                     </Row>
                   </div>
                }

          </div>
        );
    }
}

function mapStateToProps(state) {
    const { meetups } = state;
    return {
        meetups
    };
}

const meetups = connect(mapStateToProps)(Meetups);
export { meetups as Meetups };