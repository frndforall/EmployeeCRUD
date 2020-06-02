import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users,register,userDetails } from './users.reducer';
import { alert } from './alert.reducer';
import { employees,employeeDetails } from './employee.reducer';
import { meetups,meetupDetails,joinMeetup,leaveMeetup } from './meetup.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  userDetails,
  register,
  alert,
  employees,
  employeeDetails,
  meetups,
  meetupDetails,
  joinMeetup,
  leaveMeetup
});

export default rootReducer;