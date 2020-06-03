
import { authHeader } from '../_helpers';
import { baseUrl } from '../config';
export const userService = {
    login,
    logout,
    register,
    getUserDetails
};

// let users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(baseUrl+'/users/login', requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}


function register(payload) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    console.log(payload);
    debugger;
    return fetch(baseUrl+'/users/register', requestOptions)
        .then(handleResponse)
        .then(user => {
            console.log(user);
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getUserDetails() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    debugger;
    return fetch(baseUrl+'/users/me', requestOptions)
        .then(handleResponse)
        .then(user => {
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });

    
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}