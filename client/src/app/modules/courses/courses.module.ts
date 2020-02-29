import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseEditorComponent } from './components/course-editor/course-editor.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CoursesComponent, CourseEditorComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class CoursesModule { }
