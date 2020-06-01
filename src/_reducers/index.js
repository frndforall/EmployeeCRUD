import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users,register } from './users.reducer';
import { alert } from './alert.reducer';
import { employees,employeeDetails } from './employee.reducer';
import { meetups,meetupDetails } from './meetup.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  register,
  alert,
  employees,
  employeeDetails,
  meetups,
  meetupDetails
});

export default rootReducer;