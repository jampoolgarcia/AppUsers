import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserI } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://gorest.co.in/public/v2/users';


  constructor(private _http: HttpClient) { }


  get(): Observable<UserI[]> {
    return this._http.get<UserI[]>(this.url);
  }

}
