import { meetupConstants } from '../_constants';

export function meetups(state = {}, action) {
  switch (action.type) {
    case meetupConstants.ALL_REQUEST:
      return {
        loading: true
      };
    case meetupConstants.GET_SUCCESS:
      return {
        items: action.meetups
      };
    case meetupConstants.GET_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}

export function meetupDetails(state = {}, action) {
  switch (action.type) {
  case meetupConstants.ALL_SINGLE_REQUEST:
    return {
      loading: true
    };
  case meetupConstants.GET_SINLGE_SUCCESS:
    return { 
      items: action.meetup
    };
    case meetupConstants.GET_SINGLE_FAILURE:
    return { 
      error: action.error
    };
    default:
      return state
  }
}