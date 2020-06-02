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

export function joinMeetup(state = {}, action) {
    switch (action.type) {
    case meetupConstants.JOIN_MEETUP_SUCCESS:
      return {
        loading: true
      };
    case meetupConstants.JOIN_MEETUP_SUCCESS:
      return { 
        items: action.meetup
      };
      case meetupConstants.JOIN_MEETUP_FAILURE:
      return { 
        error: action.error
      };
      default:
        return state
    }

}

export function leaveMeetup(state = {}, action) {
  switch (action.type) {
  case meetupConstants.LEAVE_MEETUP_REQUEST:
    return {
      loading: true
    };
  case meetupConstants.LEAVE_MEETUP_SUCCESS:
    return { 
      items: action.meetup
    };
    case meetupConstants.LEAVE_MEETUP_FAILURE:
    return { 
      error: action.error
    };
    default:
      return state
  }

}