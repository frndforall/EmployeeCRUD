import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userActions } from '../_actions';
import { Button,  Card, CardBody, Container,  Col, Row } from 'reactstrap';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);        

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { submitted } = this.state;
        if(submitted){
            this.setState({ submitted: false });
        }
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        debugger;
        const { username, password, submitted } = this.state;
        const {loginDetails} = this.props;
        return (
            <div className="jumbotron">
            <div className="container">
                {submitted && loginDetails && loginDetails.error && alert(loginDetails.error)}
                <div className="col-sm-10 col-sm-offset-3">
                <Container>  
                <Row className="justify-content-center">  
                    <Col md="12" lg="15" xl="15">  
                    <Card className="mx-8">  
                        <CardBody className="p-4">  
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Email</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>

                    <Row>  
                        <Col xs="12" sm="6">  
                          <Button className="btn btn-info mb-1" block ><span>Login</span></Button>  
                        </Col>  
                    </Row>  
                    <p>
                        Haven't Registered yet!!   <Link to={'/Register'}>Please Register</Link>
                    </p>
                </form>
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
    const { loginDetails } = state;
    return {
        loginDetails
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 