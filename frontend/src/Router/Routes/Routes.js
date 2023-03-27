import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import About from '../../Pages/About/About/About';
import Activities from '../../Pages/Activities/Activities';
import Communities from '../../Pages/Communities/Communities';
import Events from '../../Pages/Events/Events';
import Team from '../../Pages/Team/Team';
import Contacts from '../../Pages/Contacts/Contacts';
import Project from '../../Pages/Project/Project';
import Gallery from '../../Pages/Gallery/Gallery';
import Home from '../../Pages/Home/Home';
import Membership from '../../Pages/Membership/Membership';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/activities',
                element: <Activities/>
            },
            {
                path: '/communities',
                element: <Communities/>
            },
            {
                path: '/events',
                element: <Events/>
            },
            {
                path: '/team',
                element: <Team/>
            },
            {
                path: '/project',
                element: <Project/>
            },
            {
                path: '/contacts',
                element: <Contacts/>
            },
            {
                path: '/gallery',
                element: <Gallery/>
            },
            {
                path: '/membership',
                element: <Membership/>
            }            
        ]
    }
]);

export default router;