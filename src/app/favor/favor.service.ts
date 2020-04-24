import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import { Favor } from './favor';


const API_URL = environment.apiUrl;
const favors = "/favors";
const neighborhoods = "/neighborhoods";

@Injectable({
  providedIn: 'root'
})
export class FavorService {

constructor(private http:HttpClient) { }

  getFavors():Observable<Favor[]>{
    return this.http.get<Favor[]>(
      API_URL + neighborhoods + "/" + 200 + favors + "/"
  );
  }

}
