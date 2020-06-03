import {userConstants} from '../_constants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {loading: true};
        case userConstants.GETALL_SUCCESS:
            return {items: action.users};
        case userConstants.GETALL_FAILURE:
            return {error: action.error};
        default:
            return state
    }
}


export function register(state = {}, action) {
    switch (action.type) {
        case userConstants.GET_REGISTER_REQUEST:
            return {loading: true};
        case userConstants.GET_REGISTER_SUCCESS:
            return {items: action.users};
        case userConstants.GET_REGISTER_FAILURE:
            return {error: action.error};
        default:
            return state
    }
}


export function userDetails(state = {}, action) {
    switch (action.type) {
        case userConstants.GET_USER_REQUEST:
            return {loading: true};
        case userConstants.GET_USER_SUCCESS:
            return {items: action.user};
        case userConstants.GET_USER_FAILURE:
            return {error: action.error};
        default:
            return state
    }
}

export function loginDetails(state = {}, action) {
    switch (action.type) {
        case userConstants.USERS_LOGIN_REQUEST:
            return {loading: true};
        case userConstants.USERS_LOGIN_SUCCESS:
            return {items: action.user};
        case userConstants.USERS_LOGIN_FAILURE:
            return {error: action.error};
        default:
            return state
    }
}
