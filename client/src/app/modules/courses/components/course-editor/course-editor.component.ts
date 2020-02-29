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
    if (this.course.id === 0) {
      this.courseStateService.createCourse(this.course);
    } else {
      this.courseStateService.saveCourse(this.course);
    }
  }

  textChange(value: string, key: string) {
    this.courseStateService.changeCourse(this.course, value, key);
  }

  restoreCourse() {
    if (this.course.id !== 0) {
      this.courseStateService.restoreCourse(this.course.id);
    }
  }

  addTextbook() {
    this.courseStateService.addTextbook(this.course.id);
  }

  deleteCourse() {
    this.courseStateService.deleteCourse(this.course.id);
  }
}
