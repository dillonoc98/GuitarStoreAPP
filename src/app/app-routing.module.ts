import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from './create/create-guitar-component.component';
import { ReadGuitarsComponentComponent } from './read/read-guitars-component.component';
import { HomePageComponent } from 'src/app/home-page/home-page.component';
import { EditComponent } from './edit/edit.component';
//paths to components
const routes: Routes = [
  {
    path: 'read',
    component: ReadGuitarsComponentComponent
  },
  {
    path:'',
    component: HomePageComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path:'edit/:id',   //might need to be :id
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
