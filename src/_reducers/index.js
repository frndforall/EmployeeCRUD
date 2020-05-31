import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users,register } from './users.reducer';
import { alert } from './alert.reducer';
import { employees,employeeDetails } from './employee.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  register,
  alert,
  employees,
  employeeDetails
});

export default rootReducer;