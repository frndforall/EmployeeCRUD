import React from 'react';
import { connect } from 'react-redux';
import {Table , Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import Navigation from '../App/Nav';

import { employeeactions } from '../_actions';

class EmployeeDetails extends React.Component {

    constructor(props) {
        super(props);
        this.deleteEmployee =this.deleteEmployee.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(employeeactions.getAllEmployees());
    }

    deleteEmployee = (id) => {
        this.props.dispatch(employeeactions.deleteEmployee(id));
    }

    addEmployee = () => {
        this.props.history.push('/AddEmployee');
    }

    updateEmployee = (id) => {
        console.log(id);
        this.props.history.push({  
        pathname: '/update/' + id  
        }); 
    }

    editEmployee= (id) => {
        window.confirm("Are you sure you wish to update this item?") && this.updateEmployee(id);
    }

    confirmDelete = (_id) => {
        window.confirm("Are you sure you wish to delete this item?") && this.deleteEmployee(_id)
      }


    render() {
        const {employees} = this.props;
        debugger;
        return (
            <div className="animated fadeIn">
                <Navigation />
                {employees.loading && <em>Loading Employees...</em>}
                {employees.error && alert('Error in API call'+employees.error)}
                {employees.items &&
                    <Row>  
                            <Col>  
                            <Card> 
                                <CardHeader>  
                                <i className="fa fa-align-justify"></i> Employee List  
                                </CardHeader>  
                                <CardBody>  
                                <button className="btn btn-primary" onClick={() => { this.addEmployee() }}>Add Employee</button> <br/>
                                <br/> 
                                <Table hover bordered striped responsive size="sm">  
                                    <thead>  
                                    <tr>
                                        <th>Name</th>  
                                        <th>Email</th>  
                                        <th>Age</th>  
                                        <th>Salary</th>
                                        <th>Actions</th>   
                                    </tr>  
                                    </thead>  
                                    <tbody>  
                                    {  
                                        employees.items.map((item, id) => {  
                                        return <tr key={id}> 
                                            <td>{item.name}</td>  
                                            <td>{item.email}</td>  
                                            <td>{item.age}</td>  
                                            <td>{item.salary}</td>  
                                            <td>  
                                            <div>  
                                                <button className="btn btn-primary" onClick={() => { this.editEmployee(item._id) }}>Edit</button>  
                                                {' '}
                                                <button className="btn btn-danger"  onClick={() => { this.confirmDelete(item._id) }}>Delete</button>  
                                            </div>  
                                            </td>  
                                        </tr>  
                                        })}  
                                    </tbody>  
                                </Table>  
                                </CardBody>  
                            </Card> 
                            </Col>  
                        </Row>
                }

          </div>
        );
    }
}

function mapStateToProps(state) {
    const { employees } = state;
    return {
        employees
    };
}

const connectedEmployee = connect(mapStateToProps)(EmployeeDetails);
export { connectedEmployee as EmployeeDetails };