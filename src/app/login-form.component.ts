import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

export class LoginCreds {
  constructor(
    public username: string,
    public password: string,
    public token: string
  ) { }
}

@Component({
  selector: 'login-form',
  templateUrl: 'app/html/login-form.component.html',
  styleUrls: [`app/css/login-form.component.css`,'app/css/forms.css']
})
export class LoginFormComponent implements OnInit {
  creds: LoginCreds = new LoginCreds(null,null,null);

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("Init login");
    // if (this.authService.isLoggedIn()) {
    //   this.router.navigate([''])
    // }
  }

  onSubmit() {
    // TODO Authenticate (get token)
    var resp = this.authService.login(this.creds);
    if (resp.success) {
      this.creds.token = resp.token;
      this.router.navigate([''])
    }
    return false;
  }
}
