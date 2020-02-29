import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from '../../models/ICourses';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.scss']
})
export class CourseEditorComponent implements OnInit {

  @Input() course: ICourse;

  constructor() { }

  ngOnInit(): void {
  }

}
