import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

import {ResidentDetail} from "./resident-detail";
import {FavorDetail} from "../favor/favorDetail";
import {Post} from "../post/post";
import {PostDetail} from "../post/post-detail";

const API_URL = environment.apiUrl;
const residents = "/residents";
const posts = "/posts";
const favors = "/favors";
const album = "/album";
const neighborhoods = "neighborhoods";


@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor(private http: HttpClient) {
  }

  getresidents(neighborhood: number): Observable<ResidentDetail[]> {
    return this.http.get<ResidentDetail[]>(
      API_URL + neighborhoods + "/" + neighborhood + residents + "/"
    );
  }

  getresident(neighborhood, resident): Observable<ResidentDetail> {

    console.log(API_URL + neighborhoods + "/" + neighborhood + residents + "/" + resident);

    return this.http.get<ResidentDetail>(
      API_URL + neighborhoods + "/" + neighborhood + residents + "/" + resident
    );

  }

  getposts(neighborhood, resident): Observable<Post[]> {

    console.log(API_URL + neighborhoods + "/" + neighborhood + residents + "/" + resident + posts);

    let rr: Observable<Post[]>;


    rr = this.http.get<Post[]>(
      API_URL + neighborhoods + "/" + neighborhood + residents + "/" + resident + posts
    );

    console.log(rr);

    return rr;

  }

  getfavors(neighborhood, resident): Observable<FavorDetail[]> {
    return this.http.get<FavorDetail[]>(
      API_URL + neighborhoods + "/" + neighborhood + residents + "/" + resident + favors
    );
  }


  addPicture(neighborhood, residentId, pic: string): Observable<ResidentDetail[]> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<ResidentDetail[]>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      residents +
      "/" +
      residentId +
      album +
      "/",
      pic, {headers: headers}
    );
  }


}


