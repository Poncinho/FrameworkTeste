import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostagensRoutingModule } from './postagens-routing.module';
import { PostagensComponent } from './postagens.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule, MatTableModule } from '@angular/material';


@NgModule({
  declarations: [PostagensComponent],
  imports: [
    CommonModule,
    PostagensRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class PostagensModule { }
