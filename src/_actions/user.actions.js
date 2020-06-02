import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    getUserDetails
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    debugger;
                    dispatch(success(user));
                    history.push('/MeetupsList');
                },
                error => {
                    debugger;
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: userConstants.USERS_LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.USERS_LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.USERS_LOGIN_FAILURE, error } }
}

function register(payload) {
    console.log('Inside register'+payload);
    return dispatch => {
        // dispatch(request(request()));
        userService.register(payload)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    // function request(user) { return { type: userConstants.GET_REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.GET_REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GET_REGISTER_FAILURE, error } }
}




function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());
        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}


function getUserDetails() {
    return dispatch => {
        dispatch(request());
        userService.getUserDetails()
            .then(
                users => dispatch(success(users)),
            );
    };

    function request() { return { type: userConstants.GET_USER_REQUEST } }
    function success(users) { return { type: userConstants.GET_USER_SUCCESS, users } }
    // function failure(error) { return { type: userConstants.GET_USER_FAILURE, error } }
}