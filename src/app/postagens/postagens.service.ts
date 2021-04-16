import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Postagem } from 'src/models/Postagem';

@Injectable({
  providedIn: 'root'
})

export class PostagensService {

  private apiUrl: string;

  constructor(
    protected httpClient: HttpClient
  ) {
    this.apiUrl = environment.apiUrl;
   }

  public async obterPostagens(): Promise<Array<Postagem>> {
    const result = await this.httpClient.get<Array<Postagem>>(`${this.apiUrl}/posts`).toPromise();
    return result;
  }
}
