import { employeeConstants } from '../_constants';
import { employeeservice } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const employeeactions = {
    getAllEmployees,
    // getEmployeeDetails,
    // updateEmployee,
    createEmployee,
    deleteEmployee
    
};

function getAllEmployees() {
    return dispatch => {
        debugger;
        dispatch(request());
        employeeservice.getAllEmployees()
            .then(
                employees => { 
                    debugger;
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

function deleteEmployee(id) {
    return dispatch => {
        // dispatch(request());
        employeeservice.deleteEmployee(id)
            .then(
                employee => { 
                    dispatch(success(employee));
                    dispatch(employeeactions.getAllEmployees());
                }
            );
    };

    function request() { return { type: employeeConstants.GET_DELETE_REQUEST} }
    function success(employee) { return { type: employeeConstants.GET_DELETE_SUCCESS, employee } }
    function failure(error) { return { type: employeeConstants.GET_DELETE_FAILURE, error } }
}

function createEmployee(payload) {

    return dispatch => {
        // dispatch(request());
        employeeservice.createEmployee(payload)
            .then(
                employee => { 
                    dispatch(success(employee));
                    history.push('/EmployeeList');
                }
            );
    };
    function request() { return { type: employeeConstants.GET_CREATE_REQUEST} }
    function success(employee) { return { type: employeeConstants.GET_CREATE_SUCCESS, employee } }
    function failure(error) { return { type: employeeConstants.GET_CREATE_FAILURE, error } }
}

