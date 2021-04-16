import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todos } from 'src/models/Todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private apiUrl: string;

  constructor(
    protected httpClient: HttpClient
  ) {
    this.apiUrl = environment.apiUrl;
   }

  public async obterTodos(): Promise<Array<Todos>> {
    const result = await this.httpClient.get<Array<Todos>>(`${this.apiUrl}/todos`).toPromise();
    return result;
  }
}
