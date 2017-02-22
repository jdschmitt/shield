import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {BaseService} from "./base.service";

@Injectable()
export class SettingsService extends BaseService{

  URIs = {
    currentWeek: '/currentWeek'
  }

  getCurrentWeek() {
    return this.get(this.URIs.currentWeek).map((res:Response) => res.json());
  }

}
