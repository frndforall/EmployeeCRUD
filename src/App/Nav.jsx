import React from 'react';
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
        <Navbar bg="dark" variant="dark">
          {/* <Navbar.Brand>Welcome {name}</Navbar.Brand> */}
          <Nav className="mr-auto">
            <Nav.Link href="/MeetupsList">Meetups</Nav.Link>
            <Nav.Link href="/EmployeeList">Employee List</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
          <UserData user={user} />
        </Navbar>
      </>
    );
  }
}
export default Navigation;