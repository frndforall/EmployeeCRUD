import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {    
    return (
        <nav className="btn btn-warning navbar navbar-expand-lg nav">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/AddEmployee'} className="nav-link">Add Employee</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/EmployeeList'} className="nav-link">Employee List</Link> 

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