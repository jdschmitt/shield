import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <main-nav></main-nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  title = "NFL Pick 'em";

  ngOnInit() {
    // TODO Check for auth creds (cookie?)
    console.log("Init app");
  }
}
