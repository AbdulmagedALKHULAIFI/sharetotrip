import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelerComponent } from './traveler/traveler.component';
import { ArticleComponent } from './article/article.component';
import { AuthComponent } from './auth/auth.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesViewComponent } from './articles-view/articles-view.component';
import { ArticleService } from './services/article.service';
import { MdCardModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'articles', component: ArticlesViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TravelerComponent,
    ArticleComponent,
    AuthComponent,
    ArticlesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    MdCardModule,
    BrowserAnimationsModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
