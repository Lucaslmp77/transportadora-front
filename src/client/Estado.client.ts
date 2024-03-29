import { Estado } from "@/model/Estado";
import axios, { AxiosInstance } from "axios";

export class EstadoClient {
    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/estado',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async findById(id: number) : Promise<Estado> {
        try {
            return (await this.axiosClient.get<Estado>(`/${id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }

    }

    public async findAll() : Promise<Estado[]> {
        try {
            return (await this.axiosClient.get<Estado[]>(``)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findByEstadosAtivos() : Promise<Estado[]> {
        try {
            return (await this.axiosClient.get<Estado[]>(`/ativos`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(estado: Estado) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, estado)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async atualizar(estado: Estado) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${estado.id}`, estado)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async excluir(estado: Estado) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${estado.id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

}