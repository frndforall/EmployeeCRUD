import { employeeConstants } from '../_constants';
import { employeeservice } from '../_services';
import { alertActions } from '.';

export const employeeactions = {
    getAllEmployees,
    // getEmployeeDetails,
    // updateEmployee,
    // deleteEmployee
    
};

function getAllEmployees() {
    return dispatch => {
        dispatch(request());

        employeeservice.getAllEmployees()
            .then(
                employees => { 
                    dispatch(success(employees));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: employeeConstants.GETALL_REQUEST} }
    function success(employees) { return { type: employeeConstants.GETALL_SUCCESS, employees } }
    function failure(error) { return { type: employeeConstants.GETALL_FAILURE, error } }
}

// function logout() {
//     userService.logout();
//     return { type: userConstants.LOGOUT };
// }

// function getAll() {
//     return dispatch => {
//         dispatch(request());

//         userService.getAll()
//             .then(
//                 users => dispatch(success(users)),
//                 error => dispatch(failure(error))
//             );
//     };

//     function request() { return { type: userConstants.GETALL_REQUEST } }
//     function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
//     function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
// }