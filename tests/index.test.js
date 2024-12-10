import readline from 'readline';
import { criarCarro } from '../index.js';

jest.mock('readline', () => {

  return {

    createInterface: jest.fn().mockReturnValue({

      question: jest.fn(),

      close: jest.fn()

    })

  };

});

describe('Teste de criação de carro', () => {

  let rl;

  beforeEach(() => {

    rl = readline.createInterface();

    rl.question.mockClear();

    rl.close.mockClear();

  });

  it('Testa criação de um carro elétrico com GPS e assento aquecido', async () => {

    rl.question

      .mockImplementationOnce((question, callback) => callback('eletrico'))

      .mockImplementationOnce((question, callback) => callback('BYD'))

      .mockImplementationOnce((question, callback) => callback('sim'))

      .mockImplementationOnce((question, callback) => callback('sim'));

    await criarCarro();

    expect(rl.question).toHaveBeenCalledWith('Qual tipo de carro você deseja criar? (eletrico, hibrido, combustao): ', expect.any(Function))

    expect(rl.question).toHaveBeenCalledWith('Qual é o modelo do carro? ', expect.any(Function));

    expect(rl.question).toHaveBeenCalledWith('Deseja adicionar GPS ao carro? (sim/não): ', expect.any(Function));

    expect(rl.question).toHaveBeenCalledWith('Deseja adicionar assento aquecido ao carro? (sim/não): ', expect.any(Function));

    expect(rl.close).toHaveBeenCalled();

  });

  it('Testa criação de um carro a combustão apenas com GPS', async () => {

    rl.question

      .mockImplementationOnce((question, callback) => callback('combustao'))

      .mockImplementationOnce((question, callback) => callback('Ferrari'))

      .mockImplementationOnce((question, callback) => callback('sim'))

      .mockImplementationOnce((question, callback) => callback('não'));

    await criarCarro();

    expect(rl.question).toHaveBeenCalledWith('Qual tipo de carro você deseja criar? (eletrico, hibrido, combustao): ', expect.any(Function));

    expect(rl.question).toHaveBeenCalledWith('Qual é o modelo do carro? ', expect.any(Function));

    expect(rl.question).toHaveBeenCalledWith('Deseja adicionar GPS ao carro? (sim/não): ', expect.any(Function));

    expect(rl.question).toHaveBeenCalledWith('Deseja adicionar assento aquecido ao carro? (sim/não): ', expect.any(Function));

    expect(rl.close).toHaveBeenCalled();

  });

  it('Testa criação de um carro a combustão apenas com Assento Aquecido', async () => {

    rl.question

      .mockImplementationOnce((question, callback) => callback('combustao'))

      .mockImplementationOnce((question, callback) => callback('Ferrari'))

      .mockImplementationOnce((question, callback) => callback('não'))

      .mockImplementationOnce((question, callback) => callback('sim'));

    await criarCarro();

    expect(rl.question).toHaveBeenCalledWith('Qual tipo de carro você deseja criar? (eletrico, hibrido, combustao): ', expect.any(Function));

    expect(rl.question).toHaveBeenCalledWith('Qual é o modelo do carro? ', expect.any(Function));

    expect(rl.question).toHaveBeenCalledWith('Deseja adicionar GPS ao carro? (sim/não): ', expect.any(Function));

    expect(rl.question).toHaveBeenCalledWith('Deseja adicionar assento aquecido ao carro? (sim/não): ', expect.any(Function));

    expect(rl.close).toHaveBeenCalled();

  });

  it('Testa criação de um carro híbrido sem funcionalidades adicionais', async () => {

    rl.question

      .mockImplementationOnce((question, callback) => callback('hibrido'))

      .mockImplementationOnce((question, callback) => callback('Tesla'))

      .mockImplementationOnce((question, callback) => callback('não'))

      .mockImplementationOnce((question, callback) => callback('não'));

    await criarCarro();

    expect(rl.question).toHaveBeenCalledWith('Qual tipo de carro você deseja criar? (eletrico, hibrido, combustao): ', expect.any(Function));

    expect(rl.question).toHaveBeenCalledWith('Qual é o modelo do carro? ', expect.any(Function));

    expect(rl.question).toHaveBeenCalledWith('Deseja adicionar GPS ao carro? (sim/não): ', expect.any(Function));

    expect(rl.question).toHaveBeenCalledWith('Deseja adicionar assento aquecido ao carro? (sim/não): ', expect.any(Function));

    expect(rl.close).toHaveBeenCalled();

  });

});