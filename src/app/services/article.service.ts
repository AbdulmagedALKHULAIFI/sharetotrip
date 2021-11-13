import { Injectable } from "@angular/core";


export class ArticleService {

  artilces = [

    {
      id: 1,
      image_src: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      image_src: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      image_src: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 4,
      image_src: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 5,
      image_src: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ]


  getArticles() { return this.artilces }
}
