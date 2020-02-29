import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseEditorComponent } from './components/course-editor/course-editor.component';

@NgModule({
  declarations: [CoursesComponent, CourseEditorComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
