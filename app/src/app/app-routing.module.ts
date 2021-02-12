import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { AppaComponent, DefaultText } from './app.component';


const routes: Routes = [
  {
    path:'todo', component: TodoListComponent,
  },
  {
    path:'home', component: AppaComponent,
  },
  {
    path:'', component: DefaultText,
  }
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
