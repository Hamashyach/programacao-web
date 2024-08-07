import { Productentity } from "../model/entity/Productentity";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService{

    productRepository: ProductRepository = new ProductRepository();

    async cadastrarProduto(produtoData: any): Promise<Productentity> {
        const { name, price, expirationDate } = produtoData;
        
        const produto = new Productentity(undefined, name, price, expirationDate)

        const novoProduto =  await this.productRepository.insertProduct(produto);
        console.log("Service - Insert ", novoProduto);
        return novoProduto;
    }

    async atualizarProduto(produtoData: any): Promise<Productentity> {
        const { id, name, price, expirationDate } = produtoData;

        const produto = new Productentity(id, name, price, expirationDate)

        await this.productRepository.updateProduct(produto);
        console.log("Service - Update ", produto);
        return produto;
    }

    async deletarProduto(produtoData: any): Promise<Productentity> {
        const { id, name, price, expirationDate } = produtoData;

        const produto = new Productentity(id, name, price, expirationDate)

        await this.productRepository.deleteProduct(produto);
        console.log("Service - Delete ", produto);
        return produto;
    }

    async filtrarProduto(produtoData: any): Promise<Productentity> {
        const idNumber = parseInt(produtoData, 10);

        const produto =  await this.productRepository.filterProduct(idNumber);
        console.log("Service - Filtrar", produto);
        return produto;
    }

    async listarTodosProdutos(): Promise<Productentity[]> {
        const produto =  await this.productRepository.filterAllProduct();
        console.log("Service - Filtrar Todos", produto);
        return produto;
    }

}