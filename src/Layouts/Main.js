import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import './Main.css';

const Main = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <footer className='footer-part'>
                <div>
                    &copy;Copyright 2023 by JR. student Developer.
                </div>
                <div>
                    Developer <Link to='/nurislam'
                        style={{ textDecoration: 'none' }}
                    >&lt;Nur Islam&gt;</Link>
                </div>
            </footer>
        </div>
    );
};

export default Main;