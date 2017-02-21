import { Component } from '@angular/core';


@Component({
  moduleId:module.id,
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
        <nav>
          <a routerLink="/weekly" routerLinkActive="active">Weekly</a>
          <a routerLink="/category" routerLinkActive="active">Categories</a>
        </nav>
        <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent  { title = 'To Do List Example'; }
