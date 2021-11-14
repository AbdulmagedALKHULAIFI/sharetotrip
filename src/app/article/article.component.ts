import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() articleTitle: string | undefined;
  @Input() articleDescription: string | undefined;
  @Input() articlePrincipaleImage: string | undefined;
  @Input() id!: number;


  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

}
