import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor() { }

  getPedidos() {
    return ['Pedido 1', 'Pedido 2', 'Pedido 3']
  }
}
