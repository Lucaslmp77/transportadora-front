import { Frete } from "@/model/Frete";
import axios, { AxiosInstance } from "axios";

export class FreteClient {
    
    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/frete',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async findById(id: number) : Promise<Frete> {
        try {
            return (await this.axiosClient.get<Frete>(`/${id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }

    }

    listAll(): Promise<any> {
        try {
            return this.axiosClient.get('')
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(frete: Frete) : Promise<void> {
        try {
            return (await this.axiosClient.post('', frete)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }
    
    public async atualizar(frete: Frete) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${frete.id}`, frete)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async atualizarStatusCargaParaEmTransporte(idFrete: number) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${idFrete}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async atualizarStatusInterrompidoParaEmTransporte(idFrete: number) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${idFrete}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async atualizarStatusEmTransporteParaInterrompido(idFrete: number) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${idFrete}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async atualizarStatusEmTransporteParaDescarga(idFrete: number) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${idFrete}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async atualizarStatusFaturado(idFrete: number) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${idFrete}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async atualizarStatusCancelado(idFrete: number) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${idFrete}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }
}