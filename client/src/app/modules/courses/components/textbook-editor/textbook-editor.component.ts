import { Component, Input } from '@angular/core';
import { ITextbook } from '../../models/ITextbook';
import { CoursesStateService } from 'src/app/services/ngxs/courses/courses.service';

@Component({
  selector: 'app-textbook-editor',
  templateUrl: './textbook-editor.component.html',
  styleUrls: ['./textbook-editor.component.scss']
})
export class TextbookEditorComponent {

  @Input() textbook: ITextbook;
  @Input() index: number;
  @Input() courseId: number;

  constructor(private courseStateService: CoursesStateService) { }

  textChange(value: string, key: string) {
    this.courseStateService.changeTextbook(this.courseId, this.textbook.author, value, key);
  }

  saveTextbook() {
    this.courseStateService.saveTextbook(this.courseId, this.textbook, this.index);
  }

  discardChangesToTextbook() {
    this.courseStateService.restoreTextbook(this.courseId, this.index);
  }

  deleteTextbook() {
    this.courseStateService.removeTextbook(this.courseId, this.index);
  }

}
