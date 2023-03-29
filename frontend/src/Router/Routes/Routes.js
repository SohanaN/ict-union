import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Activities from '../../Pages/Activities/Activities';
import Communities from '../../Pages/Communities/Communities';
import Events from '../../Pages/Events/Events';
import Contacts from '../../Pages/Contacts/Contacts';
import Project from '../../Pages/Project/Project';
import Gallery from '../../Pages/Gallery/Gallery';
import Home from '../../Pages/Home/Home';
import Membership from '../../Pages/Membership/Membership';
import AboutUs from '../../Pages/About/About/AboutUs/AboutUs';
import Team from '../../Pages/About/About/Team/Team';
import WorkPlan from '../../Pages/About/WorkPlan/WorkPlan';

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
                element: <AboutUs/>
            },
            {
                path: '/team',
                element: <Team/>
            },
            {
                path: '/workPlan',
                element: <WorkPlan/>
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