import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckedOutBooksComponent } from './checked-out-books/checked-out-books.component';
import { PreviousCheckedComponent } from './previous-checked/previous-checked.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CheckedOutBooksComponent },
  { path: 'history', component: PreviousCheckedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckedOutRoutingModule { }
