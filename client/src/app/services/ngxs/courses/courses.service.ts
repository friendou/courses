import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  SaveCourse,
  RestoreCourse,
  SetBackupCourses,
  SetCourses,
  ChangeCourse,
  ChangeTextbook,
  RestoreTextbook
} from './courses.actions';
import { ICourse } from 'src/app/modules/courses/models/ICourses';
import { CoursesState } from './courses.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesStateService {
  @Select(CoursesState.courses) courses$: Observable<ICourse[]>;
  @Select(CoursesState.backupCourses) backupCourses$: Observable<ICourse[]>;

  constructor(private store: Store) {}

 saveCourse(course: ICourse) {
    this.store.dispatch(new SaveCourse(course));
  }

  changeCourse(course: ICourse, value: string, key: string) {
    this.store.dispatch(new ChangeCourse({course, value, key}));
  }

  restoreCourse(course: number) {
    this.store.dispatch(new RestoreCourse(course));
  }

  setCourses(courses: ICourse[]) {
    this.store.dispatch(new SetCourses(courses));
  }

  setBackupCourses(courses: ICourse[]) {
    this.store.dispatch(new SetBackupCourses(courses));
  }

  changeTextbook(courseId: number, author: string, value: string, key: string) {
    this.store.dispatch(new ChangeTextbook({courseId, author, value, key}));
  }

  restoreTextbook(courseId: number, index: number) {
    this.store.dispatch(new RestoreTextbook({courseId, index}));
  }
}
