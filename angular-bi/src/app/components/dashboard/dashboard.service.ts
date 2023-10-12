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
    console.log(this.teste);
    return ['1234','123568','999999']; 
  }

  getValorTotal() {
    console.log("teste execucao"); 
    return this.total; 
  }
 

}
