import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Component({
  selector: 'main-nav',
  templateUrl: 'app/html/main-nav.component.html',
  styleUrls: [`app/css/main-nav.component.css`]
})
export class MainNavComponent implements OnInit {

  activeLink = 'home';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  navClicked(navlink: string) {
    console.log('Clicked on ' + navlink);

    this.activeLink = navlink;
  }

  loginClicked() {
    console.log('Login clicked');

    // TODO: open login modal here
  }

  ngOnInit() {
    console.log("Init main-nav");

    // TODO If not authenticated, redirect to /login
    // TODO Uncomment when it's time to implement auth
    /*
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    */
  }
}
