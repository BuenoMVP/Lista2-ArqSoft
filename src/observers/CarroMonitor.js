class CarroMonitor {
    
    constructor(modelo) {

        this.modelo = modelo;

        this.observers = [];

    }

    registrarObserver(observer) {

        this.observers.push(observer);

    }

    removerObserver(observer) {

        this.observers = this.observers.filter(obs => obs !== observer);

    }

    notificarObservers(mensagem) {

        this.observers.forEach(observer => observer.update(mensagem));

    }

    alterarEstado(estado) {

        this.notificarObservers(`${this.modelo} está ${estado}`);

    }

}

export default CarroMonitor;