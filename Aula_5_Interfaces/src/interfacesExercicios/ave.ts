import { Animal } from "./animal";
export class Ave implements Animal{
    nome: string;
    constructor (nome: string){
        this.nome = nome;
    }
    pelos(): boolean {
       return false;
    }
    penas(): boolean {
        return true;
    }

}