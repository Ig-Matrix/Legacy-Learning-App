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
import { AdminCreateUserComponent } from './pages/Admin/admin-create-user/admin-create-user.component';
import { FeedbackFormsComponent } from './pages/Students/feedback-forms/feedback-forms.component';
import { StudentPortfolioComponent } from './pages/Students/student-portfolio/student-portfolio.component';
import { LoginGuard } from './services/login.guard';


export const routes: Routes = [
    {path: '', title:'Landing Page', component: LandingPageComponent},
    {path: 'home', title:'Home Page', component: HomePageComponent},
    {path: 'signup', title:'Sign-up Page', component: CreateUserPageComponent},
    {path: 'loginPage', title:'Log-in Page', component:LoginPageComponent},
    {path: 'announce', title:'Announcement Page', component: AnnouncementPageComponent},
    {path: 'portfolio', title:'Portfolio Page', component: PortfolioPageComponent },
    {path: 'view-feedback', title:'Feedback Page', component: FeedbackPageComponent},
    {path: 'news', title:'Announcement Page', component: StudentAnnouncementPageComponent },
    {path: 'feedback', title:'Feedback Page', component: StudentFeedbackPageComponent},
    {path: 'about', title:'About Page', component: AboutUsPageComponent },
    // {path: 'about', title:'About Page', component: AboutUsPageComponent, canActivate: [LoginGuard]},
    {path: 'contact', title:'Contact Page', component: ContactUsPageComponent}, 
    {path: 'create', title:'Create User Page', component: AdminCreateUserComponent},
    {path: 'feedbackforms', title:'Feedback Forms', component: FeedbackFormsComponent}, 
    {path: 'portfoliogpa', title:'Gpa page', component: StudentPortfolioComponent}, 
    {path: '**', title: 'Error-404', component: Error404PageComponent},
];

