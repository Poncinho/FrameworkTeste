import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbunsComponent } from './albuns/albuns.component';
import { PostagensComponent } from './postagens/postagens.component';
import { TodosComponent } from './todos/todos.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'postagens',
    pathMatch: 'full',
  },
  {
    path: 'postagens',
    loadChildren: './postagens/postagens.module#PostagensModule'
  },
  {
    path: 'albuns',
    loadChildren: './albuns/albuns.module#AlbunsModule'
  },
  {
    path: 'todos',
    loadChildren: './todos/todos.module#TodosModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
