import React from 'react';
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


class UpdateEmployee extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            name: '',
            email: '',
            age: '',
            salary: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        this.props.dispatch(employeeactions.getEmployeeDetails(this.props.match.params.id));
    }

    componentDidUpdate() {
        console.log('did update');
    }

    componentWillReceiveProps(nextProps) {
        console.log('props recieved', nextProps);
        let data = nextProps.employeeDetails;
        if (data && data.items) {
            this.setState({
                _id: data.items._id,
                name: data.items.name,
                email: data.items.email,
                salary: data.items.salary,
                age: data.items.age
            });
        }
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

    handleEmailValidation(value) {
        debugger;
        const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (value && mailformat.test(value.email)) {
            return true;
        } else {
            return false;
        }
    }

    handleClick(e) {
        this.setState({submitted: true});
        const {dispatch} = this.props;
        const {name, email, age, salary} = this.state;
        if (name && email && age && salary) {
            let payload = {
                name: this.state.name,
                email: this.state.email,
                salary: this.state.salary,
                age: this.state.age
            }
            dispatch(employeeactions.updateEmployee(payload, this.state._id));
        }
    }

    render() {
        const {employeeDetails, employeeUpdate} = this.props;
        const {
            name,
            email,
            age,
            salary,
            submitted
        } = this.state;
        return (
            <div className="app flex-row align-items-center">
                {
                employeeDetails.loading && <div class="d-flex justify-content-center">
                    <br/>
                    <br/>
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            }
                {
                employeeDetails.error && alert('Error in API call' + employeeDetails.error)
            }
                {
                employeeDetails.items && <Container>
                    <Row className="justify-content-center">
                        <Col md="12" lg="10" xl="8">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <Form>
                                        <h1>Update Employee</h1>

                                        <div>

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
                                                        this.handleChange
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
                                            } </div>
                                        </div>

                                        <CardFooter className="p-4">
                                            <Row>
                                                <Col xs="12" sm="6">
                                                    <div> {
                                                        employeeUpdate && employeeUpdate.loading ? <button class="btn btn-info mb-1" type="button" disabled>
                                                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                            Saving...
                                                        </button> : <Button className="btn btn-info mb-1" block
                                                            onClick={
                                                                this.handleClick
                                                        }>
                                                            <span>Update</span>
                                                        </Button>
                                                    } </div>

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
            } </div>
        );
    }
}

function mapStateToProps(state) {
    const {employeeDetails, employeeUpdate} = state;
    return {employeeDetails, employeeUpdate};
}

const connectedEmployee = connect(mapStateToProps)(UpdateEmployee);
export {
    connectedEmployee as UpdateEmployee
};
