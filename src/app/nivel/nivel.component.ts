import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Nivel } from '../models/niveles/nivel';
import { NivelService } from '../nivel.service';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.css']
})
export class NivelComponent implements OnInit {
  crearNivel: FormGroup;
  submitted = false
  idNivel: string | null

  constructor(
    private fb: FormBuilder,
    public nivelService: NivelService,
    private activeRoute: ActivatedRoute) { 
      this.crearNivel = this.fb.group(
        {
          id: ['', Validators.required],
          tipoNivel: ['', Validators.required],
          aficionado: ['', Validators.required],
          limiteEdad: ['', Validators.required],
          inscripcion: ['', Validators.required]
        }
      )
      this.idNivel = this.activeRoute.snapshot.paramMap.get("id")
    }

  ngOnInit(): void {
  }

  addNivel() {
    this.submitted = true
    if (this.crearNivel.invalid) {
      return
    }
    const nivel: any = {
      id: this.crearNivel.value.id,
      tipoNivel: this.crearNivel.value.tipoNivel,
      aficionado: this.crearNivel.value.aficionado,
      limiteEdad: this.crearNivel.value.limiteEdad,
      inscripcion: this.crearNivel.value.inscripcion
    }
    this.nivelService.addNivel(nivel).subscribe(
      () => {
        console.log("Usuario guardado")
      }
    ), (error: any) => {
      console.log(error)
    }
  }

}
