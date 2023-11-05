import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor() { }

  teste = 'teste de debug';
  total = 0; 

  getPedidos() {
      return ['7777','123568','999999']; 
  }

  getValorTotal() {
  
    return this.total; 
  }
 

}
