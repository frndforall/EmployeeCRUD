import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { employeeactions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(employeeactions.getAllEmployees());
    }

    render() {
        const { user, users } = this.props;
        const {employees} = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React & JWT!!</p>
                <h3>Users from secure api end point:</h3>
                {employees.loading && <em>Loading users...</em>}
                {employees.error && <span className="text-danger">ERROR: {users.error}</span>}
                {employees.items &&
                    <ul>
                        {employees.items.map((user, index) =>
                            <li key={user._id}>
                                {user.name + ' ' + user.email}
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication, employees } = state;
    const { user } = authentication;
    return {
        user,
        users,
        employees
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };