import { Component, OnInit } from '@angular/core';
import { Participante } from '../models/participantes/participante';
import { ParticipanteService } from '../participante.service';
import * as Highcharts from "highcharts"
import { Doma } from '../models/participantes/doma';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: any  = {

    chart: {
        type: "column"
      },
      title: {
        text: 'Puntuación Doma'
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
      series: [
        {
          name: "Total",
          type: "column",
          data: [],
          color: "#02F9E1"
        }
      ],
      noData: {
        style: {
          fontWeight: "bold",
          fontSize: "15px",
          color: "#303030"
        }
      }
  }

  constructor( public participanteService: ParticipanteService) { }

  OParticipante: any

  ngOnInit(): void {
      this.getDatos()
  }

  getDatos() {
      this.participanteService.getDoma()
      .subscribe(
          (result: any) => {
            this.OParticipante = result.map((participante: any) => {
                return new Doma(participante._id, participante._nombre, participante._edad, participante._nacionalidad,
                    participante._nivel, participante._modalidad, participante._nomCaballo, participante._raza, participante._edadCaballo,
                    participante._cabEstabulado, participante._parada, participante._paso, participante._trote, participante._galope,
                    participante._pasoAtras, participante._transiciones, participante._cambioDirec, participante._figuras,
                    participante._movLateral, participante._piruetas)
            })
            const dataSeries = this.OParticipante.map((x: Doma) => x.puntosT())
            this.chartOptions.series[0]["data"] = dataSeries

            const dataCategories = this.OParticipante.map((x: Doma) => x._nombre)
            this.chartOptions.xAxis["categories"] = dataCategories

            Highcharts.chart("puntuaciones", this.chartOptions)
          }
      )
  }

}
