import { Component, OnInit } from '@angular/core';
import { Participante } from '../models/participantes/participante';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {
  participantes: Participante [] = []

  constructor(public participanteService: ParticipanteService) { }

  ngOnInit(): void {
    this.getParticipantes()
    console.log(this.participantes)
  }

  getParticipantes(): void {
    this.participanteService.getParticipantes().subscribe((parti) => (this.participantes = parti))
  }

  elimParticipante(nombre:string) {
    this.participanteService.elimParticipante(nombre).subscribe(() => {
      console.log('Eliminado')
    })
  }

}
