import { State, Action, StateContext, Selector, ofActionCompleted } from '@ngxs/store';
import * as CourseActions from './courses.actions';
import { ICourse } from 'src/app/modules/courses/models/ICourses';
import { CoursesService } from 'src/app/modules/courses/components/courses/courses.service';
import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';
import { take } from 'rxjs/operators';

export interface ICoursesState {
  courses: ICourse[];
  backupCourses: ICourse[];
}

export const initialState: ICoursesState = {
  courses: [],
  backupCourses: []
};

@State<ICoursesState>({
  name: 'courses',
  defaults: initialState
})
@Injectable()
export class CoursesState {

  @Selector()
  static courses(state: ICoursesState) {
    return state.courses;
  }

  @Selector()
  static backupCourses(state: ICoursesState) {
    return state.backupCourses;
  }

  constructor(private coursesService: CoursesService) {
  }

  @Action(CourseActions.SaveCourse)
  private SaveCourse({ getState, patchState }: StateContext<ICoursesState>, action: CourseActions.SaveCourse) {
    const state = getState();
    const changedCourse = action.payload;
    const coursePosition = state.courses.findIndex((course) => course.id === changedCourse.id);
    this.coursesService.putCourse(state.courses[coursePosition]);
  }

  @Action(CourseActions.RestoreCourse)
  private RestoreCourse({ getState, patchState }: StateContext<ICoursesState>, action: CourseActions.RestoreCourse) {
    const state = getState();
    const courseId = action.payload;
    const backupCourses = state.backupCourses;
    const courses = cloneDeep(state.courses);
    const courseToRestore = backupCourses.find((c) => c.id === courseId);

    const coursePosition = courses.findIndex((c) => c.id === courseId);
    courses[coursePosition] = courseToRestore;
    patchState({courses});
  }

  @Action(CourseActions.RestoreTextbook)
  private RestoreTextbook({ getState, patchState }: StateContext<ICoursesState>, action: CourseActions.RestoreTextbook) {
    const state = getState();
    const { courseId, index } = action.payload;
    const backupCourses = state.backupCourses;
    const courses = cloneDeep(state.courses);
    const backupCourse = backupCourses.find((c) => c.id === courseId);
    const textbookToRestore = backupCourse.textbooks[index];
    const coursePosition = courses.findIndex((c) => c.id === courseId);
    courses[coursePosition].textbooks[index] = textbookToRestore;
    patchState({courses});
  }

  @Action(CourseActions.SetCourses)
  private SetCourses({ getState, patchState }: StateContext<ICoursesState>, action: CourseActions.SetCourses) {
    patchState({courses: action.payload});
  }

  @Action(CourseActions.SetBackupCourses)
  private SetBackupCourses({ patchState }: StateContext<ICoursesState>, action: CourseActions.SetBackupCourses) {
    patchState({backupCourses: action.payload});
  }

  @Action(CourseActions.ChangeCourse)
  private ChangeCourse({ getState, patchState }: StateContext<ICoursesState>, action: CourseActions.ChangeCourse) {
    const state = getState();
    const { course, value, key } = action.payload;
    const coursePosition = state.courses.findIndex((c) => c.id === course.id);
    const newCourse = {...course, [key]: value};
    const newState: ICourse[] = cloneDeep(state.courses);
    newState[coursePosition] =  newCourse;
    patchState({courses: newState});
  }

  @Action(CourseActions.ChangeTextbook)
  private ChangeTextbook({ getState, patchState }: StateContext<ICoursesState>, action: CourseActions.ChangeTextbook) {
    const state = getState();
    const { courseId, author, value, key } = action.payload;
    const coursePosition = state.courses.findIndex((c) => c.id === courseId);
    const course = state.courses.find((c) => c.id === courseId);
    const newCourse: ICourse = cloneDeep(course);
    const tbIndex = newCourse.textbooks.findIndex((tb) => tb.author === author);
    const aux = newCourse.textbooks.find((tb) => tb.author === author);
    const tbValue = { ...aux, [key]: value};
    newCourse.textbooks[tbIndex] = tbValue;
    const newState: ICourse[] = cloneDeep(state.courses);
    newState[coursePosition] =  newCourse;
    patchState({courses: newState});
  }

  @Action(CourseActions.AddCourse)
  private AddCourse({ getState, patchState }: StateContext<ICoursesState>) {
    const state = getState();
    const newCourse: ICourse = {
      id: 0,
      description: '',
      name: '',
      textbooks: [{
        author: '',
        title: ''
      }]
    } 
    const courses = cloneDeep(state.courses);
    courses.push(newCourse);

    patchState({courses});
  }

  @Action(CourseActions.CreateCourse)
  private CreateCourse({ getState, patchState }: StateContext<ICoursesState>, action: CourseActions.CreateCourse) {
    const state = getState();
    const courses = cloneDeep(state.courses);
    const newCourse = action.payload;
    this.coursesService.postCourse(newCourse).pipe(take(1)).subscribe((course) => {
      courses.push(course)
      patchState({courses});
    });
  }
}
