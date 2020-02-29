import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbookEditorComponent } from './textbook-editor.component';

describe('TextbookEditorComponent', () => {
  let component: TextbookEditorComponent;
  let fixture: ComponentFixture<TextbookEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextbookEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbookEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
