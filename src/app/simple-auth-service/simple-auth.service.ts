import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {NgxRolesService} from "ngx-permissions";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {GroupService} from "../group/group.service";
import {ResidentDetail} from "../home/resident-detail";
import {ResidentService} from "../home/resident.service";

@Injectable({
  providedIn: 'root'
})
export class SimpleAuthService {

  /**
   * Constructor of the service
   * @param router Angular's Router to redirect the user on login or logout
   * @param roleService NgxRolesService to manage authentication roles
   * @param http
   * @param groupService
   * @param residentService
   */
  constructor(
    private router: Router,
    private http: HttpClient,
    private groupService: GroupService,
    private residentService: ResidentService
  ) {
  }

  header: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  /**
   * Inicializa los roles y permisos. <br>
   * Por defecto se inicializa como 'Invitado'. <br>
   * De lo contrario, se inicializa como Admin, Comprador o Vendedor.
   */


  /**
   * Cierra la sesión
   */
  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }


  /**
   * Obtiene un comprador mediante una consulta al API
   * @param credenciales Credenciales de inicio de sesión.
   */
  isOwner(id): Observable<boolean> {
    let b: boolean;
    b = false

    if (localStorage.getItem('userId') == id + "") {
      b = true;
    }

    console.log(localStorage.getItem('userId'))
    console.log(localStorage.getItem('userId'))
    console.log("________________________________djsakj")
    return of(b);
  }

  isMember(group): Observable<boolean> {
    let b: boolean;
    b = false;

    this.groupService.isMember(Number(localStorage.getItem('neighId')), group, Number(localStorage.getItem('userId'))).subscribe(value => {
        b = value
      }
    )

    return of(b);
  }

  getAuthId(): Observable<number> {
    return of(Number(localStorage.getItem('userId')));
  }

  getAuthUser(): Observable<ResidentDetail> {

    return this.residentService.getresident(Number(localStorage.getItem('neighId')), Number(localStorage.getItem('userId')));
  }

}
