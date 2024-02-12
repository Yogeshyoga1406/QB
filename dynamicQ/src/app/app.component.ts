import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '📰 dynamicQ';
  navBackgroundDark:boolean=false;
  changeBg(){
    
    if(this.navBackgroundDark){
      this.navBackgroundDark=false;
    }
    else{
      this.navBackgroundDark=true;
    }
  }
}
