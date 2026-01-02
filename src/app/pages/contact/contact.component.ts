import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  ngOnInit(): void {
    emailjs.init('lciGpA0OkYnZHVcfh');
  }

  onSubmit() {
    emailjs.send(
      'service_x8nldig',  
      'template_cd2kmkt',    
      {
        name: this.formData.name,
        email: this.formData.email,
        message: this.formData.message
      }
    )
    .then(() => {
      alert('Message sent successfully!');
      this.formData = { name: '', email: '', message: '' };
    })
    .catch(err => {
      console.error('EmailJS ERROR:', err);
      alert('Email failed. Check console.');
    });
  }
}
