import { ApiService } from './api.service';
import { Article } from '../models/article';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private apiService: ApiService) { }

  getArticles(): Observable<Article[]> {
      return this.apiService.get('Articles').pipe();
  }

  // getArticle(id: string): Observable<Article> {
  //   const article = ARTICLES_COLLECTION.find(a=>a.id === id)!;
  //   return of(article);
  // }
}
