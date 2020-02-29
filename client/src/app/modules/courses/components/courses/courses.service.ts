import { Injectable } from '@angular/core';
import { ICourse } from '../../models/ICourses';
import { Observable, of } from 'rxjs';
import { cloneDeep } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courses: ICourse[] = [
    {
      id: 1,
      name: 'Introduction to advertising',
      description: 'Learn about advertising',
      textbooks: [
        {
          author: 'Joe Smith',
          title: 'Mobile advertising fundamentals'
        },
        {
          author: 'Eli Hinnegan',
          title: 'Introduction to Location-Based Advertising'
        },
        {
          author: 'Edward Bernays',
          title: 'Public Relations'
        }
      ]
    },
    {
      id: 2,
      name: 'Calculus',
      description: 'Learn about calculus',
      textbooks: [
        {
          author: 'Joe Smith',
          title: 'Calculus 1'
        },
        {
          author: 'Eli Hinnegan',
          title: 'Calculus for begginers'
        },
        {
          author: 'Edward Bernays',
          title: 'Introduction to calculus'
        }
      ]
    }
  ];

  constructor() {}

  getCourses(): Observable<ICourse[]> {
    const string = localStorage.getItem('a');
    const json = JSON.parse(string);
    this.courses = json;
    return of(json);
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
    var courses = cloneDeep(this.courses);
    const newCourse = cloneDeep(course)
    newCourse.id = this.courses.length;
    courses.push(newCourse);
    this.courses = courses;
    localStorage.setItem('a',JSON.stringify(this.courses))
    return of(course)
  }

}
