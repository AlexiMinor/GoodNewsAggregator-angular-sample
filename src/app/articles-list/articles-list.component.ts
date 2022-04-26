import { Article } from './../../models/article';
import { Component, OnInit } from '@angular/core';
// import { ARTICLES_COLLECTION } from 'src/models/articles_collection';
import { ArticlesService } from 'src/services/articles.service';
@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articlesService:ArticlesService) { }

  ngOnInit(): void {
    this.articlesService.getArticles()
      .subscribe(articles => this.articles = articles);
  }

}
