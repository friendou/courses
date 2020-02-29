import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  SaveCourse,
  RestoreCourse,
  SetBackupCourses,
  SetCourses,
  ChangeCourse,
  ChangeTextbook
} from './courses.actions';
import { ICourse } from 'src/app/modules/courses/models/ICourses';
import { CoursesState } from './courses.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesStateService {
  @Select(CoursesState.courses) public courses$: Observable<ICourse[]>;
  @Select(CoursesState.backupCourses) public backupCourses$: Observable<ICourse[]>;

  constructor(private store: Store) {}

  public saveCourse(course: ICourse) {
    this.store.dispatch(new SaveCourse(course));
  }

  public changeCourse(course: ICourse, value: string, key: string) {
    this.store.dispatch(new ChangeCourse({course, value, key}));
  }

  public restoreCourse(course: ICourse) {
    this.store.dispatch(new RestoreCourse(course));
  }

  public setCourses(courses: ICourse[]) {
    this.store.dispatch(new SetCourses(courses));
  }

  public setBackupCourses(courses: ICourse[]) {
    this.store.dispatch(new SetBackupCourses(courses));
  }

  public changeTextbook(courseId: number, author: string, value: string, key: string) {
    this.store.dispatch(new ChangeTextbook({courseId, author, value, key}));
  }
}
