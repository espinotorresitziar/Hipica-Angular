import { cPenalizaciones } from 'src/app/interfaces/interfaces';
import { Participante } from '../participantes/participante';

export class Cross extends Participante {
    public _TLimiteC: number
    public _rehusoC: number
    public _caidaC: number
    public _tiempoC: number

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
        rehusoC: number,
        caidaC: number,
        tiempoC: number,
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
        this._rehusoC = rehusoC
        this._caidaC = caidaC
        this._tiempoC = tiempoC
    }

    get TLimiteC() {
        return this._TLimiteC
    }

    get rehusoC() {
        return this._rehusoC
    }

    get caidaC() {
        return this._caidaC
    }

    get tiempoC() {
        return this._tiempoC
    }

    tiempo(): any {
        let tiem: number
        if (this._TLimiteC < this._tiempoC) {
            tiem = this._tiempoC * 1
            return(tiem)
        } else {
            tiem = 0
            return(tiem)
        }
    }

    penalizaciones() {
        let penal: number
        penal = (this._rehusoC * 10) + (this._caidaC * 20) + (this.tiempo())
        return (penal)
    }

    override puntosT(): any {
        let puntosT: number
        puntosT = 100 - this.penalizaciones()
        return (puntosT)
    }
}