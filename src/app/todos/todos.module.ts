import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { MatPaginatorModule, MatTableModule } from '@angular/material';


@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class TodosModule { }
