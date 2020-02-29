import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from '../../models/ICourses';
import { CoursesStateService } from 'src/app/services/ngxs/courses/courses.service';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.scss']
})
export class CourseEditorComponent implements OnInit {

  @Input() course: ICourse;
  constructor(
    private courseStateService: CoursesStateService
  ) { }

  ngOnInit(): void {
  }

  saveCourse() {
    this.courseStateService.saveCourse(this.course);
  }

  textChange(value: string, key: string) {
    this.courseStateService.changeCourse(this.course, value, key);
  }

  restoreCourse() {
    this.courseStateService.restoreCourse(this.course.id);
  }
}
