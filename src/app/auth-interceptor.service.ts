import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const newReq = req.clone({
      headers: req.headers.append('name', 'oksana')
    });
    return next.handle(newReq);
  }
}
