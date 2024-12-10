import CarroFactory from '../src/cars/CarroFactory.js';

describe('Testes do CarroFactory.js', () => {

    it('Testa criação de carro eletrico', () => {

        const carro = CarroFactory.criarCarro('eletrico', 'Tesla_teste')

        expect(carro.info()).toBe('Tesla_teste: Carro Elétrico')

    })

    it('Testa criação de carro hibrido', () => {

        const carro = CarroFactory.criarCarro('hibrido', 'BYD_teste')

        expect(carro.info()).toBe('BYD_teste: Carro Híbrido')

    })

    it('Testa criação de carro a combustao', () => {

        const carro = CarroFactory.criarCarro('combustao', 'Civic_teste')

        expect(carro.info()).toBe('Civic_teste: Carro a Combustão')

    })

    it('Testa criação default error', () => {

        expect(() => CarroFactory.criarCarro('Não_cadastrado', 'Erro_teste')).toThrow(`Tipo de carro 'Não_cadastrado' inválido`)

    })

})