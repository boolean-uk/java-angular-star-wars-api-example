import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './people/add/add.component';
import { ListComponent } from './people/list/list.component';

const routes: Routes = [
  {
    path: "people",
    component: ListComponent,
  },
  {
    path: "people/add",
    component: AddComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
