import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GlobalFunctionService } from '../services/global-function.service';
import { UsuarioService } from '../services/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class HttpHeadersService implements HttpInterceptor{
  token: string = '';
  usuario = null;

  constructor(private usuarioService: UsuarioService,
              private globalFuntionServ: GlobalFunctionService
              ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
    this.globalFuntionServ.submit(true);

    const method = req.method.toLowerCase();

    this.token = this.usuarioService.cargarToken()
    
    if (JSON.parse(this.usuarioService.getUsuario()) != null) {
      this.usuario = JSON.parse(this.usuarioService.getUsuario()).uid;
    }       

    if (method === 'post' ||method === 'put' || method === 'delete') {
        
      req =  req.clone({
        setHeaders: {
          'Accept'  : 'application/json',
          'enctype' : 'multipart/form-data',
          'x-token' : `${this.token}`,
        },
        body: { ...req.body,usuario: this.usuario }
      })
    }

    if (req.method.toLowerCase() === 'get') {   
      req = req.clone({
        setHeaders: {
          'Accept': 'application/json',
          'enctype': 'multipart/form-data',
          'x-token': `${this.token}`,
        },
        setParams: {
          usuario: this.usuario
        }
      });
    }

    return next.handle(req).pipe(      
      tap(evt => {        
        if (evt instanceof HttpResponse) {
          this.globalFuntionServ.submit(false);
        }
      })
    )
  }
}
