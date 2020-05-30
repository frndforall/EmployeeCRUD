import { employeeConstants } from '../_constants';

export function employees(state = {}, action) {
  switch (action.type) {
    case employeeConstants.ALL_REQUEST:
      return {
        loading: true
      };
    case employeeConstants.GET_SUCCESS:
      return {
        items: action.employees
      };
    case employeeConstants.GET_FAILURE:
      return { 
        error: action.error
      };

      case employeeConstants.GET_DELETE_REQUEST:
        return {
          loading: true
        };
      case employeeConstants.GET_DELETE_FAILURE:
        return { 
          error: action.error
        };
    default:
      return state
  }
}

export function employeeDetails(state = {}, action) {
  switch (action.type) {
  case employeeConstants.GET_DETAILS_REQUEST:
    return {
      loading: true
    };
  case employeeConstants.GET_DETAILS_SUCCESS:
    return { 
      items: action.employee
    };
    case employeeConstants.GET_DETAILS_FAILURE:
    return { 
      error: action.error
    };
    case employeeConstants.GET_UPDATE_SUCCESS:
      return { 
        items: action.employee
      };
      case employeeConstants.GET_UPDATE_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}