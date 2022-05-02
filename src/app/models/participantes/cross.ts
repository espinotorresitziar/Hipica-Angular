import { cPenalizaciones } from 'src/app/interfaces/interfaces';
import { Participante } from '../participantes/participante';

export class Cross extends Participante {
    public _TLimiteC: number
    public _cPenalizaciones: cPenalizaciones

    constructor (
        id: number,
        nombre: string,
        edad: number,
        nacionalidad: string,
        nivel: string,
        modalidad: string,
        nomCaballo: string,
        raza: string,
        edadCaballo: number,
        cabEstabulado: boolean,
        TLimiteC: number,
        cPenalizaciones: {
            rehusoC: number;
            caidaC: number;
            tiempoC: number;
    }
    ) {
        super(
            id,
            nombre,
            edad,
            nacionalidad,
            nivel,
            modalidad,
            nomCaballo,
            raza,
            edadCaballo,
            cabEstabulado
        )
        this._TLimiteC = TLimiteC
        this._cPenalizaciones = cPenalizaciones
    }

    get TLimiteC() {
        return this._TLimiteC
    }

    get cPenalizaciones() {
        return this._cPenalizaciones
    }
}