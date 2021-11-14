import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelerComponent } from './traveler/traveler.component';
import { ArticleComponent } from './article/article.component';
import { AuthComponent } from './auth/auth.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesViewComponent } from './articles-view/articles-view.component';
import { ArticleService } from './services/article.service';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    MatSliderModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


