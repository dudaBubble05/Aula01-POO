// IMPORTAR A CLASSE QUE QUERO UTILIZARF
import { Pessoa } from "./Pessoa";

// INSTANCIAR (CRIAR OBJETO)
const pessoa1: Pessoa = new Pessoa(`Felisberto`, 25);
const pessoa2: Pessoa = new Pessoa(`Maria`, 21);

console.log(pessoa1.aniversario());
console.log(pessoa2.correr());

