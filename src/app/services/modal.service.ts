import { Injectable } from '@angular/core';

interface IModal {
  id:string ;
  visible : boolean
}


@Injectable({
  providedIn: 'root'
})


export class ModalService {

  private modals : IModal[] = [] ;

  hidden = false ; 

  constructor() { }

   register(id : string){
      this.modals.push({ 
        id , 
        visible : false
      })
   }


  isHidden(){
    return this.hidden;
  }


  toggleHidden(){
    this.hidden = !this.hidden
  }
}
