import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResidentDetail} from "../home/resident-detail";
import {Post} from "../post/post";
import {FavorDetail} from "../favor/favorDetail";
import {Group} from "./group";

const API_URL = environment.apiUrl;
const residents = "/groups";
const members = "/members";
const neighborhoods = "neighborhoods";


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) {
  }

  getgroups(neighborhood): Observable<Group[]> {
    return this.http.get<Group[]>(
      API_URL + neighborhoods + "/" + neighborhood + residents + "/"
    );
  }

  getgroup(neighborhood, resident): Observable<Group> {

    console.log(API_URL + neighborhoods + "/" + neighborhood + residents + "/" + resident);

    return this.http.get<Group>(
      API_URL + neighborhoods + "/" + neighborhood + residents + "/" + resident
    );

  }

  getmembers(neighborhood, resident): Observable<ResidentDetail[]> {

    console.log(API_URL + neighborhoods + "/" + neighborhood + residents + "/" + resident + members);

    let rr: Observable<ResidentDetail[]>;


    rr = this.http.get<ResidentDetail[]>(
      API_URL + neighborhoods + "/" + neighborhood + residents + "/" + resident + members
    );


    return rr;

  }


}
