import React from 'react';
import { Outlet } from 'react-router-dom';
import Advertise from '../Pages/Home/Advertise/Advertise';
import Nav1 from '../Pages/Shared/NavBar/Nav1/Nav1';
import Nav2 from '../Pages/Shared/NavBar/Nav2/Nav2';

const Main = () => {
    return (
        <div>
            <Advertise></Advertise>
            <Nav1></Nav1>
            <Nav2></Nav2>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;