import { ICourse } from '../../../modules/courses/models/ICourses';
import { ITextbook } from '../../../modules/courses/models/ITextbook';

export class SaveCourse {
  static readonly type = '[Courses] Save';
  constructor(public payload: ICourse) { }
}

export class ChangeCourse {
  static readonly type = '[Courses] Change';
  constructor(public payload: {course: ICourse, value: string, key: string}) { }
}

export class SaveTextbook {
  static readonly type = '[Textbook] Save';
  constructor(public payload: {courseId: number, textbook: ITextbook, index: number}) { }
}

export class ChangeTextbook {
  static readonly type = '[Textbook] Change';
  constructor(public payload: {courseId: number, author: string, value: string, key: string}) { }
}

export class RestoreCourse {
  static readonly type = '[Courses] Restore';
  constructor(public payload: number) { }
}

export class RestoreTextbook {
  static readonly type = '[Textbook] Restore';
  constructor(public payload: {courseId: number, index: number}) { }
}

export class SetCourses {
  static readonly type = '[Courses] Set Courses';
  constructor(public payload: ICourse[]) { }
}

export class SetBackupCourses {
  static readonly type = '[Courses] Set Backup Courses';
  constructor(public payload: ICourse[]) { }
}

export class AddCourse {
  static readonly type = '[Courses] Add';
}

export class CreateCourse {
  static readonly type = '[Courses] Create';
  constructor(public payload: ICourse) { }
}

export class AddTextbook {
  static readonly type = '[Textbook] Add';
  constructor(public payload: number) { }
}

export class RemoveTextbook {
  static readonly type = '[Textbook] Remove';
  constructor(public payload: {courseId: number, index: number}) { }
}

export class DeleteCourse {
  static readonly type = '[Courses] Delete';
  constructor(public payload: number) { }
}
