import { Component } from '@angular/core';
import { EmailService } from '../email.service';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @ViewChild('fileInput')
  fileInput!: ElementRef<HTMLInputElement>;

  constructor(private emailService: EmailService) {}

  // onSendEmail(to: string, cc: string[], subject: string, body: string): void {
  //   const fileInput = this.fileInput.nativeElement;
  //   const files: File[] = fileInput.files ? Array.from(fileInput.files) : [];

  //   this.emailService.sendEmail(files, to, cc, subject)
  //     .subscribe({
  //       next: (response) => {
  //         console.log('Email sent successfully:', response);
  //       },
  //       error: (error) => {
  //         console.error('Error sending email:', error);
  //       }
  //     });
  // }
}

