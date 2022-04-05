import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';

const ROOT = 'api/v1/users';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  usuario?: Usuario | null;
  token?: string | null;

  constructor(public http: HttpClient, public router: Router) {
    this.getStore();
  }

  isAuthenticated() {
    return this.token !== null ? true : false;
  }

  getStore() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    } else {
      this.token = null;
      this.usuario = null;
    }
  }

  saveStorage(token: string, user: Usuario) {
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(user));

    this.usuario = user;
    this.token = token;
  }

  register(usuario: Usuario) {
    const url = `${environment.API}${ROOT}/register`;

    return this.http.post(url, usuario, { responseType: 'text' }).pipe(
      map((resp: any) => {
        this.saveStorage(resp, usuario);
        this.router.navigate(['/']);
        return true;
      }),
      catchError((err) => {
        console.log(err);
        return throwError(() => err);
      })
    );
  }

  logout() {
    this.usuario = null;
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }
}
