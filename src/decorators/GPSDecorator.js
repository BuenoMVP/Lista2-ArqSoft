class GPSDecorator {

    constructor(carroDecorado) {
        
        this.carroDecorado = carroDecorado;

    }

    info() {

        return `${this.carroDecorado.info()} com GPS`;

    }

}

export default GPSDecorator;
