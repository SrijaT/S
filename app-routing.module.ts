import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';






const routes: Routes = [
  {
    path:'Booklists',
    component:BookListComponent
  },
 
  {path:'',
   redirectTo:'/Booklists',
   pathMatch:'full'},
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
