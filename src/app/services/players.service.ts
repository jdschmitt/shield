import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {BaseService} from "./base.service";

@Injectable()
export class PlayersService extends BaseService{

  URIs = {
    rankedPlayers: '/rankedPlayers'
  }

  getRankedPlayers() {
    return this.get(this.URIs.rankedPlayers).map((res:Response) => res.json());
  }

}
