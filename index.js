import readline from 'readline';
import CarroFactory from './src/cars/CarroFactory.js';
import GPSDecorator from './src/decorators/GPSDecorator.js';
import AssentoAquecidoDecorator from './src/decorators/AssentoAquecidoDecorator.js';
import CarroMonitor from './src/observers/CarroMonitor.js';
import Mecanico from './src/observers/Mecanico.js';
import Proprietario from './src/observers/Proprietario.js';

const rl = readline.createInterface({

  input: process.stdin,

  output: process.stdout

});

const perguntarTipoCarro = () => {

  return new Promise(resolve => {

    rl.question('Qual tipo de carro você deseja criar? (eletrico, hibrido, combustao): ', (tipo) => {

      resolve(tipo);

    });

  });

};

const perguntarModeloCarro = () => {

  return new Promise(resolve => {

    rl.question('Qual é o modelo do carro? ', (modelo) => {

      resolve(modelo);

    });

  });

};

const perguntarFuncionalidades = () => {

  return new Promise(resolve => {

    rl.question('Deseja adicionar GPS ao carro? (sim/não): ', (gps) => {

      rl.question('Deseja adicionar assento aquecido ao carro? (sim/não): ', (assentoAquecido) => {

        resolve({ gps, assentoAquecido });

      });

    });

  });

};

const criarCarro = async () => {

  const tipo = await perguntarTipoCarro();

  const modelo = await perguntarModeloCarro();

  const carro = CarroFactory.criarCarro(tipo, modelo);

  console.log(`Carro criado: ${carro.info()}`);

  const { gps, assentoAquecido } = await perguntarFuncionalidades();

  let carroComFuncionalidades = carro;

  if (gps.toLowerCase() === 'sim') {

    carroComFuncionalidades = new GPSDecorator(carroComFuncionalidades);

    console.log(carroComFuncionalidades.info());

  }

  if (assentoAquecido.toLowerCase() === 'sim') {

    carroComFuncionalidades = new AssentoAquecidoDecorator(carroComFuncionalidades);

    console.log(carroComFuncionalidades.info());

  }

  const carroMonitor = new CarroMonitor(modelo);

  const mecanico = new Mecanico();

  const proprietario = new Proprietario();

  carroMonitor.registrarObserver(mecanico);

  carroMonitor.registrarObserver(proprietario);

  carroMonitor.alterarEstado('em manutenção');

  rl.close();

};

criarCarro();
