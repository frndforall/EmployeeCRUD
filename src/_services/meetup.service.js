
import { authHeader } from '../_helpers';
import {baseUrl as baseUrl} from '../config';

export const meetupService = {
    getAllMeetups,
    getMeetupDetails,
    joinMeetup,
    leaveMeetup
};

function getAllMeetups(){
    const requestOptions = {
        method: 'get',
    };
    
    return fetch(baseUrl+'/meetups', requestOptions)
    .then(handleResponse)
    .then(meetups => {
        console.log(meetups);
        return meetups;
    });
}

function getMeetupDetails(id){
    debugger;
    const requestOptions = {
        method: 'get',
    };
    return fetch(baseUrl+'/meetups/'+id, requestOptions)
    .then(handleResponse)
    .then(meetup => {
        return meetup;
    });
} 

function joinMeetup(id){
    debugger;
    const requestOptions = {
        method: 'post',
        headers: authHeader()

    };
    return fetch(baseUrl+'/meetups/'+id+'/join', requestOptions)
    .then(handleResponse)
    .then(meetup => {
        return meetup;
    });
} 

function leaveMeetup(id){
    debugger;
    const requestOptions = {
        method: 'post',
        headers: authHeader()
    };
    return fetch(baseUrl+'/meetups/'+id+'/leave', requestOptions)
    .then(handleResponse)
    .then(meetup => {
        return meetup;
    });
} 

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    console.log(response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }
            const error = (data && data.message) || response.statusText || 'Error is processing the request';
            return Promise.reject(error);
        }
        return data;
    });
}