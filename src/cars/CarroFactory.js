import { CarroEletrico, CarroHibrido, CarroCombustao } from './Carro.js';

class CarroFactory {

    static criarCarro(tipo, modelo) {

        switch (tipo) {

            case 'eletrico':

                return new CarroEletrico(modelo);

            case 'hibrido':

                return new CarroHibrido(modelo);

            case 'combustao':

                return new CarroCombustao(modelo);

            default:

                throw new Error(`Tipo de carro '${tipo}' inválido`);

        }

    }
    
}

// Exportando a classe como default
export default CarroFactory;
