import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Todos } from 'src/models/Todos';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  colunas: string[] = ['userId', 'id', 'title', 'status'];

  public todos: Array<Todos>;
  public dataSource;

  constructor(
    private todosService: TodosService
  ) { }

  public async ngOnInit(): Promise<void> {
    await this.executarServicos();
  }

  private async executarServicos(): Promise<void> {
    this.todos = await this.todosService.obterTodos();
    this.dataSource = new MatTableDataSource<Todos>(this.todos);
    this.dataSource.paginator = this.paginator;
  }
}
