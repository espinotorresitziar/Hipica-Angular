import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-doma',
  templateUrl: './doma.component.html',
  styleUrls: ['./doma.component.css']
})
export class DomaComponent implements OnInit {
  crearDoma: FormGroup
  submitted = false
  idDoma: string | null

  constructor(
    private fb: FormBuilder,
    public participanteService: ParticipanteService,
    private activeRoute: ActivatedRoute,
    private route: Router,
    private toastr: ToastrService
  ) { 
    this.crearDoma = this.fb.group(
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
        cabEstabulado: ['', Validators.required],
        parada: ['', Validators.required],
        paso: ['', Validators.required],
        trote: ['', Validators.required],
        galope: ['', Validators.required],
        pasoAtras: ['', Validators.required],
        transiciones: ['', Validators.required],
        cambioDirec: ['', Validators.required],
        figuras: ['', Validators.required],
        movLateral: ['', Validators.required],
        piruetas: ['', Validators.required]
      }
    )
    this.idDoma = this.activeRoute.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
  }

  addParticipante() {
    this.submitted = true
    if (this.crearDoma.invalid) {
      return
    }
    const doma: any = {
      id: this.crearDoma.value.id,
      nombre: this.crearDoma.value.nombre,
      edad: this.crearDoma.value.edad,
      nacionalidad: this.crearDoma.value.nacionalidad,
      nivel: this.crearDoma.value.nivel,
      modalidad: this.crearDoma.value.modalidad,
      nomCaballo: this.crearDoma.value.nomCaballo,
      raza: this.crearDoma.value.raza,
      edadCaballo: this.crearDoma.value.edadCaballo,
      cabEstabulado: this.crearDoma.value.cabEstabulado,
      parada: this.crearDoma.value.parada,
      paso: this.crearDoma.value.paso,
      trote: this.crearDoma.value.trote,
      galope: this.crearDoma.value.galope,
      pasoAtras: this.crearDoma.value.pasoAtras,
      transiciones: this.crearDoma.value.transiciones,
      cambioDirec: this.crearDoma.value.cambioDirec,
      figuras: this.crearDoma.value.figuras,
      movLateral: this.crearDoma.value.movLateral,
      piruetas: this.crearDoma.value.piruetas
    }
    this.participanteService.addParticipante(doma).subscribe(
      () => {
        console.log("Participante de doma guardado")
        this.toastr.success('Participante de Doma registrado con éxito', 'Participante de Doma registrado');
        this.route.navigate(['/domadetail'])
      }
    ), (error: any) => {
      console.log(error)
    }
  }

}
