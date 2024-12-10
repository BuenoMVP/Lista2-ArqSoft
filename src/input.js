//Aplicado conceito de Responsabilidade Única (S olid)
import readline from 'readline';

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

// Qual tipo de carro você deseja criar? (eletrico, hibrido, combustao): 
// Qual é o modelo do carro? 

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

const fecharInput = () => {

    rl.close()

}

export { perguntarTipoCarro, perguntarModeloCarro, perguntarFuncionalidades, fecharInput }