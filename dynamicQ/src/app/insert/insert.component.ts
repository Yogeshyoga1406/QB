import { Component, Inject } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  
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
  
  constructor(){}
  excelData!: any[];

  onFileChange(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.readExcel(file)
      // .then((data: any[]) => {
      //   this.excelData = data;
      // });
    }
  }

 
}
 

