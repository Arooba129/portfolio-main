import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
 skills = [
  { name: 'Angular', level: 'Expert', icon: '🅰️' },
  { name: 'TypeScript', level: 'Expert', icon: '📘' },
  { name: 'HTML5/CSS3', level: 'Expert', icon: '🎨' },
  { name: 'Java', level: 'Advanced', icon: '☕' },
  { name: 'Spring Boot', level: 'Advanced', icon: '🌱' },
  { name: 'Python', level: 'Intermediate', icon: '🐍' },
  { name: 'Django', level: 'Intermediate', icon: '🟢' },
  { name: 'Machine Intelligence (ML)', level: 'Beginner', icon: '🤖' },
  { name: 'Git', level: 'Advanced', icon: '🔀' },
];

}
