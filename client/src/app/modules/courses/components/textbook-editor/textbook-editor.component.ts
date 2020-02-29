import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ITextbook } from '../../models/ITextbook';
import { CoursesStateService } from 'src/app/services/ngxs/courses/courses.service';

@Component({
  selector: 'app-textbook-editor',
  templateUrl: './textbook-editor.component.html',
  styleUrls: ['./textbook-editor.component.scss']
})
export class TextbookEditorComponent implements OnInit {

  @Input() textbook: ITextbook;
  @Input() index: number;
  @Input() courseId: number;

  constructor(private courseStateService: CoursesStateService) { }

  ngOnInit(): void {
  }

  textChange(value: string, key: string) {
    this.courseStateService.changeTextbook(this.courseId, this.textbook.author, value, key);
  }

  saveTextbook() {
    // this.courseStateService.saveTextbook();
  }

  discardChangesToTextbook() {
    this.courseStateService.restoreTextbook(this.courseId, this.index);
  }

}
