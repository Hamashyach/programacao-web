import { Animal } from "./animal";
export class Mamifero implements Animal{
    nome: string;
    constructor (nome: string){
        this.nome = nome;
    }
    pelos(): boolean {
        return true;
    }
    penas(): boolean {
        return false
    }
    
}