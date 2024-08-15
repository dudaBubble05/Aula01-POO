"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTAR A CLASSE QUE QUERO UTILIZARF
const Pessoa_1 = require("./Pessoa");
// INSTANCIAR (CRIAR OBJETO)
const pessoa1 = new Pessoa_1.Pessoa(`Felisberto`, 25);
const pessoa2 = new Pessoa_1.Pessoa(`Maria`, 21);
console.log(pessoa1.aniversario());
console.log(pessoa2.correr());
//# sourceMappingURL=TestePessoa.js.map