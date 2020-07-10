import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  Output,
  EventEmitter
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-likes-modal',
  templateUrl: './likes-modal.component.html',
  styleUrls: ['./likes-modal.component.css']
})
export class LikesModalComponent implements OnInit {
  modalRef: BsModalRef;
  @Input()
  inputPostLike: Observable<any>;
  @Output()
  onLikeClick = new EventEmitter();
  countOfLikes: number;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  GetCountLikes(countLikes: number) {
    this.countOfLikes = countLikes;
  }

  openModal(template: TemplateRef<any>) {
    this.onLikeClick.emit();
    this.modalRef = this.modalService.show(template);
  }
}
