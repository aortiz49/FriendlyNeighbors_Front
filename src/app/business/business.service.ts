import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Business } from './business';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


const API_URL = environment.apiUrl;
const businesses = "/businesses";
const neighborhoods = "/neighborhoods";

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

constructor(private http:HttpClient) { }

  getbusinesses():Observable<Business[]>{
    return this.http.get<Business[]>(
      API_URL + neighborhoods + "/" + 198 + businesses + "/"
  );
  }
}
