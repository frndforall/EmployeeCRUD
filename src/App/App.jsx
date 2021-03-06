import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { LoginPage, RegisterPage } from '../LoginPage';
import { EmployeeDetails,AddEmployee,UpdateEmployee } from '../Employees';
import { Meetups,MeetupDetails } from '../Meetups';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        debugger;
        return (
            <div>
                <ToastContainer />
                <div >
                    <div >
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/EmployeeList" component={EmployeeDetails} />
                                <PrivateRoute exact path="/MeetupsList" component={Meetups} />
                                <PrivateRoute exact path="/AddEmployee" component={AddEmployee} />
                                <PrivateRoute exact path='/update/:id' component={UpdateEmployee}/>
                                <PrivateRoute exact path='/meetups/:id' component={MeetupDetails}/>
                                <Route exact path="/" component={LoginPage} />
                                <Route exact path="/Register" component={RegisterPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 