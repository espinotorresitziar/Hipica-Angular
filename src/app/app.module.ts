import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NivelesComponent } from './niveles/niveles.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { NivelComponent } from './nivel/nivel.component';
import { DomadetailComponent } from './domadetail/domadetail.component';
import { ParticipanteComponent } from './participante/participante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomaComponent } from './doma/doma.component';
import { SaltoComponent } from './salto/salto.component';
import { CrossComponent } from './cross/cross.component';
import { NivelDetailComponent } from './nivel-detail/nivel-detail.component';
import { ParticipanteDetailComponent } from './participante-detail/participante-detail.component';
import { NivelService } from './nivel.service';
import { ParticipanteService } from './participante.service';
import { GraficaComponent } from './grafica/grafica.component';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { DomapuntosComponent } from './domapuntos/domapuntos.component';
import { CrossdetailComponent } from './crossdetail/crossdetail.component';
import { CrosspuntosComponent } from './crosspuntos/crosspuntos.component';
import { SaltodetailComponent } from './saltodetail/saltodetail.component';
import { SaltopuntosComponent } from './saltopuntos/saltopuntos.component';
import { CrossgraficaComponent } from './crossgrafica/crossgrafica.component';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import { SaltograficaComponent } from './saltografica/saltografica.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NivelesComponent,
    ParticipantesComponent,
    NivelComponent,
    DomadetailComponent,
    ParticipanteComponent,
    DomaComponent,
    SaltoComponent,
    CrossComponent,
    NivelDetailComponent,
    ParticipanteDetailComponent,
    GraficaComponent,
    DomapuntosComponent,
    CrossdetailComponent,
    CrosspuntosComponent,
    SaltodetailComponent,
    SaltopuntosComponent,
    CrossgraficaComponent,
    ClasificacionComponent,
    SaltograficaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ChartModule,
    HighchartsChartModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [NivelService, ParticipanteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
