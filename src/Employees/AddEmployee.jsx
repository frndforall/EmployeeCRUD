import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button,  Card, CardBody, Container, CardFooter, Form, Col, Row } from 'reactstrap';
import { employeeactions } from '../_actions';
import { history } from '../_helpers';

// import { employeeactions } from '../_actions';


class AddEmployee extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            age:'',
            salary:'',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onCancel= (e) => {
        history.push('/EmployeeList');
    }


    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    // handleSubmit (e) {
    //     this.setState({ submitted: true });
    //     const { dispatch } = this.props;
    //     const {name,email,age,salary,submitted } = this.state;
    //     if (name && email && age && salary) {
    //         let payload={
    //             name: this.state.name,
    //             email: this.state.email,
    //             salary: this.state.salary,
    //             age: this.state.age,
    //         }
    //         dispatch(employeeactions.createEmployee(payload));
    //     }

    // }

    handleClick(e){
        this.setState({ submitted: true });
        const { dispatch } = this.props;
        const {name,email,age,salary,submitted } = this.state;
        if (name && email && age && salary) {
            let payload={
                name: this.state.name,
                email: this.state.email,
                salary: this.state.salary,
                age: this.state.age,
            }
            dispatch(employeeactions.createEmployee(payload));
        }
    }

    render() {
        const {name,email,age,salary,submitted } = this.state;
        return (
            <div className="app flex-row align-items-center">  
            <Container>  
              <Row className="justify-content-center">  
                <Col md="12" lg="10" xl="8">  
                  <Card className="mx-4">  
                    <CardBody className="p-4">  
                      <Form>  
                        <h1>Add Employee</h1>  

                        <div className={'form-group' + (submitted && !name ? ' has-error' : '')}>
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
                            {submitted && !name &&
                                <div className="help-block">Name is required</div>
                            }
                        </div>
                        {/* <InputGroup className="mb-3">  
                          <Input type="text" name="name" id="name" placeholder="Name" val  onChange={ this.handleChange }  />  
                        </InputGroup>   */}
                         <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
                            {submitted && !email &&
                                <div className="help-block">Email is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !salary ? ' has-error' : '')}>
                            <label htmlFor="salary">Salary</label>
                            <input type="text" className="form-control" name="salary" value={salary} onChange={this.handleChange} />
                            {submitted && !salary &&
                                <div className="help-block">Salary is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !age ? ' has-error' : '')}>
                            <label htmlFor="age">Age</label>
                            <input type="text" className="form-control" name="age" value={age} onChange={this.handleChange} />
                            {submitted && !age &&
                                <div className="help-block">Name is required</div>
                            }
                        </div>
                         {/* <InputGroup className="mb-3">  
                          <Input type="text" placeholder="Email" name="email" id="email"  onChange={ this.handleChange }/>  
                        </InputGroup>  
                        <InputGroup className="mb-3">  
                          <Input type="text" placeholder="Age" name="age" id="age"  onChange={ this.handleChange }  />  
                        </InputGroup>  
                        <InputGroup className="mb-4">  
                          <Input type="text" placeholder="Salary" name="salary" id="salary" onChange={ this.handleChange }  />  
                        </InputGroup>    */}
                   <CardFooter className="p-4">  
                      <Row>  
                        <Col xs="12" sm="6">  
                          <Button className="btn btn-info mb-1" block onClick={this.handleClick}><span>Save</span></Button>  
                        </Col>  
                        <Col xs="12" sm="6">  
                          <Button className="btn btn-info mb-1" block onClick={this.onCancel}><span>Cancel</span></Button>  
                        </Col>  
                      </Row>  
                    </CardFooter>  
                      </Form>  
                    </CardBody>  
                  </Card>  
                </Col>  
              </Row>  
            </Container>  
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

const connectedEmployee = connect(mapStateToProps)(AddEmployee);
export { connectedEmployee as AddEmployee };