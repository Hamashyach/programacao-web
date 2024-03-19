import { gerente } from "./gerente";
import { desenvolvedor } from "./desenvolvedor";

let Gerente = new gerente("João", 5000);
let Desenvolvedor = new desenvolvedor("Maria", 4000);


console.log(gerente.calcularSalario()); 
console.log(desenvolvedor.calcularSalario()); 