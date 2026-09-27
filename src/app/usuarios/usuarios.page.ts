import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  ]
})
export class UsuariosPage implements OnInit {

  usuarios: any[] = [];

  pagina = 1;
  limite = 2;
  totalPaginas = 0;

  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {

    const url =
      `http://127.0.0.1:5000/api/v1/usuarios/?page=${this.pagina}&limit=${this.limite}`;

    this.http.get<any>(url).subscribe({

      next: (respuesta) => {

        console.log('RESPUESTA USUARIOS:', respuesta);
        console.log('USUARIOS ARRAY:', respuesta.usuarios);
        console.log('TOTAL PAGINAS:', respuesta.total_paginas);

        this.usuarios = respuesta.usuarios;
        this.totalPaginas = respuesta.total_paginas;

      },

      error: (error) => {

        console.error('ERROR API:', error);

        this.error = 'No se pudieron cargar los usuarios';

      }

    });

  }

  siguientePagina() {

    if (this.pagina < this.totalPaginas) {

      this.pagina++;
      this.cargarUsuarios();

    }

  }

  paginaAnterior() {

    if (this.pagina > 1) {

      this.pagina--;
      this.cargarUsuarios();

    }

  }

}