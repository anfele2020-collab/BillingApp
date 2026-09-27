import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel
  ]
})
export class ClientesPage implements OnInit {

  clientes: any[] = [];
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarClientes();
  }

  cargarClientes() {

    this.http.get<any>(
      'http://127.0.0.1:5000/api/v1/clientes/'
    ).subscribe({

      next: (respuesta) => {
        console.log('CLIENTES RECIBIDOS:', respuesta);
        this.clientes = respuesta.clientes;
      },

      error: (error) => {
        console.error('ERROR API:', error);
        this.error = 'No se pudieron cargar los clientes';
      }

    });

  }

}