import { Injectable } from "@angular/core";


export class ArticleService {

  artilces = [

    {
      id: 1,
      articleTitle: 'Trip to Maldive',
      articlePrincipaleImage: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg',
      articleDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      articleTitle: 'Trip to Maldive',
      articlePrincipaleImage: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg',
      articleDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      articleTitle: 'Trip to Maldive',
      articlePrincipaleImage: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg',
      articleDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 4,
      articleTitle: 'Trip to Maldive',
      articlePrincipaleImage: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg',
      articleDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 5,
      articleTitle: 'Trip to Maldive',
      articlePrincipaleImage: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg',
      articleDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 6,
      articleTitle: 'Trip to Maldive',
      articlePrincipaleImage: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg',
      articleDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    }    
  ]


  getArticles() { return this.artilces }
}
