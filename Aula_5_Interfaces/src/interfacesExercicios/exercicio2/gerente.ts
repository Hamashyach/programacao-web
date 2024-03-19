import { funcionario } from "./funcionario";

export class gerente implements funcionario{
    static calcularSalario(): any {
        throw new Error("Method not implemented.");
    }
    nome: string;
    salario: number;
    cargo: string;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = "Gerente";
    }
    calcularSalario(): number {
        return this.salario;
    }
}