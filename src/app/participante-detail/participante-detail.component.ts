import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipanteService } from '../participante.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-participante-detail',
  templateUrl: './participante-detail.component.html',
  styleUrls: ['./participante-detail.component.css']
})
export class ParticipanteDetailComponent implements OnInit {
  participante: any
  submitted = false

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public participanteService: ParticipanteService,
    private location: Location,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.getParticipante()
  }

  getParticipante() {
    const nombre: any = this.route.snapshot.paramMap.get('nombre')
    this.participanteService.getParticipante(nombre).subscribe((part) => {
      this.participante = part
      console.log(part)
    })
  }

  goBack(): void {
    this.location.back()
  }

  save(): void {
    const doc: any = {
      id: this.participante._id,
      nombre: this.participante._nombre,
      edad: parseInt(this.participante._edad),
      nacionalidad: this.participante._nacionalidad,
      nivel: this.participante._nivel,
      modalidad: this.participante._modalidad,
      nomCaballo: this.participante._nomCaballo,
      raza: this.participante._raza,
      edadCaballo: parseInt(this.participante._edadCaballo),
      cabEstabulado: this.participante._cabEstabulado
    }
    this.participanteService.updateParticipante(doc).subscribe(() => {
      this.toastr.success('Participante actualiado con éxito', 'Participante actualizado')
      this.router.navigate(['/niveles'])
      this.goBack()
    })
  }

}
