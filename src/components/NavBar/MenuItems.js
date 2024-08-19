import ContactPage from '../Contact/Contact';
import HomeLinkTree from '../HomeLinkTree/HomeLinkTree';
import ThankYouPage from '../Thank/Thank';
import SurveyPage from '../Survey/Survey';

export const MenuItems = [
    {
        title: 'Home',
        path: '/',
        element: <HomeLinkTree/>,
        cName: 'nav-links'
    },
    // {
    //     title: 'Follow Us',
    //     path: '/media',
    //     element: <SurveyPage/>,
    //     cName: 'nav-links'
    // },
    // {
    //     title: 'Products',
    //     path: '/thanks',
    //     element: <ThankYouPage/>,
    //     cName: 'nav-links'
    // },
    {
        title: 'Contact Us',
        path: '/contact',
        element: <ContactPage/>,
        cName: 'nav-links'
    }
]
