import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts"
import { Cross } from '../models/participantes/cross';
import { Salto } from '../models/participantes/salto';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-saltografica',
  templateUrl: './saltografica.component.html',
  styleUrls: ['./saltografica.component.css']
})
export class SaltograficaComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts

  chartOptions: any = {
    chart: {
      type: 'bar'
  },
  title: {
      text: 'Puntuaciones Salto'
  },
  xAxis: {
      categories: []
  },
  yAxis: {
    accessibility: {
      rangeDescription: 'Range: 0 to 100'
  },
      title: {
          text: 'Puntos'
      }
  },
  legend: {
      reversed: true
  },
  plotOptions: {
      series: {
          stacking: 'normal'
      }
  },
  series: [{
      name: "Total",
      color: "#38F902",
      data: []
  }]
  }

  constructor( public participanteService: ParticipanteService) { }

  sParticipante: any

  ngOnInit(): void {
    this.getDatos()
  }

  getDatos() {
    this.participanteService.getSalto()
    .subscribe(
      (result: any) => {
        this.sParticipante = result.map((participante: any) => {
          return new Salto(participante._id, participante._nombre, participante._edad, participante._nacionalidad,
            participante._nivel, participante._modalidad, participante._nomCaballo, participante._raza, participante._edadCaballo,
            participante._cabEstabulado, participante._totalSaltos, participante._maxAltura, participante._TLimiteS,
            participante._derriboS, participante._rehusoS, participante._caidaS, participante._tiempoS)
        })
        const dataSeries = this.sParticipante.map((x: Salto) => x.puntosT())
        this.chartOptions.series[0]["data"] = dataSeries

        const dataCategories = this.sParticipante.map((x: Salto) => x._nombre)
        this.chartOptions.xAxis["categories"] = dataCategories

        Highcharts.chart("salto", this.chartOptions)
      }
    )
  }

}
