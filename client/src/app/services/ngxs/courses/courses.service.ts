import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  SaveCourse,
  RestoreCourse,
  SetBackupCourses,
  SetCourses,
  ChangeCourse,
  ChangeTextbook,
  RestoreTextbook,
  AddCourse,
  CreateCourse,
  SaveTextbook,
  AddTextbook,
  RemoveTextbook,
  DeleteCourse
} from './courses.actions';
import { ICourse } from 'src/app/modules/courses/models/ICourses';
import { CoursesState } from './courses.state';
import { Observable } from 'rxjs';
import { ITextbook } from 'src/app/modules/courses/models/ITextbook';

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

  changeCourse(course: ICourse, value: string, key: string, index: number) {
    this.store.dispatch(new ChangeCourse({ course, value, key, index }));
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
    this.store.dispatch(new ChangeTextbook({ courseId, author, value, key }));
  }

  restoreTextbook(courseId: number, index: number) {
    this.store.dispatch(new RestoreTextbook({ courseId, index }));
  }

  addCourse() {
    this.store.dispatch(new AddCourse());
  }

  createCourse(course: ICourse) {
    this.store.dispatch(new CreateCourse(course));
  }

  saveTextbook(courseId: number, textbook: ITextbook, index: number) {
    this.store.dispatch(new SaveTextbook({ courseId, textbook, index }));
  }

  addTextbook(courseId: number) {
    this.store.dispatch(new AddTextbook(courseId));
  }

  removeTextbook(courseId: number, index: number) {
    this.store.dispatch(new RemoveTextbook({ courseId, index }));
  }

  deleteCourse(courseId: number) {
    this.store.dispatch(new DeleteCourse(courseId));
  }
}
