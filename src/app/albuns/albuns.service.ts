import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Album } from 'src/models/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbunsService {

  private apiUrl: string;

  constructor(
    protected httpClient: HttpClient
  ) {
    this.apiUrl = environment.apiUrl;
   }

  public async obterAlbuns(): Promise<Array<Album>> {
    const result = await this.httpClient.get<Array<Album>>(`${this.apiUrl}/albums`).toPromise();
    return result;
  }
}
