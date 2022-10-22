import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const{user,userLogOut} = useContext(AuthContext)
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">daisyUI</Link>

                <Link className="btn btn-ghost normal-case  " to={'home'}>Home</Link>
                <Link className="btn btn-ghost normal-case  " to={'resister'}>Resister</Link>
                <Link className="btn btn-ghost normal-case  " to={'login'}>Log In</Link>
                {
                    user?.email && <span className="btn btn-ghost normal-case  ">Welcome, {user.email}</span>
                }
                {user? <Link onClick={userLogOut} to={'/'}><button className="btn btn-ghost normal-case btn-outline btn-error">Log Out</button></Link>
                :
                <Link onClick={userLogOut} to={'/login'}><button className="btn btn-ghost normal-case btn-outline btn-error">Log In</button></Link>}
                
            

            </div>
        </div>
    );
};

export default Header;