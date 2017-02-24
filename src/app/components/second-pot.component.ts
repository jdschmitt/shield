import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'second-pot',
  templateUrl: 'app/html/second-pot.component.html',
  styleUrls: [`app/css/second-pot.component.css`]
})
export class SecondPotComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log("Init second-pot");

    // TODO If not authenticated, redirect to /login
    // TODO Uncomment when it's time to implement auth
    /*
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    */
  }
}
