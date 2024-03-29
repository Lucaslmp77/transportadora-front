import { Produto } from "@/model/Produto";
import axios, { AxiosInstance } from "axios";

export class ProdutoClient {
    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/produto',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async findById(id: number) : Promise<Produto> {
        try {
            return (await this.axiosClient.get<Produto>(`/${id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }

    }

    public async listAll() : Promise<Produto[]> {
        try {
            return (await this.axiosClient.get<Produto[]>(``)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findByProdutosAtivos() : Promise<Produto[]> {
        try {
            return (await this.axiosClient.get<Produto[]>(`/ativos`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(produto: Produto) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, produto)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async atualizar(produto: Produto) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${produto.id}`, produto)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async excluir(produto: Produto) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${produto.id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

}