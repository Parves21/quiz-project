import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='Diploma-logo'>
                <h2><span style={{ color: 'red' }}>10</span> Minute in Diploma</h2>
            </div>
            <div>
                <Link to='/'>Subject</Link>
                <Link to='/quiz'>Quiz</Link>
                <Link to='/questions'>Questions</Link>
                <Link to='/result'>Result</Link>

            </div>
        </div>
    );
};
export default Header;