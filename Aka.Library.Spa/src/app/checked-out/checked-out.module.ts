import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckedOutBooksComponent } from './checked-out-books/checked-out-books.component';
import { LibraryMatModule } from '../library-mat.module';
import { CheckedOutRoutingModule } from './checked-out-routing.module';
import { PreviousCheckedComponent } from './previous-checked/previous-checked.component';

@NgModule({
  declarations: [
    CheckedOutBooksComponent,
    PreviousCheckedComponent
  ],
  imports: [
    CommonModule,
    CheckedOutRoutingModule,
    LibraryMatModule
  ]
})
export class CheckedOutModule { }
