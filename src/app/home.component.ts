import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Component({
  selector: 'home',
  templateUrl: 'app/html/home.component.html',
  styleUrls: [`app/css/home.component.css`]
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log("Init home");

    // TODO If not authenticated, redirect to /login
    // TODO Uncomment when it's time to implement auth
    /*
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    */
  }
}
