import { Injectable } from '@angular/core';
import { ICourse } from '../../models/ICourses';
import { Observable } from 'rxjs';
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
    return this.client.put<ICourse>(`${environment.serverUrl}${this.resource}/${course.id}`, course);
  }

  postCourse(course: ICourse): Observable<ICourse> {
    return this.client.post<ICourse>(`${environment.serverUrl}${this.resource}`, course);
  }

  deleteCourse(courseId: number): Observable<ICourse> {
    return this.client.delete<ICourse>(`${environment.serverUrl}${this.resource}/${courseId}`);
  }
}
