export class Participante {
    _id: number;
    _nombre: string;
    _edad: number;
    _nacionalidad: string;
    _nivel: string;
    _modalidad: string;
    _nomCaballo: string;
    _raza: string;
    _edadCaballo: number;
    _cabEstabulado: boolean;
  
    constructor(
      id: number,
      nombre: string,
      edad: number,
      nacionalidad: string,
      nivel: string,
      modalidad: string,
      nomCaballo: string,
      raza: string,
      edadCaballo: number,
      cabEstabulado: boolean
    ) {
        this._id = id,
        this._nombre = nombre,
        this._edad = edad,
        this._nacionalidad = nacionalidad,
        this._nivel = nivel,
        this._modalidad = modalidad,
        this._nomCaballo = nomCaballo,
        this._raza = raza,
        this._edadCaballo = edadCaballo,
        this._cabEstabulado = cabEstabulado
    }

    get id() {
        return this._id
    }
    get nombre() {
        return this._nombre
    }
    get edad() {
        return this._edad
    }
    get nacionalidad() {
        return this._nacionalidad
    }
    get nivel() {
        return this._nivel
    }
    get nomCaballo() {
        return this._nomCaballo
    }
    get raza() {
        return this._raza
    }
    get edadCaballo() {
        return this._edadCaballo
    }
    get cabEstabulado() {
        return this._cabEstabulado
    }
}