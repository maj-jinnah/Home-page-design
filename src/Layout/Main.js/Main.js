import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavbar from '../../Pages/Shared/BottomNavbar/BottomNavbar';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <BottomNavbar></BottomNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;