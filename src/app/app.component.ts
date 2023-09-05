import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  hidden = true

  ishidden(){
    this.hidden = !this.hidden
  }
}
  