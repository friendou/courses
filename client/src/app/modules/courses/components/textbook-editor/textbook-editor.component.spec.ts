import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbookEditorComponent } from './textbook-editor.component';
import { CoursesStateService } from 'src/app/services/ngxs/courses/courses.service';

describe('TextbookEditorComponent', () => {
  let component: TextbookEditorComponent;
  let fixture: ComponentFixture<TextbookEditorComponent>;
  let mockCourseStateService;
  let testTextbook = {
    author: 'name',
    title: 'description'
  };
  let testId = 1;
  let testIndex = 1;
  beforeEach(async(() => {
    mockCourseStateService = jasmine.createSpyObj('CourseStateService', [
      'changeTextbook',
      'saveTextbook',
      'restoreTextbook',
      'removeTextbook'
    ]);
    TestBed.configureTestingModule({
      declarations: [ TextbookEditorComponent ],
      providers: [
        { provide: CoursesStateService, useValue: mockCourseStateService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbookEditorComponent);
    component = fixture.componentInstance;
    component.textbook = testTextbook;
    component.courseId = testId;
    component.index = testIndex;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call CourseStateService changeTextbook when function textChanged is called', () => {
    const testKey = 'key';
    const testValue = 'value';
    component.textChange(testValue, testKey);

    expect(mockCourseStateService.changeTextbook).toHaveBeenCalledWith(testId, testTextbook.author, testValue, testKey);
  });

  it('should call CourseStateService saveTextbook when function saveTextbook is called', () => {
    component.saveTextbook();

    expect(mockCourseStateService.saveTextbook).toHaveBeenCalledWith(testId, testTextbook, testIndex);
  });

  it('should not call CourseStateService restoreTextbook when function discardChangesToTextbook is called', () => {
    fixture.detectChanges()

    component.discardChangesToTextbook();

    expect(mockCourseStateService.restoreCourse).toHaveBeenCalledWith(testId, testIndex);
  });

  it('should call CourseStateService removeTextbook when function deleteTextbook is called', () => {
    component.deleteTextbook();

    expect(mockCourseStateService.removeTextbook).toHaveBeenCalledWith(testId, testIndex);
  });
});
