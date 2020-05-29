import { employeeConstants } from '../_constants';

export function employees(state = {}, action) {
  switch (action.type) {
    case employeeConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case employeeConstants.GETALL_SUCCESS:
      return {
        items: action.employees
      };
    case employeeConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}