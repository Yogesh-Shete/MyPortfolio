// ContactMe.ts
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './ContactMe.html',
  styleUrls: ['./ContactMe.scss']
})
export class ContactMeComponent {
  @ViewChild('contactForm') contactFormRef!: NgForm;

  model: {
    name: string;
    email: string;
    subject: string;
    message: string;
  } = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  fileToSend: File | null = null;
  sending = false;
  submitted = false;
  success: string | null = null;
  error: string | null = null;

  // Replace this with your Formspree endpoint or EmailJS logic
  private FORMSPREE_ENDPOINT = 'https://formspree.io/f/xovrrknd';

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.fileToSend = input.files[0];
    } else {
      this.fileToSend = null;
    }
  }

  async onSubmit(form: NgForm) {
    this.submitted = true;
    this.success = this.error = null;

    // If form invalid, focus first invalid control and stop
    if (!form.valid) {
      this.focusFirstInvalidInput();
      return;
    }

    this.sending = true;
    try {
      const formData = new FormData();
      formData.append('name', this.model.name);
      formData.append('email', this.model.email);
      formData.append('subject', this.model.subject || '');
      formData.append('message', this.model.message);
      if (this.fileToSend) formData.append('attachment', this.fileToSend);

      const res = await fetch(this.FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        this.success = 'Message sent — I will reply soon.';
        this.model = { name: '', email: '', subject: '', message: '' };
        this.fileToSend = null;
        form.resetForm();
        this.submitted = false;
      } else {
        const data = await res.json().catch(() => null);
        this.error = (data && data.error) || 'Failed to send message. Please try again later.';
      }
    } catch (err) {
      console.error(err);
      this.error = 'Network error — please try again.';
    } finally {
      this.sending = false;
    }
  }

  private focusFirstInvalidInput() {
    // look for first element with class 'ng-invalid' that is an input/textarea
    setTimeout(() => {
      const invalidControl = document.querySelector<HTMLInputElement | HTMLTextAreaElement>('.ng-invalid[ng-model], .ng-invalid input, .ng-invalid textarea, input.ng-invalid, textarea.ng-invalid');
      if (invalidControl) {
        invalidControl.focus();
      } else {
        // fallback: focus name input
        const nameInput = document.querySelector<HTMLInputElement>('input[name="name"]');
        nameInput?.focus();
      }
    }, 0);
  }
}
