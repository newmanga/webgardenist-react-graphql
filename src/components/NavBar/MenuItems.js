import ContactPage from '../Contact/Contact';
import HomeLinkTree from '../HomeLinkTree/HomeLinkTree';

export const MenuItems = [
    {
        title: 'Home',
        path: '/',
        element: <HomeLinkTree/>,
        cName: 'nav-links'
    },
    {
        title: 'Services',
        path: '/',
        element: <HomeLinkTree/>,
        cName: 'nav-links'
    },
    {
        title: 'Products',
        path: '/',
        element: <HomeLinkTree/>,
        cName: 'nav-links'
    },
    {
        title: 'Contact Us',
        path: '/contact',
        element: <ContactPage/>,
        cName: 'nav-links'
    }
]
