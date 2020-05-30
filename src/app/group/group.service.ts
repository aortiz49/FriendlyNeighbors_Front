import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {ResidentDetail} from "../home/resident-detail";
import {Post} from "../post/post";
import {FavorDetail} from "../favor/favorDetail";
import {Group} from "./group";
import {GroupDetail} from "./group-detail";

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

  getgroup(neighborhood, resident): Observable<GroupDetail> {

    console.log(API_URL + neighborhoods + "/" + neighborhood + residents + "/" + resident);

    return this.http.get<GroupDetail>(
      API_URL + neighborhoods + "/" + neighborhood + residents + "/" + resident
    );

  }

  getmembers(neighborhood, group): Observable<ResidentDetail[]> {

    console.log(API_URL + neighborhoods + "/" + neighborhood + residents + "/" + group + members);

    let r: Observable<ResidentDetail[]>;


    r = this.http.get<ResidentDetail[]>(
      API_URL + neighborhoods + "/" + neighborhood + residents + "/" + group + members
    );


    return r;

  }


  isMember(neighborhood, group, resident): Observable<boolean> {

    console.log(API_URL + neighborhoods + "/" + neighborhood + residents + "/" + group + members + "/" + resident);

    let b: boolean;
    b = true;

    try {
      this.http.get<ResidentDetail>(
        API_URL + neighborhoods + "/" + neighborhood + residents + "/" + group + members + "/" + resident
      );
    } catch (e) {
      b = false;
    }

    return of(b);
  }

}
