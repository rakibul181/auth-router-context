import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const{user} = useContext(AuthContext)
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">daisyUI</Link>

                <Link className="btn btn-ghost normal-case  " to={'home'}>Home</Link>
                <Link className="btn btn-ghost normal-case  " to={'resister'}>Resister</Link>
                <Link className="btn btn-ghost normal-case  " to={'login'}>Log In</Link>
                {
                    console.log(user?.displayUser)
                }
            

            </div>
        </div>
    );
};

export default Header;