import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  
  render() {    
    debugger;
    const username = localStorage.getItem('user');
    const name = username && JSON.parse(username).name;
  
    return (
        <nav className="btn btn-warning navbar navbar-expand-lg nav">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
            <strong className="nav-link"> Welcome {name}</strong>
              <li className="nav-item">    
                <Link to={'/AddEmployee'} className="nav-link">Add Employee</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/EmployeeList'} className="nav-link">Employee List</Link> 
              </li>   
              <li className="nav-item">    
                <Link to={'/Home'} className="nav-link">Meetups</Link> 
              </li>
              <li className="nav-item">    
                <Link to={'/'} className="nav-link">Logout</Link>    
              </li>    
            </ul>    
          </div>    
        </nav> 
    );
  }
}
export default Navigation;