import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  teste = 'teste de debug';

  getPedidos() {
    console.log(this.teste);
    return ['1234','123568','999999']; 
  }
 

}
