import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
    company: string;
    role: string;
    period: string;
    description: string[];
}

@Component({
    selector: 'app-resume',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './resume.component.html',
    styleUrl: './resume.component.css'
})
export class ResumeComponent {
    experiences: Experience[] = [
        {
            company: 'PostEx ',
            role: ' Software Engineer Intern',
            period: '2025 - Present',
            description: [
                'Assisted in developing backend services with Java Spring Boot and integrating them with Angular front-end components.',
'Worked with reactive forms and API integration in Angular to build dynamic user interfaces.',
'Participated in code reviews and team discussions to understand enterprise-level application architecture.'

            ]
        },
        {
            company: 'Invozone Software Company',
            role: 'Software Engineer Trainee',
            period: '2022',
            description: [
                'Developed reliable APIs using Node.js and Express.',
                'Built responsive UI components for 10+ client websites.',
                'Optimized frontend performance, achieving 90+ Lighthouse scores.'
            ]
        },
    ];

    education = [
        {
            degree: 'BS Computer Science',
            school: 'Islamia University of Bahawalpur',
            year: '2021 - 2025'
        }
    ];

    downloadResume() {
        // Placeholder for download logic
        alert('Resume download started (placeholder)');
    }
}
