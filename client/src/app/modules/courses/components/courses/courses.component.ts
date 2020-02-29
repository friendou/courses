import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { ICourse } from '../../models/ICourses';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<ICourse[]>;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses$ = this.coursesService.getCourses();
  }

}
