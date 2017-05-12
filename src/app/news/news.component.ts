import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { News } from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
  
  news:News
  error:any

  constructor(
    private ServiceService: ServiceService
  ) { }

  ngOnInit() {
    this.ServiceService.getNews().subscribe(
      news => this.news = news,
      error => this.error = <any>error
    )
  }

}
