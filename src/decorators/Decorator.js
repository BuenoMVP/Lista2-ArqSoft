import GPSDecorator from './GPSDecorator.js';
import AssentoAquecidoDecorator from './AssentoAquecidoDecorator.js';

const Decorator = (chave, carro) => {

    switch(chave) {

        case 'gps':

            return  new GPSDecorator(carro);

        case 'assentoAquecido':

            return new AssentoAquecidoDecorator(carro);

        default:

            return -1;
            
    }

}

export default Decorator;