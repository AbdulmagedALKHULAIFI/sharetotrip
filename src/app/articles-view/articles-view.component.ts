import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';


@Component({
  selector: 'app-articles-view',
  templateUrl: './articles-view.component.html',
  styleUrls: ['./articles-view.component.scss']
})
export class ArticlesViewComponent implements OnInit {
  articles: any[] | undefined;
  gridColumns = 3;

  constructor(private articleservice: ArticleService) {
  }

  ngOnInit(): void {
    this.articles = this.articleservice.artilces;
  }

}
