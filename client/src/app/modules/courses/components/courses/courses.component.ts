import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { ICourse } from '../../models/ICourses';
import { Observable, } from 'rxjs';
import { CoursesStateService } from 'src/app/services/ngxs/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<ICourse[]>;

  constructor(
    private coursesService: CoursesService,
    private coursesStateService: CoursesStateService
  ) { }

  ngOnInit(): void {
    this.coursesService.getCourses()
      .subscribe((data) => {
        this.coursesStateService.setCourses(data);
        this.coursesStateService.setBackupCourses(data);
      });

    this.courses$ = this.coursesStateService.courses$;
    this.coursesStateService.courses$.subscribe(d => console.log(d));
  }

  addCourse() {
    this.coursesStateService.addCourse();
  }
}
