import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleDetailsWithModelComponent } from './article-details-with-model/article-details-with-model.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArticlePreviewComponent,
    ArticlesListComponent,
    MessagesComponent,
    ArticleDetailsComponent,
    ArticleDetailsWithModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
