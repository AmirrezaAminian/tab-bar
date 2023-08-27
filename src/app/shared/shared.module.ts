import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    TabComponent,
    TabContainerComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
  ],
  exports : [
    TabComponent ,
    TabContainerComponent ,
    ModalComponent
  ]
})
export class SharedModule { }
