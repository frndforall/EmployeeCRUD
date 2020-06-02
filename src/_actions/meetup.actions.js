import { meetupConstants } from '../_constants';
import { meetupService } from '../_services';
import { history } from '../_helpers';
import { userActions } from './user.actions';

export const meetupactions = {
    getAllMeetups,
    getMeetupDetails,
    joinMeetup,
    leaveMeetup
    
};

function getAllMeetups() {
    return dispatch => {
        dispatch(request());
        meetupService.getAllMeetups()
            .then(
                meetups => { 
                    dispatch(success(meetups));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request() { return { type: meetupConstants.ALL_REQUEST} }
    function success(meetups) { return { type: meetupConstants.GET_SUCCESS, meetups } }
    function failure(error) { return { type: meetupConstants.GET_FAILURE, error } }
}

function getMeetupDetails(id) {
    debugger;
    return dispatch => {
        dispatch(request());
        meetupService.getMeetupDetails(id)
            .then(
                meetup => { 
                    dispatch(success(meetup));
                }
            );
    };

    function request() { return { type: meetupConstants.ALL_SINGLE_REQUEST} }
    function success(meetup) { return { type: meetupConstants.GET_SINLGE_SUCCESS, meetup } }
    // function failure(error) { return { type: meetupConstants.GET_SINGLE_FAILURE, error } }
}

function joinMeetup(meetupId) {
    debugger;
    return dispatch => {
        dispatch(request());
        meetupService.joinMeetup(meetupId)
            .then(
                meetup => { 
                    dispatch(success(meetup));
                    dispatch(userActions.getUserDetails());
                    history.push('/MeetupsList');
                }
            );
    };

    function request() { return { type: meetupConstants.JOIN_MEETUP_REQUEST} }
    function success(meetup) { return { type: meetupConstants.JOIN_MEETUP_SUCCESS, meetup } }
    // function failure(error) { return { type: meetupConstants.JOIN_MEETUP_FAILURE, error } }
}

function leaveMeetup(meetupId) {
    debugger;
    return dispatch => {
        dispatch(request());
        meetupService.leaveMeetup(meetupId)
            .then(
                meetup => { 
                    dispatch(success(meetup));
                    dispatch(userActions.getUserDetails());
                    history.push('/MeetupsList');
                }
            );
    };

    function request() { return { type: meetupConstants.LEAVE_MEETUP_REQUEST} }
    function success(meetup) { return { type: meetupConstants.LEAVE_MEETUP_SUCCESS, meetup } }
    // function failure(error) { return { type: meetupConstants.LEAVE_MEETUP_FAILURE, error } }
}




