import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import { employeeactions } from '../_actions';


function EmployeeData(props) {
    const item = props.item
    return (
          <Col xs="12" sm="6" md="4">
              <Card>
                <CardHeader>
                    Name: {item.name}
                </CardHeader>
                <CardBody>
                    Email: {item.email}<br/>
                    Salary: {item.salary}<br/>
                    Email: {item.age}<br/>

                </CardBody>
              </Card>
              </Col>
    )
  }

class EmployeeDetails extends React.Component {
    componentDidMount() {
        this.props.dispatch(employeeactions.getAllEmployees());
    }

    render() {
        const {employees} = this.props;
        return (
            <div className="animated fadeIn">
                <h1> Employee Details</h1>

                {employees.loading && <em>Loading users...</em>}
                {employees.error && <span className="text-danger">ERROR: {employees.error}</span>}
                {employees.items &&
                    <Row>
                    <Col xl={20}>
                        <Card>
                        <CardHeader>
                           
                        </CardHeader>
                        <CardBody>
                            <Row>
                                {employees.items.map((item, index) =>
                                <EmployeeData key={index} item={item}/>
                                )}
                            </Row> 
                            
                        </CardBody>
                        </Card>
                    </Col>
                    </Row>
                }
            
                <p>
                    <Link to="/login">Logout</Link>
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