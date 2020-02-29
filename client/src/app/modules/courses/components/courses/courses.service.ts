import { Injectable } from '@angular/core';
import { ICourse } from '../../models/ICourses';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: ICourse[] = [
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
    return of(this.courses);
  }

  putCourse(course: ICourse): Observable<ICourse> {
    const index = this.courses.findIndex((c) => c.id === course.id);
    this.courses.splice(index, 1, course);
    return of(course);
  }

}
