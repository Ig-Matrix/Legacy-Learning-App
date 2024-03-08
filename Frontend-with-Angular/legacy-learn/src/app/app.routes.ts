import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AnnouncementPageComponent } from './pages/announcement-page/announcement-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { FeedbackPageComponent } from './pages/feedback-page/feedback-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';


export const routes: Routes = [
    {path: '', title:'Landing Page', component: LandingPageComponent},
    {path: 'home', title:'Home Page', component: HomePageComponent},
    {path: 'signup', title:'Sign-up Page', component: SignupPageComponent},
    {path: 'login', title:'Log-in Page', component:LoginPageComponent},
    {path: 'announcement', title:'Announcement Page', component: AnnouncementPageComponent},
    {path: 'portfolio', title:'Portfolio Page', component: PortfolioPageComponent},
    {path: 'feedback', title:'Feedback Page', component: FeedbackPageComponent},
    {path: '**', title: 'Error-404', component: Error404PageComponent},
];
