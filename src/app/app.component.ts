import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayPassword = true;
  counter = 0;
  clicks = [];
  
  onDisplayChange() {
    this.displayPassword = !this.displayPassword;
    this.clicks.push(this.counter++);
    console.log(this.clicks);
    
  }
}
