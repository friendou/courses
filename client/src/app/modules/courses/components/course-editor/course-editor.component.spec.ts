import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditorComponent } from './course-editor.component';
import { CoursesStateService } from 'src/app/services/ngxs/courses/courses.service';

describe('CourseEditorComponent', () => {
  let component: CourseEditorComponent;
  let fixture: ComponentFixture<CourseEditorComponent>;
  let mockCourseStateService;
  let testCourse = {
    name: 'name',
    description: 'description',
    id: 1,
    textbooks: []
  };
  let testIndex = 0;
  beforeEach(async(() => {
    mockCourseStateService = jasmine.createSpyObj('CourseStateService', [
      'saveCourse',
      'createCourse',
      'changeCourse',
      'restoreCourse',
      'addTextbook',
      'deleteCourse'
    ]);
    TestBed.configureTestingModule({
      declarations: [ CourseEditorComponent ],
      providers: [
        { provide: CoursesStateService, useValue: mockCourseStateService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditorComponent);
    component = fixture.componentInstance;
    component.course = testCourse;
    component.index = testIndex;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call CourseStateService changeCourse when function textChanged is called', () => {
    const testKey = 'key';
    const testValue = 'value';
    component.textChange(testValue, testKey);

    expect(mockCourseStateService.changeCourse).toHaveBeenCalledWith(testCourse, testValue, testKey, testIndex);
  });

  it('should call CourseStateService restoreCourse when function restoreCourse is called with courseId different than 0', () => {
    component.restoreCourse();

    expect(mockCourseStateService.restoreCourse).toHaveBeenCalledWith(testCourse.id);
  });

  it('should not call CourseStateService restoreCourse when function restoreCourse is called with courseId equal to 0', () => {
    component.course = {...testCourse, id: 0};
    fixture.detectChanges()

    component.restoreCourse();

    expect(mockCourseStateService.restoreCourse).not.toHaveBeenCalled();
  });

  it('should call CourseStateService deleteCourse when function deleteCourse is called', () => {
    component.deleteCourse();

    expect(mockCourseStateService.deleteCourse).toHaveBeenCalledWith(testCourse.id);
  });

  it('should call CourseStateService saveCourse when function saveCourse is called with courseId different than 0', () => {
    component.saveCourse();

    expect(mockCourseStateService.saveCourse).toHaveBeenCalledWith(testCourse);
  });

  it('should call CourseStateService createCourse when function saveCourse is called with courseId equal to 0', () => {
    const course = {...testCourse, id: 0};
    component.course = course;
    fixture.detectChanges()

    component.saveCourse();

    expect(mockCourseStateService.createCourse).toHaveBeenCalledWith(course);
  });
});
