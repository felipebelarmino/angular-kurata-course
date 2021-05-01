import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class="column">
      <a class="navbar-brand">{{ title }}</a>
      <ul class="nav nav-pills">
        <li><a class="nav-link" [routerLink]="['/welcome']">Home</a></li>
        <li>
          <a class="nav-link" [routerLink]="['/products']">Product List</a>
        </li>
      </ul>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </nav>
  `,
})
export class AppComponent {
  title: string = 'Infoway - Admin';
}

//navbar navbar-expand navbar-light bg-light