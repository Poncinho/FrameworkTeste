import { Component, OnInit, ViewChild } from '@angular/core';
import { Postagem } from 'src/models/Postagem';
import { PostagensService } from './postagens.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {

  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  colunas: string[] = ['userId', 'id', 'title', 'body'];

  public postagens: Array<Postagem>;
  public dataSource;

  constructor(
    private postagensService: PostagensService
  ) { }

  public async ngOnInit(): Promise<void> {
    await this.executarServicos();
  }

  private async executarServicos(): Promise<void> {
    this.postagens = await this.postagensService.obterPostagens();
    this.dataSource = new MatTableDataSource<Postagem>(this.postagens);
    this.dataSource.paginator = this.paginator;
  }
}
