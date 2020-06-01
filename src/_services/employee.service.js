
// import { authHeader } from '../_helpers';

export const employeeservice = {

    logout,
    getAllEmployees,
    getEmployeeDetails,
    updateEmployee,
    deleteEmployee,
    createEmployee
};

function getAllEmployees(){
    const requestOptions = {
        method: 'get',
    };
    return fetch('http://localhost:3001/api/v1/employees', requestOptions)
    .then(handleResponse)
    .then(employees => {
        return employees;
    });
}

function getEmployeeDetails(id){
    const requestOptions = {
        method: 'get',
    };
    return fetch('http://localhost:3001/api/v1/employees/employeesDetails?id='+id, requestOptions)
    .then(handleResponse)
    .then(employee => {
        return employee;
    });
}

function createEmployee(payload) {
    const requestOptions = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return fetch('http://localhost:3001/api/v1/employees/create', requestOptions)
    // .then(handleResponse)
    .then(employee => {
        return employee;
    });
}


function updateEmployee(payload,id) {
    const requestOptions = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return fetch('http://localhost:3001/api/v1/employees/update?id='+id, requestOptions)
    // .then(handleResponse)
    .then(employee => {
        return employee;
    });
}


function deleteEmployee(id) {
    const requestOptions = {
        method: 'post',
    };
    return fetch('http://localhost:3001/api/v1/employees/delete?id='+id, requestOptions)
    // .then(handleResponse)
    .then(employee => {
        return employee;
        // getAllEmployees();
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    console.log(response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }
            const error = (data && data.message) || response.statusText || 'Error is processing the request';
            return Promise.reject(error);
        }
        return data;
    });
}