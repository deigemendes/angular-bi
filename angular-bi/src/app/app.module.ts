import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ComercialComponent } from './components/comercial/comercial.component';

import { RelatoriosModule } from './relatorios/relatorios.module';
import { DashboardService } from './components/dashboard/dashboard.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComercialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    RelatoriosModule
  ],
  providers: [
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
