import { Component, OnInit } from '@angular/core';
import { Doma } from '../models/participantes/doma';
import { Participante } from '../models/participantes/participante';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-domadetail',
  templateUrl: './domadetail.component.html',
  styleUrls: ['./domadetail.component.css']
})
export class DomadetailComponent implements OnInit {
  doma: Doma[] = []

  constructor(private participanteService: ParticipanteService) { }

  ngOnInit(): void {
    this.getDoma()
    console.log(this.doma)
  }

  getDoma(): void {
    this.participanteService.getDoma().subscribe((dom) => (this.doma = dom))
  }

  elimParticipante(nombre:string) {
    this.participanteService.elimParticipante(nombre).subscribe(() => {
      console.log('Eliminado')
    })
  }
}
