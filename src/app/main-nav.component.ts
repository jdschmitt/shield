import {Component, ViewChild, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

export class LoginCreds {
  constructor(
    public username: string,
    public password: string,
    public token: string
  ) { }
}

@Component({
  selector: 'main-nav',
  templateUrl: 'app/html/main-nav.component.html',
  styleUrls: [`app/css/main-nav.component.css`],

  encapsulation: ViewEncapsulation.None
})

export class MainNavComponent implements OnInit {

  @ViewChild('modal')
  modal: ModalComponent;
  selected: string;
  output: string;
  creds: LoginCreds = new LoginCreds(null,null,null);

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }


  closed() {
    this.output = '(closed) ' + this.selected;
  }

  dismissed() {
    this.output = '(dismissed)';
  }

  opened() {
    this.output = '(opened)';
  }

  navigate() {
    this.router.navigateByUrl('/hello');
  }

  open() {
    this.modal.open();
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
