import { Injectable } from '@angular/core';
import { ICourse } from '../../models/ICourses';
import { Observable, of } from 'rxjs';
import { cloneDeep } from 'lodash';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses = [];
  private resource = 'course';
  constructor(private client: HttpClient) {}

  getCourses(): Observable<ICourse[]> {
    return this.client.get<ICourse[]>(`${environment.serverUrl}${this.resource}`);
  }

  putCourse(course: ICourse): Observable<ICourse> {
    const index = this.courses.findIndex((c) => c.id === course.id);
    const courses = cloneDeep(this.courses);
    courses[index] = course;
    this.courses = courses;
    localStorage.setItem('a',JSON.stringify(this.courses))
    return of(course);
  }

  postCourse(course: ICourse): Observable<ICourse> {
    const courses = cloneDeep(this.courses);
    const newCourse = cloneDeep(course)
    newCourse.id = this.courses.length + 1;
    courses.push(newCourse);
    this.courses = courses;
    localStorage.setItem('a',JSON.stringify(this.courses))
    return of(course)
  }

  deleteCourse(courseId: number): Observable<ICourse> {
    const courses = cloneDeep(this.courses);
    const courseIndex = courses.findIndex(c => c.id === courseId);

    const deletedCourse = courses.splice(courseIndex, 1);

    this.courses = courses;
    localStorage.setItem('a',JSON.stringify(this.courses))
    return of(this.deleteCourse[0]);
  }
}
