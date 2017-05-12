import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { News } from './news';

@Injectable()
export class ServiceService {
  private api:string;
  private token:string;

  constructor(
    private http: Http
  ) {
    this.api = 'https://newsapi.org/v1/articles?source=cnn&sortBy=top';
    this.token = 'bb652081e166447bb4857b339291e276';
  }

  getNews():Observable<News>{
    const url = `${this.api}&apiKey=${this.token}`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .get(url,{ headers: headers })
      .map(response => response.json() as News)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if
  }

}
