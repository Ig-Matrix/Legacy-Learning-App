export const MenuConstant = {
    ApiEndPoints: {},
    Patterns: {},
    
    menus : [
        {
        path: 'home',
        title: 'Home Page',
        iconPath: 'assets/fonts/house-solid.svg',
        roles: ['ADMIN', 'STUDENT']
    },
    {
        path: 'contact',
        title: 'Contact Us',
        iconPath: 'assets/fonts/address-card-solid.svg',
        roles: ['ADMIN', 'STUDENT']
    },
    {
        path: 'about',
        title: 'About Us',
        iconPath: 'assets/fonts/location-dot-solid.svg',
        roles: ['ADMIN', 'STUDENT']
    },
    {
        path: 'announce',
        title: 'Create Announcements',
        iconPath: 'assets/fonts/newspaper-solid.svg',
        roles: ['ADMIN']
    },
    {
        path: 'create-admin',
        title: 'Create Admin',
        iconPath: 'assets/fonts/user-solid.svg',
        roles: ['ADMIN']
    },
    {
        path: 'view-feedback',
        title: 'View Feedback',
        iconPath: 'assets/fonts/comment-solid.svg',
        roles: ['ADMIN']
    },
    {
        path: 'news',
        title: 'View Announcements',
        iconPath: 'assets/fonts/newspaper-solid.svg',
        roles: ['STUDENT']
    },
    {
        path: 'feedback',
        title: 'Send Feedback',
        iconPath: 'assets/fonts/comment-solid.svg',
        roles: ['STUDENT']
    },
    {
        path: 'portfolio',
        title: 'Portfolio',
        iconPath: 'assets/fonts/briefcase-solid.svg',
        roles: ['STUDENT']
    }]
}