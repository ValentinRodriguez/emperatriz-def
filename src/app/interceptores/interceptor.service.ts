import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UiServiceService } from '../services/ui-service.service';
import { GlobalFunctionService } from '../services/global-function.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private uiService: UiServiceService,
              private globalFuntionServ: GlobalFunctionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle( req ).pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => {        
        if (error instanceof HttpErrorResponse) {
          this.mensajeError(error)         
          return throwError(error);
        }else{        
          return throwError(error);
        }
      })
    )
  }

  mensajeError( error: HttpErrorResponse  ) {
    this.uiService.alertaInformativa('ERROR','error');
    console.warn(error.error.errors);    
    this.globalFuntionServ.submit(false);            
    return throwError('Error personalizado')
  } 
}
