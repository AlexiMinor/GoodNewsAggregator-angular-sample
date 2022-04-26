import { Article } from './../models/article';
import { ArticleDetailsWithModelComponent } from './article-details-with-model/article-details-with-model.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';

const routes: Routes = [
  {path: 'articles', component: ArticlesListComponent},
  {path: 'article/:id', component: ArticleDetailsComponent},
  {path: 'sp-article/:id', component: ArticleDetailsWithModelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
