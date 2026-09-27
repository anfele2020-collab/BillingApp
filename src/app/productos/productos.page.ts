import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  ]
})
export class ProductosPage implements OnInit {

  productos: any[] = [];

  pagina = 1;
  limite = 2;
  totalPaginas = 0;

  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {

    const url =
      `http://127.0.0.1:5000/api/v1/productos/?page=${this.pagina}&limit=${this.limite}`;

    this.http.get<any>(url).subscribe({

      next: (respuesta) => {

        console.log('RESPUESTA PRODUCTOS:', respuesta);

        this.productos = respuesta.productos;
        this.totalPaginas = respuesta.total_paginas;

      },

      error: (error) => {

        console.error('ERROR API:', error);

        this.error = 'No se pudieron cargar los productos';

      }

    });

  }

  siguientePagina() {

    if (this.pagina < this.totalPaginas) {

      this.pagina++;

      this.cargarProductos();

    }

  }

  paginaAnterior() {

    if (this.pagina > 1) {

      this.pagina--;

      this.cargarProductos();

    }

  }

}