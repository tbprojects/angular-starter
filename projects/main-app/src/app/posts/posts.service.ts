import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '@api/types/post';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.apiUrl + '/posts');
  }
}
