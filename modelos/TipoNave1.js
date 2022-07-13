const Nave = require('./Nave')

class TipoNave1 extends Nave {

    tipo = null;

    constructor(nombre, velocidad, pais){
        super(nombre, velocidad, pais)
        this.tipo = 'TipoNave1'
    }

}

module.exports = TipoNave1