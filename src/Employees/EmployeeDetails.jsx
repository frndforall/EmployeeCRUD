import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Table , Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import { employeeactions } from '../_actions';

class EmployeeDetails extends React.Component {

    constructor(props) {
        super(props);
        this.deleteEmployee =this.deleteEmployee.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
        this.updateEmployee = this.updateEmployee(this);
    }

    componentDidMount() {
        this.props.dispatch(employeeactions.getAllEmployees());
    }

    deleteEmployee = (id) => {
        this.props.dispatch(employeeactions.deleteEmployee(id));
    }

    updateEmployee = (id) => {
        // this.props.dispatch(employeeactions.deleteEmployee(id));
    }

    confirmDelete = (_id) => {
        window.confirm("Are you sure you wish to delete this item?") && this.deleteEmployee(_id)
      }


    render() {
        const {employees} = this.props;
        return (
            <div className="animated fadeIn">
                <h1> Employee Details</h1>

                {employees.loading && <em>Loading users...</em>}
                {employees.error && <span className="text-danger">ERROR</span>}
                {employees.items &&
                    <Row>  
                            <Col>  
                            <Card> 
                                <CardHeader>  
                                <i className="fa fa-align-justify"></i> Employee List  
                                </CardHeader>  

                                <CardBody>  

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
                                        return <tr> 
                                            <td>{item.name}</td>  
                                            <td>{item.email}</td>  
                                            <td>{item.age}</td>  
                                            <td>{item.salary}</td>  
                                            <td>  
                                            <div class="btn-group">  
                                                <button className="btn btn-warning" onClick={() => { this.updateEmployee(item._id) }}>Edit</button>  
                                                <button className="btn btn-warning" onClick={() => { this.confirmDelete(item._id) }}>Delete</button>  
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
            
                <p>
                    <Link to="/">Logout</Link> <t/>  <Link to="/AddEmployee">Add Employee</Link>
                </p>
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