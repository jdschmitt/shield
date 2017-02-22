/**
 * Created by jason on 2/21/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseService {

  // TODO externalize this?
  baseURL: string = 'http://localhost:8080';

  constructor (
    protected http: Http
  ) {}

  private getURL(uri: string) {
    return this.baseURL + uri;
  }

  // Thinking that doing these here may allow caching to be introduced easier in one place
  get(uri: string) {
    return this.http.get(this.getURL(uri));
  }

}
