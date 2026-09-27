import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.page.html',
  styleUrls: ['./facturas.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  ]
})
export class FacturasPage implements OnInit {

  facturas: any[] = [];

  pagina = 1;
  limite = 2;
  totalPaginas = 0;

  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarFacturas();
  }

  cargarFacturas() {

    const url =
      `http://127.0.0.1:5000/api/v1/facturas/?page=${this.pagina}&limit=${this.limite}`;

    console.log('CONSULTANDO:', url);

    this.http.get<any>(url).subscribe({

      next: (respuesta) => {

        console.log('RESPUESTA FACTURAS:', respuesta);

        if (respuesta && respuesta.facturas) {

          console.log('FACTURAS ARRAY:', respuesta.facturas);
          console.log('TOTAL PAGINAS:', respuesta.total_paginas);

          this.facturas = respuesta.facturas;
          this.totalPaginas = respuesta.total_paginas;

        } else {

          console.error('La respuesta no contiene "facturas"');

          this.facturas = [];
          this.totalPaginas = 0;

        }

      },

      error: (error) => {

        console.error('ERROR API FACTURAS:', error);

        this.facturas = [];
        this.totalPaginas = 0;

        this.error = 'No se pudieron cargar las facturas';

      }

    });

  }

  siguientePagina() {

    if (this.pagina < this.totalPaginas) {

      this.pagina++;

      this.cargarFacturas();

    }

  }

  paginaAnterior() {

    if (this.pagina > 1) {

      this.pagina--;

      this.cargarFacturas();

    }

  }

}