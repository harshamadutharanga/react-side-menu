import React from 'react';
import * as icons from 'react-icons/ai';
import AboutUs from './Pages/AboutUs';
import { Redirect } from 'react-router-dom';


export const sideBarData = [
    {
       tab_name: 'Home',
       redirect_path: '/',
       icon : <icons.AiFillHome />,
       cName : 'nav-text'

},{

    tab_name: 'AboutUs',
    redirect_path: '/aboutus',
    icon : <icons.AiFillAliwangwang />,
    cName : 'nav-text'
},
{

    tab_name: 'ContactUs',
    redirect_path: '/contactus',
    icon : <icons.AiFillPhone />,
    cName : 'nav-text'
}


]

export default sideBarData; 