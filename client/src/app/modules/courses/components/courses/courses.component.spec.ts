import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { CoursesStateService } from 'src/app/services/ngxs/courses/courses.service';
import { CoursesService } from './courses.service';
import { of } from 'rxjs';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let mockCourseStateService, mockCoursesService;

  beforeEach(async(() => {
    mockCourseStateService = jasmine.createSpyObj('CourseStateService', [
      'setCourses',
      'setBackupCourses',
      'addCourse'
    ]);

    mockCoursesService = jasmine.createSpyObj('CoursesService', [
      'getCourses'
    ])
    mockCoursesService.getCourses.and.returnValue(of([]))
    TestBed.configureTestingModule({
      declarations: [ CoursesComponent ],
      providers: [
        { provide: CoursesStateService, useValue:  mockCourseStateService },
        { provide: CoursesService, useValue: mockCoursesService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
