// Cria uma classe chamada Complex para representar números complexos e escreva um programa para testá-la.
// 1. Escolha uma representação para os números complexos, usando a forma retangular ou a forma polar.
// 2. Forneça três construtores que permitam que objetos dessa classe sejam inicializados ao serem alocados na memória:
// um construtor sem parâmetros que inicializa o objeto como zero
// um construtor com um parâmetro representando a parte real; a parte imaginária será zero
// um construtor com dois parâmetros representando as partes real e imaginária

// Representação numero imaginario: Z = a + bi, com i = √-1
// 

export class Complex {
    private _real: number;
    private _imaginario: number;

    constructor ();
    constructor (real: number);
    constructor (real: number, imaginario: number);
    constructor (real?: number, imaginario?: number)  {
        if(real !== undefined && imaginario !== undefined) {
            this._real = real;
            this._imaginario = imaginario
        } else if (real !== undefined) {
            this._real = real;
            this._imaginario = 0;
        } else {
            this._real = 0;
            this._imaginario = 0;
        }
    }

    getReal (): number {
        return this._real;
    }

    getImaginario (): number {
        return this._imaginario;
    }

    setReal (real: number): void {
        this._real = real;
    }

    setImaginario(imaginario: number): void {
        this._imaginario = imaginario;
    }

    adicao(complexo: Complex): Complex {
        const realSoma = this._real + complexo.getReal();
        const imaginarioSoma = this._imaginario + complexo.getImaginario();
        return new Complex (realSoma, imaginarioSoma);
    }

    subtracao(complexo: Complex): Complex {
        const realSubtacao = this._real - complexo.getReal();
        const imaginarioSubtracao = this._imaginario - complexo.getImaginario();
        return new Complex (realSubtacao, imaginarioSubtracao);
    }

    // Z.W = (a+bi).(c+di)= (ac−bd) + (ad+bc)i
    multiplicacao (complexo: Complex): Complex {
        const realMulti = (this._real * complexo.getReal()) - (this._imaginario * complexo.getImaginario());
        const imaginarioMulti = (this._real * complexo.getImaginario()) + (this._imaginario * complexo.getReal());
        return new Complex (realMulti, imaginarioMulti);
    }

    // divisão de números complexos na forma retangular
    // Z / W = (a+bi) / (c+di) = ( (ac+bd) + (bc-ad)i ) / c² + d²
    divisao (complexo: Complex): Complex {
        const divisor = complexo.getReal() * complexo.getReal() + complexo.getImaginario() * complexo.getImaginario();
        const realDivisao = (this._real * complexo.getReal() + this._imaginario * complexo.getImaginario()) / divisor;
        const imaginarioDivisao = (this._imaginario * complexo.getReal() - this._real * complexo.getImaginario()) / divisor;
        return new Complex(realDivisao, imaginarioDivisao);
    }

    // |z|2= a2+b2
    modulo (): number {
        return Math.sqrt(this._real **2 + this._imaginario **2);
    }

    // ângulo de um número complexo: tangente inversa da razão entre suas partes
    angulo(): number {
        return Math.atan2(this._imaginario, this._real);
    }

    inversoAditivo (): Complex {
        if(this._real === 0 && this._imaginario ===0){
            throw new Error('Não é possível calcular o inverso aditivo de número complexo nulo!');
        } 
        return new Complex (-this._imaginario, -this._imaginario);   
    }

     // verificar se dois números complexos são iguais
    isIgual(complexo: Complex): boolean {
        return this._real === complexo.getReal() && this._imaginario === complexo.getImaginario();
    }

    // formula retangular número complexo
    toString () {
        if (this._imaginario > 0) {
            return `${this._real} + ${this._imaginario}i`
        } else {
            return `${this._real} - ${Math.abs(this._imaginario)}i`
        }

    }
}