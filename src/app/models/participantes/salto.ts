import { sPenalizaciones } from "src/app/interfaces/interfaces";
import { Participante } from "./participante";

export class Salto extends Participante {
    public _totalSaltos: number
    public _maxAltura: number
    public _TLimiteS: number
    public _derriboS: number
    public _rehusoS: number
    public _caidaS: number
    public _tiempoS: number

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
        derriboS: number,
        rehusoS: number,
        caidaS: number,
        tiempoS: number
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
        this._derriboS = derriboS
        this._rehusoS = rehusoS
        this._caidaS = caidaS
        this._tiempoS = tiempoS
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

    get derriboS() {
        return this._derriboS
    }

    get rehusoS() {
        return this._rehusoS
    }

    get caidaS() {
        return this._caidaS
    }

    get tiempoS() {
        return this._tiempoS
    }

    Stiempo(): any {
        let tiemp: number
        if (this._TLimiteS < this._tiempoS) {
            tiemp = this._tiempoS * 1
            return(tiemp)
        } else {
            tiemp = 0
            return(tiemp)
        }
    }

    penalizaciones() {
        let penal: number
        penal = (this._derriboS * 4) + (this._rehusoS * 10) + (this._caidaS * 20) + (this.Stiempo())
        return (penal)
    }

    override puntosT(): any {
        let puntosT: number
        puntosT = 100 - this.penalizaciones()
        return (puntosT)
    }
}