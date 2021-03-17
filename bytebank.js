// ---- Curso Orientação a Objetos: Javascript ---- //
// ---------------- Banco Bytebank ---------------- //

// Diferença entre classes e funções: 
// - Classes: cria-se um objeto
   
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"    

const Cliente1 = new Cliente(); //  criando uma instância da classe cliente
Cliente1.nome = 'Grazielle'; 
Cliente1.cpf = 111222333444; 

const ClienteConta1 = new ContaCorrente();
ContaCorrente.agencia = 1001; 
ContaCorrente.#saldo = 0; 
Cliente.depositar = 100;

console.log(Cliente1)
console.log(Cliente.depositar)