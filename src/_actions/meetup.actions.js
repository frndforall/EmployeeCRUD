import { meetupConstants } from '../_constants';
import { meetupService } from '../_services';
import { history } from '../_helpers';

export const meetupactions = {
    getAllMeetups,
    getMeetupDetails
    
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
                    // dispatch(alertActions.error(error));
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
    function failure(error) { return { type: meetupConstants.GET_SINGLE_FAILURE, error } }
}

