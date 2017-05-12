import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  brand:string = 'http://i.cdn.cnn.com/cnn/.e/img/3.0/global/misc/apple-touch-icon.png';

  constructor() { }

  ngOnInit() {
  }

}
