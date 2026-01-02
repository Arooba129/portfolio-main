import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home | Arooba Javed' },
    { path: 'about', component: AboutComponent, title: 'About | Arooba Javed' },
    { path: 'projects', component: ProjectsComponent, title: 'Projects | Arooba Javed' },
    { path: 'resume', component: ResumeComponent, title: 'Resume | Arooba Javed' },
    { path: 'contact', component: ContactComponent, title: 'Contact | Arooba Javed' },
    { path: '**', redirectTo: '' }
];
