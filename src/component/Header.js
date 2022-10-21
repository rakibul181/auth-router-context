import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                <Link className="btn btn-ghost normal-case  " to={'resister'}>Resister</Link>
                <Link className="btn btn-ghost normal-case  " to={'login'}>Log In</Link>
            

            </div>
        </div>
    );
};

export default Header;