import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {    
    return (
        <nav className="btn btn-info navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              {/* <li className="nav-item">    
                <Link to={'/AddEmployee'} className="nav-link">Add Employee</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/EmployeeList'} className="nav-link">Employee List</Link> 

              </li>   
              <li className="nav-item">    
                <Link to={'/'} className="nav-link"></Link>    
              </li>     */}
              <button class="btn btn-warning navbar-btn"><a href={'/AddEmployee'}>Add Employee</a></button>
              <button class="btn btn-warning navbar-btn"><a href={'/EmployeeList'}>Employee List</a></button>
              <button class="btn btn-danger navbar-btn"><a href={'/'}>Logout</a></button>
            </ul>    
          </div>    
        </nav> 
    );
  }
}
export default Nav;