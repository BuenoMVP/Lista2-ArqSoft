class AssentoAquecidoDecorator {

    constructor(carroDecorado) {

        this.carroDecorado = carroDecorado;

    }

    info() {

        return `${this.carroDecorado.info()} com Assento Aquecido`;

    }

}

export default AssentoAquecidoDecorator;