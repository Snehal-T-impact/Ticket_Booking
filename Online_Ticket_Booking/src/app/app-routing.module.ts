import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReusableComponent } from './reusable/reusable.component';

const routes: Routes = [
  // {path:'resuable',component:ReusableComponent},
  {path:'admin' ,loadChildren:()=>import ('./admin/admin.module').then(m=>m.AdminModule
  )}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
