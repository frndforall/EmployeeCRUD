import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../App/Nav';


class HomePage extends React.Component {

    render() {
    
        return (
            
            <div >
               <Navigation />
                <p>You're logged in with React & JWT!!</p>
               
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

export default HomePage;