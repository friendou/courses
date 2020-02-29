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
    }
  ];

  constructor() {}

  getCourses(): Observable<ICourse[]> {
    return of(this.courses);
  }

}
