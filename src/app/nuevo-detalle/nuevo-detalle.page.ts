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
  selector: 'app-nuevo-detalle',
  templateUrl: './nuevo-detalle.page.html',
  styleUrls: ['./nuevo-detalle.page.scss'],
  imports: [
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  ]
})
export class NuevoDetallePage {

  detalle = {
    factura_id: 15,
    producto_id: 1,
    cantidad: 1,
    precio_unitario: 9500
  };

  mensaje = '';
  error = '';

  constructor(private http: HttpClient) {}

  crearDetalle() {

    alert('El botón sí está funcionando');

    this.mensaje = '';
    this.error = '';

    const datos = {
      factura_id: Number(this.detalle.factura_id),
      producto_id: Number(this.detalle.producto_id),
      cantidad: Number(this.detalle.cantidad),
      precio_unitario: Number(this.detalle.precio_unitario)
    };

    console.log('ENVIANDO DETALLE:', datos);

    this.http.post<any>(
      'http://127.0.0.1:5000/api/v1/detalle_factura/',
      datos
    ).subscribe({

      next: (respuesta) => {

        console.log('DETALLE CREADO:', respuesta);

        this.mensaje = '✅ Detalle creado correctamente';

        alert('✅ Detalle creado correctamente');

      },

      error: (error) => {

        console.error('ERROR AL CREAR DETALLE:', error);

        this.error =
          error?.error?.message ||
          `Error ${error.status}: no se pudo crear el detalle`;

        alert(this.error);

      }

    });

  }

}