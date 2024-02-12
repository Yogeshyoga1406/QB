import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmailService } from '../email.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent {

  @ViewChild('fileInput')
  fileInput!: ElementRef<HTMLInputElement>;

  readExcel(file: File): void {
    const reader: FileReader = new FileReader();
  
    reader.onload = (e: any) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0]; // Assuming you want to read the first sheet
      const worksheet = workbook.Sheets[sheetName];
  
      // Parse the sheet data into a JSON object
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
  
      // Now you can use jsonData in your Angular component
      console.log(jsonData);
      this.excelData=jsonData;
    };
  
    reader.readAsBinaryString(file);
  }
  
  excelData: any[]=[];

  onFileChange(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.readExcel(file)
      // .then((data: any[]) => {
      //   this.excelData = data;
      // });
    }
  }

  constructor(private emailService: EmailService) {}

  onSendEmail(): void {
    for(let i=0;i<this.excelData.length;i++){
      if(true){
        const fileInput = this.fileInput.nativeElement;
        const files: File[] = fileInput.files ? Array.from(fileInput.files) : [];

      this.emailService.sendEmail(files, this.excelData[i].Name, this.excelData[i].Email,[],
        "Thank you for visiting our booth at BENGALURU TECH SUMMIT 2023, Bengaluru, India!")
        .subscribe({
          next: (response) => {
            console.log('Email sent successfully:', response);
          },
          error: (error) => {
            console.error('Error sending email:', error);
          }
        });
      }
    }
  }

}
