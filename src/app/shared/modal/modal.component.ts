import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnChanges {
  @Input() ModalHide = false;

  @Output() modalHideChange = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.ModalHide);
  }

  modalBinder() {
    this.ModalHide = !this.ModalHide;
    this.modalHideChange.emit(this.ModalHide);
  }
}
