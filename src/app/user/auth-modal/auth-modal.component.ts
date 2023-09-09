import { Component , EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent   implements OnInit{

  constructor(public modal : ModalService){

  }

  ngOnInit(): void {
    this.modal.register('auth')
    this.modal.register('test')
  }
   
 


}
