import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor{
    
    constructor(){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(request).pipe(tap(
            event => {
                console.log('Logging interceptor', event);
            }
        ));
    } 
}