import { Component , EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnChanges {
   
   @Input() authHidden: boolean = false;

   @Output() authHiddenChange = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.authHidden);
  }


  authHide(){
    this.authHidden = !this.authHidden;
    this.authHiddenChange.emit(this.authHidden) ;
  }


  authHide2(){
    
  }



}
