import React from 'react';
import { Outlet } from 'react-router-dom';
<<<<<<< HEAD
import Advertise from '../Pages/Home/Advertise/Advertise';
import Nav1 from '../Pages/Shared/NavBar/Nav1/Nav1';
import Nav2 from '../Pages/Shared/NavBar/Nav2/Nav2';
=======
import Footer from '../Pages/Shared/Footer/Footer';
>>>>>>> rakib

const Main = () => {
    return (
        <div>
            <Advertise></Advertise>
            <Nav1></Nav1>
            <Nav2></Nav2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;