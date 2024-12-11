//Aplicado conceito de Responsabilidade Única (S olid)
import { perguntarTipoCarro, perguntarModeloCarro, perguntarFuncionalidades, fecharInput } from './src/input.js';

import CarroFactory from './src/cars/CarroFactory.js';
import Decorator from './src/decorators/Decorator.js';
import CarroMonitor from './src/observers/CarroMonitor.js';
import Mecanico from './src/observers/Mecanico.js';
import Proprietario from './src/observers/Proprietario.js';

export const criarCarro = async () => {

  const tipo = await perguntarTipoCarro();

  const modelo = await perguntarModeloCarro();

  const carro = CarroFactory.criarCarro(tipo, modelo);

  console.log(`Carro criado: ${carro.info()}`);

  const opcionais = await perguntarFuncionalidades();

  let carroComFuncionalidades = carro;

  //Aplicado conceito de Aberto / Fechado (s O lid)
  Object.entries(opcionais).forEach(([chave, opcao]) => {

    if (opcao.toLowerCase() === 'sim') {

      carroComFuncionalidades = Decorator(chave, carroComFuncionalidades);
  
    }

  })

  console.log(carroComFuncionalidades.info());

  const carroMonitor = new CarroMonitor(modelo);

  const mecanico = new Mecanico();

  const proprietario = new Proprietario();

  carroMonitor.registrarObserver(mecanico);

  carroMonitor.registrarObserver(proprietario);

  carroMonitor.alterarEstado('em manutenção');

  fecharInput();

};

criarCarro();
