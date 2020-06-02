import React from 'react';
import { connect } from 'react-redux';
import { Button,  Card, CardBody, Container, Form, Col, Row } from 'reactstrap';
import { history } from '../_helpers';
import { userActions } from '../_actions';


class RegisterPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEmailValidation = this.handleEmailValidation.bind(this);
        this.verifyEmail= this.verifyEmail.bind(this);
    }

    onCancel= (e) => {
        history.push('/EmployeeList');
    }


    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleClick(e){
      debugger;
        this.setState({ submitted: true });
        const { dispatch } = this.props;
        const {name,username,email,password,passwordConfirmation } = this.state;
        if (name && username && email && password && passwordConfirmation &&
          (password.length>=6) && (password===passwordConfirmation) &&
          this.verifyEmail(email)) {
            let payload={
                email: this.state.email,
                name: this.state.name,
                username: this.state.username,
                password: this.state.password,
                passwordConfirmation: this.state.passwordConfirmation
            }
            // dispatch(employeeactions.createEmployee(payload));
            console.log(payload);
            dispatch(userActions.register(payload));
        }
    }

    verifyEmail(email) {
      debugger;
      const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(email && mailformat.test(email)){
        return true;
      } else {
        return false;
      }
    }

    handleEmailValidation(value) {
      this.verifyEmail(value.email);
    }

    

    render() {
        const {name,username,email,password,passwordConfirmation,submitted } = this.state;
        return (
          <div className="jumbotron">
          <div className="container">
              <div className="col-sm-15 col-sm-offset-2"> 
            <Container>  
              <Row className="justify-content-center">  
                <Col md="12" lg="10" xl="8">  
                  <Card className="mx-4">  
                    <CardBody className="p-4">  
                      <Form>  
                        <h1>Register</h1>  

                        <div className={'form-group' + (submitted && !name ? ' has-error' : '')}>
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} required />
                            {submitted && !name &&
                                <div className="help-block">Name is required</div>
                            }
                        </div>

                        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                            <label htmlFor="name">User Name</label>
                            <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                            {submitted && !username &&
                                <div className="help-block">User Name is required</div>
                            }
                            {submitted && username && username.length<6 &&
                                <div className="help-block">User Name is required</div>
                            }
                        </div>
                    
                         <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
                            {submitted && !email && 
                                <div className="help-block">Email is required</div>
                            }
                            {submitted && !this.handleEmailValidation({email}) && 
                                <div className="help-block">Please enter a valid email format</div>
                            }

                        </div>
                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                            <label htmlFor="salary">Password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                            {submitted && !password &&
                                <div className="help-block">Password is required</div>
                            }
                            {submitted && password && password.length < 6 &&
                                <div className="help-block">Password is too short to be saved</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !passwordConfirmation ? ' has-error' : '')}>
                            <label htmlFor="salary">Confirm Password</label>
                            <input type="password" className="form-control" name="passwordConfirmation" value={passwordConfirmation} onChange={this.handleChange} />
                            {submitted && !passwordConfirmation &&
                                <div className="help-block">Confirm Password is required</div>
                            }
                             {/* {submitted && passwordConfirmation & password && (passwordConfirmation!==password) &&
                                <div className="help-block">Confirm Password should match the password entered</div>
                            } */}
                        </div>
                      
                  
                      <Row>  
                        <Col xs="12" sm="6">  
                          <Button className="btn btn-info mb-1" block onClick={this.handleClick}><span>Register</span></Button>  
                        </Col>  
                        <Col xs="12" sm="6">  
                          <Button className="btn btn-info mb-1" block onClick={this.onCancel}><span>Cancel</span></Button>  
                        </Col>  
                      </Row>  
                  
                      </Form>  
                    </CardBody>  
                  </Card>  
                </Col>  
              </Row>  
            </Container>  
          </div>  
          </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
  const { loggingIn } = state.register;
  return {
      loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(RegisterPage);
export { connectedLoginPage as RegisterPage }; 