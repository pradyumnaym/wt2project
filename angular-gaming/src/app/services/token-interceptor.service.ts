import { Injectable, Injector} from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthenticateService} from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private injector:Injector
  ) { }

  intercept(req, next) {
    let authenticateService = this.injector.get(AuthenticateService)
    if(authenticateService.loggedIn()) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authenticateService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
    }
    else {
      return next.handle(req)
    }
  }
}
