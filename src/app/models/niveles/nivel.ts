import { Participante } from '../participantes/participante';

export class Nivel {
  _id: number;
  _tipoNivel: string;
  _aficionado: boolean;
  _limiteEdad: number;
  _inscripcion: number;
  _participantes: Array<Participante>;

  constructor(
    id: number,
    tipoNivel: string,
    aficionado: boolean,
    limiteEdad: number,
    inscripcion: number,
    participantes: Array<Participante>
  ) {
        this._id = id,
        this._tipoNivel = tipoNivel,
        this._aficionado = aficionado,
        this._limiteEdad = limiteEdad,
        this._inscripcion = inscripcion,
        this._participantes = participantes
    }

  get id() {
    return this._id;
  }
  get tipoNivel() {
    return this._tipoNivel;
  }
  get aficionado() {
    return this._aficionado;
  }
  get limiteEdad() {
    return this._limiteEdad;
  }
  get inscripcion() {
    return this._inscripcion;
  }
  get participantes() {
    return this._participantes;
  }

  pago() {
    let pago: number;
    if (this.aficionado == false) {
        pago = this.inscripcion + 200
        return pago
    } else {
        pago = this.inscripcion + 100
        return pago
    }
  }
}
