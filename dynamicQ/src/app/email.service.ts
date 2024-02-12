import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TemplateComponent } from './template/template.component';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  dynamicData = 'World'; // Example dynamic data
  htmlTemplate: string = `
  <div>
  <div style="text-align: center;">
    <img style="height: 50px; max-width: 70%; border-radius: 15px 0px 15px 0px; padding: 5px; display: inline-block;" 
    src="cid:logo.png" alt="Logo">
  </div>
  <div style="margin-left: 30px;">
    <h4>Dear {{ dynamicData }},</h4>
    <p>
      We would like to thank you for spending your time visiting our booth at <b>BENGALURU TECH SUMMIT</b> 2023, held in Bengaluru. It was our pleasure
       and honour as we enjoyed many inspiring conversations. <br><br>
      The exhibition was a great success for <b>Suktha Business Solutions</b> Bengaluru and gave us the opportunity to showcase all our successful product
       portfolio and new additions, which generated a great interest. <br><br>
       Thanks for providing some time talking to us at the demo booth, we are happy to connect online at your convenience to discuss further on the 
       requirement and see how we can be part of your digital transformation journey. <br><br>
       Attached our product brochure for your quick reference.
    </p>
    <span>
      If you have further inquiries or in case you want more information about our products, 
      please feel free to contact us at: <br>
      <span>
        Phone No : +91-9513997444 <br>
        Suport No : +91-7022389272 <br>
        Support Email : support@suktha.com <br>
        Demo Email : demo@suktha.com
        </span>
      <br><br>
      <div style="text-align: center;">
        <img style="height: 100px; max-width: 90%; border-radius: 15px 0px 15px 0px; padding: 5px; display: inline-block;" 
        src="cid:suktha.png" alt="Logo">
      </div>
      Best Regards,<br>
      Santhosh V <br>
      Director and CEO <br>
      Suktha Solutions Pvt Ltd
      <br><br>
      To learn more about Suktha. Click the 
      <a href="https://suktha.com/">link</a>
      <br>
      Social Connects: 
      <a href=" https://www.facebook.com/sukthasolutions/">Facebook</a> | <a href="https://www.linkedin.com/company/sukthasolutions/">LinkedIn</a>

    </span>
      
  </div><br>
  <h3 style="text-align: center; color: rgb(88, 90, 88);" >Thank you...</h3>
  </div><br>
  <div style="display: flex; justify-content: center; color: rgb(123, 124, 123);">
      
  </div>
  `;

  private apiUrl = 'http://localhost:8080/mail';

  constructor(private http: HttpClient) { }

  sendEmail(file: File[], name:string , to: string, cc: string[], subject: string): Observable<any> {
    const formData: FormData = new FormData();
    
    if (file) {
      for (let i = 0; i < file.length; i++) {
        formData.append('file', file[i], file[i].name);
      }
    }

    formData.append('to', to);
    if (cc) {
      formData.append('cc', JSON.stringify(cc));
    }
    formData.append('subject', subject);
    const headers = new HttpHeaders().set('Content-Type', 'text/html');

    // Interpolate dynamic data into the HTML template
    const interpolatedTemplate = this.htmlTemplate.replace('{{ dynamicData }}', name);
    console.log(interpolatedTemplate);
    
    formData.append('body',interpolatedTemplate)

    return this.http.post(`${this.apiUrl}/send`, formData, { responseType: 'text' });
    
  }
 
}
