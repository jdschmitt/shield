import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
// import {AuthService} from "../services/auth-service";
import {SettingsService} from "../services/settings.service";
import {PlayersService} from "../services/players.service";

@Component({
  selector: 'home',
  templateUrl: 'app/html/home.component.html',
  styleUrls: [`app/css/home.component.css`]
})
export class HomeComponent implements OnInit {

  currentWeek: number = -1;
  players: any[];
  commishNote: string;

  constructor(
    private router: Router,
    // private authService: AuthService,
    private settingsService: SettingsService,
    private playersService: PlayersService
  ) { }

  ngOnInit() {
    this.settingsService.getCurrentWeek().subscribe(
      data => this.currentWeek = data.currentWeek,
      error => console.log("Error calling /currentWeek: ", error)
    );

    this.playersService.getRankedPlayers().subscribe(
      data => this.players = data,
      error => console.log("Error calling /rankedPlayers: ", error)
    );

    this.settingsService.getSettings().subscribe(
      data => this.commishNote = data.commishNote,
      error => console.log("Error calling /settings: ", error)
    );

    // TODO If not authenticated, redirect to /login
    // TODO Uncomment when it's time to implement auth
    /*
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    */
  }
}
