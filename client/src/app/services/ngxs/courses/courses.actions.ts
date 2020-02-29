import { ICourse } from 'src/app/modules/courses/models/ICourses';

export class SaveCourse {
  static readonly type = '[Courses] Save';
  constructor(public payload: ICourse) { }
}

export class ChangeCourse {
  static readonly type = '[Courses] Change';
  constructor(public payload: {course: ICourse, value: string, key: string}) { }
}

export class SaveTextbox {
  static readonly type = '[Textbook] Change';
  constructor(public payload: ICourse) { }
}

export class ChangeTextbook {
  static readonly type = '[Textbook] Change';
  constructor(public payload: {courseId: number, author: string, value: string, key: string}) { }
}

export class RestoreCourse {
  static readonly type = '[Courses] Restore';
  constructor(public payload: ICourse) { }
}

export class RestoreTextbook {
  static readonly type = '[Textbook] Restore';
  constructor(public payload: {courseId: number, author: string}) { }
}

export class RestoreTextbox {
  static readonly type = '[Textbook] Restore';
  constructor(public payload: ICourse) { }
}

export class SetCourses {
  static readonly type = '[Courses] Set Courses';
  constructor(public payload: ICourse[]) { }
}

export class SetBackupCourses {
  static readonly type = '[Courses] Set Backup Courses';
  constructor(public payload: ICourse[]) { }
}
