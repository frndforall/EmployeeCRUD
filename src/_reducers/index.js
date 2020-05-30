import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { employees,employeeDetails } from './employee.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  employees,
  employeeDetails
});

export default rootReducer;