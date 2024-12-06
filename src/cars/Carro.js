class Carro {

    constructor(modelo) {

        this.modelo = modelo;

    }

    info() {

        throw new Error('Método info() deve ser implementado');

    }

}

class CarroEletrico extends Carro {

    info() {

        return `${this.modelo}: Carro Elétrico`;

    }

}

class CarroHibrido extends Carro {

    info() {

        return `${this.modelo}: Carro Híbrido`;

    }

}

class CarroCombustao extends Carro {

    info() {

        return `${this.modelo}: Carro a Combustão`;

    }

}

export { CarroEletrico, CarroHibrido, CarroCombustao };
