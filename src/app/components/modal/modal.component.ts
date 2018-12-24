import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;

  ngOnInit() {
  }

  onSaveBook(bookForm: NgForm): void {
    console.log(bookForm.value);
    if (bookForm.value.id === null) {
      // new
      bookForm.value.userUid = this.userUid;
      this.dataApi.addBook(bookForm.value);
    } else {
      // update
      this.dataApi.updateBook(bookForm.value);
    }
    this.onResetForm(bookForm);
    this.btnClose.nativeElement.click();
  }

  onResetForm(bookForm: NgForm): void {
    bookForm.resetForm();
  }

}
