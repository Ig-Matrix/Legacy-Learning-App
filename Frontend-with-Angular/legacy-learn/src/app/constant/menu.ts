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
        title: 'Create Announcement Page',
        iconPath: 'assets/fonts/newspaper-solid.svg',
        roles: ['ADMIN']
    },
    {
        path: 'signup',
        title: 'Sign-Up Page',
        iconPath: 'assets/fonts/user-solid.svg',
        roles: ['ADMIN']
    },
    {
        path: 'view-feedback',
        title: 'View Feedback Page',
        iconPath: 'assets/fonts/comment-solid.svg',
        roles: ['ADMIN']
    },
    {
        path: 'news',
        title: 'Announcement Page',
        iconPath: 'assets/fonts/newspaper-solid.svg',
        roles: ['STUDENT']
    },
    {
        path: 'feedback',
        title: 'About Us',
        iconPath: 'assets/fonts/comment-solid.svg',
        roles: ['STUDENT']
    },
    {
        path: 'portfolio',
        title: 'Portfolio Page',
        iconPath: 'assets/fonts/briefcase-solid.svg',
        roles: ['STUDENT']
    }]
}