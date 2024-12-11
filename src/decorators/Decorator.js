import GPSDecorator from './GPSDecorator.js';
import AssentoAquecidoDecorator from './AssentoAquecidoDecorator.js';

const arrDecorators = {

    gps: GPSDecorator,

    assentoAquecido: AssentoAquecidoDecorator

}

const Decorator = (chave, carro) => {

    const decorator = arrDecorators[chave];

    if (decorator) { 

        return new decorator(carro); 

    } else { 

        throw new Error('Decorator não encontrado!'); 

    }

}

export default Decorator;