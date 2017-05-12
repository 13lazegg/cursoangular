import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  title:string;
  content:string;

  constructor() {
    this.title = 'Latest News';
    this.content = "Welcome to the section of the CNN'S latest news";
   }

  ngOnInit() {
  }

}
