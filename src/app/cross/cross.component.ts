import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-cross',
  templateUrl: './cross.component.html',
  styleUrls: ['./cross.component.css']
})
export class CrossComponent implements OnInit {
  crearCross: FormGroup
  submitted = false
  idCross: string | null

  constructor(
    private fb: FormBuilder,
    public participanteService: ParticipanteService,
    private activeRoute: ActivatedRoute,
    private route: Router,
    private toastr: ToastrService
  ) {
    this.crearCross = this.fb.group(
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
        TLimiteC: ['', Validators.required],
        rehusoC: ['', Validators.required],
        caidaC: ['', Validators.required],
        tiempoC: ['', Validators.required]
      }
    )
    this.idCross = this.activeRoute.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
  }

  addParticipante() {
    this.submitted = true
    if (this.crearCross.invalid) {
      return
    }
    const cross: any = {
      id: this.crearCross.value.id,
      nombre: this.crearCross.value.nombre,
      edad: this.crearCross.value.edad,
      nacionalidad: this.crearCross.value.nacionalidad,
      nivel: this.crearCross.value.nivel,
      modalidad: this.crearCross.value.modalidad,
      nomCaballo: this.crearCross.value.nomCaballo,
      raza: this.crearCross.value.raza,
      edadCaballo: this.crearCross.value.edadCaballo,
      cabEstabulado: this.crearCross.value.cabEstabulado,
      TLimiteC: this.crearCross.value.TLimiteC,
      rehusoC: this.crearCross.value.rehusoC,
      caidaC: this.crearCross.value.caidaC,
      tiempoC: this.crearCross.value.tiempoC
    }
    this.participanteService.addParticipante(cross).subscribe(
      () => {
        console.log("Participante de Cross guardado")
        this.toastr.success('Participante de Cross registrado con éxito', 'Participante de Cross registrado');
        this.route.navigate(['/crossdetail'])
      }
    ), (error: any) => {
      console.log(error)
    }
  }

}
