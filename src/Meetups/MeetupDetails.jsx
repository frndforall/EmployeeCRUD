import React from 'react';
import {connect} from 'react-redux';
import Navigation from '../App/Nav';
import {meetupactions} from '../_actions';
import {
    Container,
    CardBody,
    CardHeader,
    Col,
    Row,
    Button
} from 'reactstrap';
import Card from 'react-bootstrap/Card';


class MeetupDetails extends React.Component {
    constructor(props) {
        super(props);
        this._isUserJoinedInMeetup = this._isUserJoinedInMeetup.bind(this);
        this._isUserOwner = this._isUserOwner.bind(this);
        this.handleJoinMeetup = this.handleJoinMeetup.bind(this);
        this.handleLeaveMeetup = this.handleLeaveMeetup.bind(this);
        this.showConfirmation = this.showConfirmation.bind(this);
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        this.props.dispatch(meetupactions.getMeetupDetails(this.props.match.params.id));
    }

    render() {
        const {meetupDetails} = this.props;
        const meetupData = meetupDetails.items;
        const user = localStorage.getItem('user');
        return (
            <div className="app flex-row align-items-center">
                <Navigation/>
                <Container>
                    <Row>
                        <Col>
                            <Card className="text-center">
                                <CardHeader>
                                    <h1>
                                        <i className="icon-info pr-1"></i>
                                        {
                                        meetupData && meetupData.title
                                    }</h1>
                                    <strong>
                                        <i className="icon-info pr-1"></i>Meetup Owner: {
                                        meetupData && meetupData.meetupCreator.name
                                    }</strong><br/>

                                </CardHeader>
                                <CardBody> {
                                    meetup.loading && <em>Loading Details...</em>
                                }
                                    {
                                    meetup.error && <span className="text-danger">ERROR</span>
                                }
                                    {
                                    meetupData && <div>
                                        <Row>
                                            <Col lg={6}>
                                                <Card className="text-center">

                                                    <CardBody>
                                                        <img src={
                                                                meetupData && meetupData.image
                                                            }
                                                            alt=''
                                                            width='200px'
                                                            height='200px'/><br/>
                                                        Description :
                                                        <strong>{
                                                            meetupData && meetupData.description
                                                        }</strong><br/>
                                                        Short Info  : {
                                                        meetupData && meetupData.shortInfo
                                                    }
                                                        <br/>
                                                        <strong>Subscribers: {
                                                            meetupData && meetupData.joinedPeopleCount
                                                        }<br/>
                                                        </strong>
                                                        Meetup From: {
                                                        meetupData && meetupData.timeFrom
                                                    }<br/>
                                                        Meetup To: {
                                                        meetupData && meetupData.timeTo
                                                    } </CardBody>
                                                </Card>
                                            </Col>
                                            <Col lg={6}>
                                                <Card className="text-center">
                                                    <CardBody>
                                                        <MeetupCategory category={
                                                            meetupData && meetupData.category
                                                        }/>
                                                        <MeetupUsers joinedPeople={
                                                            meetupData && meetupData.joinedPeople
                                                        }/>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <br/>
                                        <span>{
                                            this._isUserOwner(user, meetupData) ? <strong>Meetup Owner</strong> : this._isUserJoinedInMeetup(user, meetupData) ? <Button variant='primary'
                                                onClick={
                                                    () => {
                                                        this.showConfirmation(2, meetupData._id)
                                                    }
                                            }>Leave Meetup</Button> : <Button variant='primary'
                                                onClick={
                                                    () => {
                                                        this.showConfirmation(1, meetupData._id)
                                                    }
                                            }>Join Meetup</Button>
                                        } </span>
                                    </div>
                                } </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }


    _isUserJoinedInMeetup(userData, meetupData) {
        const user = JSON.parse(userData);
        const joinedMeetup = user.joinedMeetups;
        console.log('Meetup ' + meetup);
        return(joinedMeetup && (joinedMeetup.indexOf(meetupData._id) > -1));
    }

    _isUserOwner(userData, meetupData) {
        const user = JSON.parse(userData);
        const creator = meetupData.meetupCreator;
        console.log('Meetup ' + creator);
        return(user && creator && user._id === creator._id);
    }

    handleJoinMeetup(id) {
        this.props.dispatch(meetupactions.joinMeetup(id));
    }

    handleLeaveMeetup(id) {
        this.props.dispatch(meetupactions.leaveMeetup(id));
    }

    showConfirmation(type, id) {
        if (type === 1) {
            window.confirm("Are you sure you subscribe to this meetup?") && this.handleJoinMeetup(id);
        } else if (type === 2) {
            window.confirm("Are you sure you un subscribe to this meetup?") && this.handleLeaveMeetup(id);
        }
    }


}


function MeetupCategory(props) {
    return (
        <div className="app flex-row align-items-center">
            <strong>Category</strong>
            <Card>
                Name: {
                props.category && props.category.name
            }<br/>
                Created at: {
                props.category && props.category.createdAt
            }<br/>
            </Card>
        </div>
    );
}


function MeetupUsers(props) {
    debugger;
    console.log(props.joinedPeople);
    return (
        <div className="app flex-row align-items-center">
            <strong>Subscribers</strong>
            <Card> {
                props.joinedPeople && props.joinedPeople.map((item, id) => {
                    return (
                        <Card key={id}>
                            {
                            item.name
                        } </Card>
                    )

                })
            } </Card>
        </div>
    );
}

function mapStateToProps(state) {
    const {meetupDetails, joinMeetup, leaveMeetup} = state;
    return {meetupDetails, joinMeetup, leaveMeetup};
}

const meetup = connect(mapStateToProps)(MeetupDetails);
export {
    meetup as MeetupDetails
};
