import { Component, OnInit, TemplateRef, Input, Output, EventEmitter} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subject, Observable } from 'rxjs';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-comments-modal',
  templateUrl: './comments-modal.component.html',
  styleUrls: ['./comments-modal.component.css']
})
export class CommentsModalComponent implements OnInit {
  modalRef: BsModalRef;
  @Input()
  inputPostComment: Observable<any>;
  @Output() 
  onCommentClick: EventEmitter<any> = new EventEmitter();
  lengthComments: number;
  constructor(private modalService: BsModalService) {}

  CountOfComments(countComments: number) {
    this.lengthComments = countComments;
  }

  ngOnInit() {}

  openModal(template: TemplateRef<any>) {
    this.onCommentClick.emit(null);
    this.modalRef = this.modalService.show(template);
  }
}
