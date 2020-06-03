import React from 'react';
// import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {
    Button,
    Card,
    CardBody,
    Container,
    CardFooter,
    Form,
    Col,
    Row
} from 'reactstrap';
import {employeeactions} from '../_actions';
import {history} from '../_helpers';
import Navigation from '../App/Nav';

class AddEmployee extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            age: '',
            salary: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEmailValidation = this.handleEmailValidation.bind(this);
        this.verifyEmail = this.verifyEmail.bind(this);
    }

    onCancel = (e) => {
        history.push('/EmployeeList');
    }


    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleNumberChange(e) {
        const re = /^[0-9\b]+$/;
        const {name, value} = e.target;
        if (re.test(value)) {
            this.setState({[name]: value});
        }
    }

    verifyEmail(email) {
        debugger;
        const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email && mailformat.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    handleEmailValidation(value) {
        this.verifyEmail(value.email);
    }

    handleClick(e) {
        this.setState({submitted: true});
        const {dispatch} = this.props;
        const {name, email, age, salary} = this.state;
        if (name && email && age && salary && age < 100 && this.verifyEmail(email)) {
            let payload = {
                name: this.state.name,
                email: this.state.email,
                salary: this.state.salary,
                age: this.state.age
            }
            dispatch(employeeactions.createEmployee(payload));
        }
    }

    render() {
        const {
            name,
            email,
            age,
            salary,
            submitted
        } = this.state;
        return (
            <div className="app flex-row align-items-center">
                <Navigation/>
                <Container>
                    <Row className="justify-content-center">
                        <Col md="12" lg="10" xl="8">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <Form>
                                        <h1>Add Employee</h1>

                                        <div className={
                                            'form-group' + (
                                            submitted && !name ? ' has-error' : ''
                                        )
                                        }>
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" name="name"
                                                value={name}
                                                onChange={
                                                    this.handleChange
                                                }/> {
                                            submitted && !name && <div className="help-block">Name is required</div>
                                        } </div>

                                        <div className={
                                            'form-group' + (
                                            submitted && !email ? ' has-error' : ''
                                        )
                                        }>
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" name="email"
                                                value={email}
                                                onChange={
                                                    this.handleChange
                                                }/> {
                                            submitted && !email && <div className="help-block">Email is required</div>
                                        } </div>
                                        <div className={
                                            'form-group' + (
                                            submitted && !salary ? ' has-error' : ''
                                        )
                                        }>
                                            <label htmlFor="salary">Salary</label>
                                            <input type="text" className="form-control" name="salary"
                                                value={salary}
                                                onChange={
                                                    this.handleNumberChange
                                                }/> {
                                            submitted && !salary && <div className="help-block">Salary is required</div>
                                        } </div>
                                        <div className={
                                            'form-group' + (
                                            submitted && !age ? ' has-error' : ''
                                        )
                                        }>
                                            <label htmlFor="age">Age</label>
                                            <input type="text" className="form-control" name="age"
                                                value={age}
                                                onChange={
                                                    this.handleNumberChange
                                                }/> {
                                            submitted && !age && <div className="help-block">Age is required</div>
                                        }
                                            {
                                            submitted && (age > 100) && <div className="help-block">Age cannot be greater than 100</div>
                                        } </div>

                                        <CardFooter className="p-4">
                                            <Row>
                                                <Col xs="12" sm="6">
                                                    <Button className="btn btn-info mb-1" block
                                                        onClick={
                                                            this.handleClick
                                                    }>
                                                        <span>Save</span>
                                                    </Button>
                                                </Col>
                                                <Col xs="12" sm="6">
                                                    <Button className="btn btn-info mb-1" block
                                                        onClick={
                                                            this.onCancel
                                                    }>
                                                        <span>Cancel</span>
                                                    </Button>
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
    const {employees} = state;
    return {employees};
}

const connectedEmployee = connect(mapStateToProps)(AddEmployee);
export {
    connectedEmployee as AddEmployee
};
