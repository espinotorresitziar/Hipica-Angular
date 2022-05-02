import { sPenalizaciones } from "src/app/interfaces/interfaces";
import { Participante } from "./participante";

export class Salto extends Participante {
    public _totalSaltos: number
    public _maxAltura: number
    public _TLimiteS: number
    public _sPenalizaciones: sPenalizaciones

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
        totalSaltos: number,
        maxAltura: number,
        TLimiteS: number,
        sPenalizaciones: {
            derriboS: number;
            rehusoS: number;
            caidaS: number;
            tiempoS: number;
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
        this._totalSaltos = totalSaltos
        this._maxAltura = maxAltura
        this._TLimiteS = TLimiteS
        this._sPenalizaciones = sPenalizaciones
    }

    get totalSaltos() {
        return this._totalSaltos
    }

    get maxAltura() {
        return this._maxAltura
    }

    get TLimiteS() {
        return this._TLimiteS
    }

    get sPenalizaciones() {
        return this._sPenalizaciones
    }
}