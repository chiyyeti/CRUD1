import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:'',redirectTo:'assign',pathMatch:'full'},
  {path:'update/:i',component:UpdateComponent},
  {path:"assign",component:AssignmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
