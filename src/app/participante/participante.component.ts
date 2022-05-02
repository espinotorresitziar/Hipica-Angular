import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-participante',
  templateUrl: './participante.component.html',
  styleUrls: ['./participante.component.css']
})
export class ParticipanteComponent implements OnInit {
  crearParticipante: FormGroup;
  submitted = false
  idPart: string | null

  constructor(
    private fb: FormBuilder,
    public participanteService: ParticipanteService,
    private activeRoute: ActivatedRoute
  ) { 
    this.crearParticipante = this.fb.group(
      {
        id: ['', Validators.required],
        nombre: ['', Validators.required],
        edad: ['', Validators.required],
        nacionalidad: ['', Validators.required],
        nivel: ['', Validators.required],
        modalidad: ['', Validators.required],
        nomCaballo: ['', Validators.required],
        raza: ['', Validators.required],
        edadCaballo: ['', Validators.required],
        cabEstabulado: ['', Validators.required]
      }
    )
    this.idPart = this.activeRoute.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
  }

  addParticipante() {
    this.submitted = true
    if (this.crearParticipante.invalid) {
      return
    }
    const participante: any = {
      id: this.crearParticipante.value.id,
      nombre: this.crearParticipante.value.nombre,
      edad: this.crearParticipante.value.edad,
      nacionalidad: this.crearParticipante.value.nacionalidad,
      nivel: this.crearParticipante.value.nivel,
      modalidad: this.crearParticipante.value.modalidad,
      nomCaballo: this.crearParticipante.value.nomCaballo,
      raza: this.crearParticipante.value.raza,
      edadCaballo: this.crearParticipante.value.edadCaballo,
      cabEstabulado: this.crearParticipante.value.cabEstabulado
    }
    this.participanteService.addParticipante(participante).subscribe(
      () => {
        console.log("Participante guardado")
      }
    ), (error: any) => {
      console.log(error)
    }
  }

}
