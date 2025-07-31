// Crie uma lista encadeada em que cada elemento representa uma pessoa.
// Ela precisa conter informações como nome, idade e referência ao filho dela.


// classe nó: possui um construtor e dois atributos (Nome e próximo)
class Node {
    constructor(nome, idade, filho = null){ 
        this.nome = nome;
        this.idade = idade;
        this.filho = filho; //referência ao filho
        this.next = undefined;
    } 
}

// classe lista ligada: possui um construtor(q recebe o nó cabeça da lista) e  
// tambem os métodos referentes às operações (métodos) de manipulação da lista
class Lista{ 
    constructor(){
        this.head = undefined;
        this.count = 0;
    }

    //1-push() - adiciona um elemento no fim da lista:
    push(nome, idade, filho = null) {
        const node = new Node(nome, idade, filho); // Passando a referência do filho para o construtor
        let current; 
    
        if (this.head === undefined) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next !== undefined) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    //2-getElementeAt(position) - retorna um elemento de uma posição especifica da lista
    getElementAt (position) {
        if(position >= 0 && position <= this.count) {
            let node = this.head;
            for(let i = 0; i < position && node != null; i++){
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    //3-insertAt(element, position) - adiciona um elemento em qualquer posição da lista    
    insertAt(nome, idade, position, filho = null) {
        if (position >= 0 && position <= this.count) {
            const node = new Node(nome, idade, filho); // Passando a referência do filho para o construtor
            if(position === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            }else{
                const previous = this.getElementAt(position-1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    } 
    
    //4-removeAt(position) - remove um elemento de uma posição especifica da lista
    removeAt(position) {
        if(position >= 0 && position <= this.count){
            const current = this.head;
            if(position === 0){
                this.head = current.next;
            }else{
                const previous = this.getElementAt(position - 1);
                const current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return true;
        }
        return false;
    }

    //5-indexOf(element) - retorna a posição de um elemento da lista
    indexOf(nome) {
        let current = this.head;
        for(let i = 0; i < this.count && current != null; i++){
            if(current.nome === nome) { 
                return i;
            }else{
                current = current.next;
            }
        }
        return -1;
    }
   
    //6-isEmpty() - checa se a lista esta vazia 
    isEmpty(){
        if (this.count === 0){
            return true;
        }else{
            return false;
        }
    }

    //7-size() - retorna o tamanho da lista
    size() {
        return this.count;
    }

    //8-toString() - exibir as informações da lista de forma legível
    toString() {
        let current = this.head;
        let result = '';
        while (current) {
            result += `Nome: ${current.nome}, Idade: ${current.idade}`;
            if (current.filho) {
                result += `, Filho: ${current.filho.nome}`;
            }
            result += '\n';
            current = current.next;
        }
        return result;
    }
}

const lista = new Lista();
lista.push("Pessoa 1", 65);
lista.insertAt("Pessoa 2", 30, 1, lista.head); // Inserindo Pessoa 2 com Pessoa 1 como filho
console.log(lista.toString()); // Exibir informações formatadas da lista


let result = lista.removeAt(); //para remover uma pessoa
console.log(lista);
result = lista.indexOf("Pessoa 1"); // para exibir a posição da Pessoa 1
console.log(result);
console.log("Vazia?", lista.isEmpty()); // para mostrar se a lista está vazia
console.log("Tamanho da lista:", lista.size()); // para mostrar o tamanho da lista
