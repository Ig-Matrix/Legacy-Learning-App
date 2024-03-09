import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateUserPageComponent } from './pages/Admin/create-user-page/create-user-page.component';
import { AnnouncementPageComponent } from './pages/Admin/announcement-page/announcement-page.component';
import { StudentAnnouncementPageComponent } from './pages/Students/student-announcement-page/student-announcement-page.component';
import { PortfolioPageComponent } from './pages/Students/portfolio-page/portfolio-page.component';
import { FeedbackPageComponent } from './pages/Admin/feedback-page/feedback-page.component';
import { StudentFeedbackPageComponent } from './pages/Students/student-feedback-page/student-feedback-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';


export const routes: Routes = [
    {path: '', title:'Landing Page', component: LandingPageComponent},
    {path: 'home', title:'Home Page', component: HomePageComponent},
    {path: 'create-user', title:'Create-user Page', component: CreateUserPageComponent},
    {path: 'login', title:'Log-in Page', component:LoginPageComponent},
    {path: 'announcement', title:'Announcement Page', component: AnnouncementPageComponent},
    {path: 'portfolio', title:'Portfolio Page', component: PortfolioPageComponent},
    {path: 'feedback', title:'Feedback Page', component: FeedbackPageComponent},
    {path: 'student-announcement', title:'Announcement Page', component: StudentAnnouncementPageComponent},
    {path: 'student-feedback', title:'Feedback Page', component: StudentFeedbackPageComponent},
    {path: '**', title: 'Error-404', component: Error404PageComponent},
];
