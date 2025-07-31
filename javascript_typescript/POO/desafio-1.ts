// Crie uma classe chamada Invoice que possa ser utilizado por uma loja de suprimentos
// de informática para representar uma fatura de um item vendido na loja. 
// Uma fatura deve incluir as seguintes informações como atributos: 
// o número do item faturado, a descrição do item, a quantidade comprada do item e o preço unitário do item.
// Se a quantidade não for positiva, ela deve ser configurada como 0. 
// Se o preço por item não for positivo ele deve ser configurado como 0.0. 
// Além disso, forneça um método chamado getInvoiceAmount que calcula o valor da fatura 
// (isso é, multiplica a quantidade pelo preço por item) e depois retorna o valor como um double. 


class Invoice {
    private _numDoItem: number;
    private _descricao: string;
    private _quantidadeCompada: number;
    private _precoUnitario: number;


    constructor (numDoItem: number, descricao: string, quantidadeComprada: number, precoUnitario: number) {
        this._numDoItem = numDoItem;
        this._descricao = descricao;
        this._quantidadeCompada = quantidadeComprada < 0 ? 0 : quantidadeComprada;
        this._precoUnitario = precoUnitario < 0 ? 0.0 : precoUnitario  
    }

    // get para obter os valores das variáveis de instância
    getNumDoItem (): number {
        return this._numDoItem;
    }

    getDescricao (): string {
        return this._descricao;
    }

    getQuantidadeCompada (): number {
        return this._quantidadeCompada;
    }

    getPrecoUnitario (): number {
        return this._precoUnitario;
    }


    // set para atualizar os valores das variáveis de instância
    setNumDoitem (numDoItem: number): void {
        this._numDoItem = numDoItem;
    }

    setDescricao (descricao: string): void {
       this._descricao = descricao;
    }

    setQuantidadeCompada (quantidadeCompada: number): void {
        this._quantidadeCompada = quantidadeCompada < 0 ? 0 : quantidadeCompada;
    }

    setPrecoUnitario (precoUnitario: number): void {
        this._precoUnitario = precoUnitario < 0 ? 0.0 : precoUnitario;
     }


    getInvoiceAmount (): number {
        const valorDaFatura = this._quantidadeCompada * this._precoUnitario
        return parseFloat(valorDaFatura.toFixed(2))
    }
}


export {Invoice}
