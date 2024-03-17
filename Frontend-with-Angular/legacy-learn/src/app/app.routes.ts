import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateUserPageComponent } from './pages/create-user-page/create-user-page.component';
import { AnnouncementPageComponent } from './pages/Admin/announcement-page/announcement-page.component';
import { StudentAnnouncementPageComponent } from './pages/Students/student-announcement-page/student-announcement-page.component';
import { PortfolioPageComponent } from './pages/Students/portfolio-page/portfolio-page.component';
import { FeedbackPageComponent } from './pages/Admin/feedback-page/feedback-page.component';
import { StudentFeedbackPageComponent } from './pages/Students/student-feedback-page/student-feedback-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import { FeedbackFormsComponent } from './pages/Students/feedback-forms/feedback-forms.component';
import { StudentPortfolioComponent } from './pages/Students/student-portfolio/student-portfolio.component';
import { LoginGuard } from './services/login.guard';


export const routes: Routes = [
    {path: '', title:'Landing Page', component: LandingPageComponent}, //both
    {path: 'loginPage', title:'Log-in Page', component:LoginPageComponent}, //both
    {path: 'home', title:'Home Page', component: HomePageComponent, canActivate: [LoginGuard]}, //both
    {path: 'signup', title:'Sign-up Page', component: CreateUserPageComponent}, //both
    {path: 'contact', title:'Contact Page', component: ContactUsPageComponent, canActivate: [LoginGuard]}, //both
    {path: 'about', title:'About Page', component: AboutUsPageComponent, canActivate: [LoginGuard]}, //both
    {path: 'announce', title:'AdminAnnouncement Page', component: AnnouncementPageComponent, canActivate: [LoginGuard]}, //admin
    {path: 'view-feedback', title:'AdminFeedback Page', component: FeedbackPageComponent, canActivate: [LoginGuard]}, //admin
    {path: 'news', title:'Announcement Page', component: StudentAnnouncementPageComponent, canActivate: [LoginGuard]}, //student
    {path: 'feedback', title:'Feedback Page', component: StudentFeedbackPageComponent, canActivate: [LoginGuard]}, //student
    {path: 'portfolio', title:'Portfolio Page', component: PortfolioPageComponent, canActivate: [LoginGuard]}, //student
    {path: 'feedbackforms', title:'Feedback Forms', component: FeedbackFormsComponent, canActivate: [LoginGuard]}, //student
    {path: 'portfoliogpa', title:'Gpa page', component: StudentPortfolioComponent, canActivate: [LoginGuard] }, //student 
    {path: '**', title: 'Error-404', component: Error404PageComponent}, //both
];

