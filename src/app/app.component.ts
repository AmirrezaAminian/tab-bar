import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { ModalService } from './services/modal.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
   
  constructor(public modal : ModalService){

  }


  openModal(){
    this.modal.toggleHidden()
  }
}
  