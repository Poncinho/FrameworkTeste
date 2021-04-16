import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbunsComponent } from './albuns.component';


const routes: Routes = [
  {path: '', component: AlbunsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbunsRoutingModule { }
