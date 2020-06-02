import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import UserData from '../Views/UserOverLay';


class Navigation extends React.Component {
  
  render() {    
    debugger;
    const userData = localStorage.getItem('user');
    const user = userData && JSON.parse(userData);
  
    return (
      <>
        <Navbar bg="primary" variant="dark">
          {/* <Navbar.Brand>Welcome {name}</Navbar.Brand> */}
          <UserData user={user} />
          <Nav className="mr-auto">
            <Nav.Link href="/EmployeeList">Employee List</Nav.Link>
            <Nav.Link href="/MeetupsList">Meetups</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}
export default Navigation;