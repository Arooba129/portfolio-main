import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  demoUrl: string;
  repoUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [

    {
      title: 'Survey Management System',
      description: 'Developed a full-stack Survey Management System with Spring Boot, Angular, and MySQL, supporting role-based access and survey workflows.',
      tech: [ 'Java', 'Springboot', 'Angular', 'MySql'],
      imageUrl: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Survey+Management+System',
      demoUrl: 'https://survey-fe-setup-7ju1.vercel.app/auth/register',
      repoUrl: 'https://github.com/Arooba129/Survey-FE-Setup.git'
    },
    {
      title: 'Angular SharedUi library',
      description: 'An Angular Shared UI library for reusable input validation and formatting to ensure consistent and reliable form handling.',
      tech: ['Angular', 'TypeScript'],
      imageUrl: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Angular+SharedUi+library',
      demoUrl: '#',
      repoUrl: 'https://github.com/Arooba129/angular-lib-workspace.git'
    }
  ];
}
