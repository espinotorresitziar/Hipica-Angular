import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts"
import { Cross } from '../models/participantes/cross';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-crossgrafica',
  templateUrl: './crossgrafica.component.html',
  styleUrls: ['./crossgrafica.component.css']
})
export class CrossgraficaComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts

  chartOptions: any = {
    title: {
      text: 'Puntuaciones Cross'
  },

  yAxis: {
    accessibility: {
      rangeDescription: 'Range: 0 to 100'
  },
      title: {
          text: 'Puntos'
      }
  },

  xAxis: {
      categories: []
  },

  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
  },

  series: [{
      name: "Total",
      data: []
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }
  }

  constructor( public participanteService: ParticipanteService) { }

  cParticipante: any

  ngOnInit(): void {
    this.getDatos()
  }

  getDatos() {
    this.participanteService.getCross()
    .subscribe(
      (result: any) => {
        this.cParticipante = result.map((participante: any) => {
          return new Cross(participante._id, participante._nombre, participante._edad, participante._nacionalidad,
            participante._nivel, participante._modalidad, participante._nomCaballo, participante._raza, participante._edadCaballo,
            participante._cabEstabulado, participante._TLimiteC, participante._rehusoC, participante._caidaC, 
            participante._tiempoC)
        })
        const dataSeries = this.cParticipante.map((x: Cross) => x.puntosT())
        this.chartOptions.series[0]["data"] = dataSeries

        const dataCategories = this.cParticipante.map((x: Cross) => x._nombre)
        this.chartOptions.xAxis["categories"] = dataCategories

        Highcharts.chart("cross", this.chartOptions)
      }
    )
  }

}
