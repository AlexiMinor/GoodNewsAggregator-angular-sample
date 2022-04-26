import { MessagesService } from 'src/services/messages.service';
import { Article } from './../../models/article';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article?: Article;
   constructor(private mesagesService: MessagesService, private router: Router) { }

  ngOnInit(): void {
  }

  onClick(article:Article){
    this.mesagesService.add(`Selected article id=${article.id}`);
  }

  navigate(article:Article){
    this.router.navigate([`sp-article/${article.id}`, { article: article}]);
  }
}
