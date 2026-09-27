import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular';

@Component({
  selector: 'app-nueva-factura',
  templateUrl: './nueva-factura.page.html',
  styleUrls: ['./nueva-factura.page.scss'],
  imports: [
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  ]
})
export class NuevaFacturaPage {

  factura = {
    numero_factura: '',
    fecha: '',
    cliente_id: null,
    usuario_id: null,
    iva: 19
  };

  mensaje = '';
  error = '';

  constructor(private http: HttpClient) {}

  crearFactura() {

    this.mensaje = '';
    this.error = '';

    const datos = {
      numero_factura: this.factura.numero_factura,
      fecha: this.factura.fecha,
      cliente_id: Number(this.factura.cliente_id),
      usuario_id: Number(this.factura.usuario_id),
      iva: Number(this.factura.iva)
    };

    console.log('ENVIANDO FACTURA:', datos);

    this.http.post<any>(
      'http://127.0.0.1:5000/api/v1/facturas/',
      datos
    ).subscribe({

      next: (respuesta) => {

        console.log('FACTURA CREADA:', respuesta);

        this.mensaje = 'Factura creada correctamente';

        alert('Factura creada correctamente')

        this.factura = {
          numero_factura: '',
          fecha: '',
          cliente_id: null,
          usuario_id: null,
          iva: 19
        };

      },

      error: (error) => {

        console.error('ERROR AL CREAR FACTURA:', error);

        this.error =
          error?.error?.message ||
          'No se pudo crear la factura';

      }

    });

  }

}