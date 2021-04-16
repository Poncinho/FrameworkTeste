import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Album } from 'src/models/Album';
import { AlbunsService } from './albuns.service';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {

  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  colunas: string[] = ['userId', 'id', 'title'];

  public albuns: Array<Album>;
  public dataSource;

  constructor(
    private albunsService: AlbunsService
  ) { }

  public async ngOnInit(): Promise<void> {
    await this.executarServicos();
  }

  private async executarServicos(): Promise<void> {
    this.albuns = await this.albunsService.obterAlbuns();
    this.dataSource = new MatTableDataSource<Album>(this.albuns);
    this.dataSource.paginator = this.paginator;
  }
}
