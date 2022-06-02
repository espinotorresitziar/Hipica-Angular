import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ParticipanteService } from '../participante.service';

@Component({
  selector: 'app-salto',
  templateUrl: './salto.component.html',
  styleUrls: ['./salto.component.css']
})
export class SaltoComponent implements OnInit {
  crearSalto: FormGroup
  submitted = false
  idSalto: string | null

  constructor(
    private fb: FormBuilder,
    public participanteService: ParticipanteService,
    private activeRoute: ActivatedRoute,
    private route: Router,
    private toastr: ToastrService
  ) { 
    this.crearSalto = this.fb.group(
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
        totalSaltos: ['', Validators.required],
        maxAltura: ['', Validators.required],
        TLimiteS: ['', Validators.required],
        derriboS: ['', Validators.required],
        rehusoS: ['', Validators.required],
        caidaS: ['', Validators.required],
        tiempoS: ['', Validators.required]
      }
    )
    this.idSalto = this.activeRoute.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
  }

  addParticipante() {
    this.submitted = true
    if (this.crearSalto.invalid) {
      return
    }
    const salto: any = {
      id: this.crearSalto.value.id,
      nombre: this.crearSalto.value.nombre,
      edad: this.crearSalto.value.edad,
      nacionalidad: this.crearSalto.value.nacionalidad,
      nivel: this.crearSalto.value.nivel,
      modalidad: this.crearSalto.value.modalidad,
      nomCaballo: this.crearSalto.value.nomCaballo,
      raza: this.crearSalto.value.raza,
      edadCaballo: this.crearSalto.value.edadCaballo,
      cabEstabulado: this.crearSalto.value.cabEstabulado,
      totalSaltos: this.crearSalto.value.totalSaltos,
      maxAltura: this.crearSalto.value.maxAltura,
      TLimiteS: this.crearSalto.value.TLimiteS,
      derriboS: this.crearSalto.value.derriboS,
      rehusoS: this.crearSalto.value.rehusoS,
      caidaS: this.crearSalto.value.caidaS,
      tiempoS: this.crearSalto.value.tiempoS
    }
    this.participanteService.addParticipante(salto).subscribe(
      () => {
        console.log("Participante de Salto guardado")
        this.toastr.success('Participante de Salto registrado con éxito', 'PArticipante de Salto registrado')
        this.route.navigate(['/saltodetail'])
      }
    ), (error: any) => {
      console.log(error)
    }
  }
}
