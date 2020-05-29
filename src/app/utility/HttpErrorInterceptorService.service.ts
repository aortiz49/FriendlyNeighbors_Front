import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {Injectable} from '@angular/core';
import {ErrorHandler} from "protractor/built/exitCodes";

@Injectable()
export class HttpErrorInterceptor extends HttpErrorResponse {
  constructor(private toastrService: ToastrService) {
    super(toastrService);
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: ErrorConstructor) => {
        let errMsg = '';
        let errorType = 'Error';
        //
        // // Client Side Error
        // if (error.error instanceof ErrorEvent) {
        //   errMsg = `Error: ${error.error.message}`;
        // } else {
        //   // Server Side Error
        //   if (error.status === 0) {
        //     errMsg = `${error.status}, "There is no server connection!"`;
        //     errorType = 'Major Error';
        //     this.toastrService.error(errMsg, errorType, {closeButton: true});
        //
        //   } else if (error.status != 200) {
        //     errMsg = `${error.status}: ${error.error}`;
        //     this.toastrService.error(errMsg, errorType, {closeButton: true});
        //
        //   } else {
        //     errMsg = `${error.status}: ${error.error}`;
        //   }
        // }
        console.log(error);
        return throwError(errMsg);
      })
    );
  }
}
