import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  usuario!: Usuario;
  constructor(public _usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuario = this._usuariosService.usuario!;
  }
}
