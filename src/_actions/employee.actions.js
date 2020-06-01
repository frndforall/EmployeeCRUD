import { employeeConstants } from '../_constants';
import { employeeservice } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const employeeactions = {
    getAllEmployees,
    getEmployeeDetails,
    updateEmployee,
    createEmployee,
    deleteEmployee
    
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
                    // dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: employeeConstants.ALL_REQUEST} }
    function success(employees) { return { type: employeeConstants.GET_SUCCESS, employees } }
    function failure(error) { return { type: employeeConstants.GET_FAILURE, error } }
}

function deleteEmployee(id) {
    return dispatch => {
        dispatch(request());
        employeeservice.deleteEmployee(id)
            .then(
                employee => {
                    if(employee.ok) {
                        dispatch(success(employee));
                        dispatch(employeeactions.getAllEmployees());
                    } else {
                        dispatch(failure('Error Processing request'));
                        
                    }
                },
                error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error));
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
                },
                error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                }
            );
    };
    // function request() { return { type: employeeConstants.GET_CREATE_REQUEST} }
    function success(employee) { return { type: employeeConstants.GET_CREATE_SUCCESS, employee } }
    function failure(error) { return { type: employeeConstants.GET_CREATE_FAILURE, error } }
}


function updateEmployee(payload,id) {

    return dispatch => {
        // dispatch(request());
        employeeservice.updateEmployee(payload,id)
            .then(
                employee => { 
                    dispatch(success(employee));
                    history.push('/EmployeeList');
                },
                error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                }
            );
    };
    // function request() { return { type: employeeConstants.GET_UPDATE_REQUEST} }
    function success(employee) { return { type: employeeConstants.GET_UPDATE_SUCCESS, employee } }
    function failure(error) { return { type: employeeConstants.GET_UPDATE_FAILURE, error } }
}



function getEmployeeDetails(id) {
    return dispatch => {
        dispatch(request());
        employeeservice.getEmployeeDetails(id)
            .then(
                employee => { 
                    dispatch(success(employee));
                }
            );
    };

    function request() { return { type: employeeConstants.GET_DETAILS_REQUEST} }
    function success(employee) { return { type: employeeConstants.GET_DETAILS_SUCCESS, employee } }
    // function failure(error) { return { type: employeeConstants.GET_DETAILS_FAILURE, error } }
}

