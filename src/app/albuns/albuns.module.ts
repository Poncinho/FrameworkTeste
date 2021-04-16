import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbunsRoutingModule } from './albuns-routing.module';
import { AlbunsComponent } from './albuns.component';
import { MatPaginatorModule, MatTableModule } from '@angular/material';


@NgModule({
  declarations: [AlbunsComponent],
  imports: [
    CommonModule,
    AlbunsRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class AlbunsModule { }
