import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acessoLink: string; 
  pedidos: string[];
  
  constructor(private dashboardService: DashboardService) { 

    this.acessoLink = "www.proluminas.com.br"

    this.pedidos = dashboardService.getPedidos();  
  }

  ngOnInit(): void {
  }

}
