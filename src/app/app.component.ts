import {Component} from '@angular/core';
//import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-app',
  template: `


  <navbar></navbar>
  <!--
  <h1>{{title}}</h1>
  <nav class = "navbar navbar-inverse">
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
-->
  <router-outlet></router-outlet>
  <my-footer></my-footer>
`,
styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'AWOA';
  }
