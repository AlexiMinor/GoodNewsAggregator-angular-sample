import { Article } from './../../models/article';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-details-with-model',
  templateUrl: './article-details-with-model.component.html',
  styleUrls: ['./article-details-with-model.component.scss']
})
export class ArticleDetailsWithModelComponent implements OnInit {

  @Input() article?: Article;
  constructor() { }

  ngOnInit(): void {
  }

}
