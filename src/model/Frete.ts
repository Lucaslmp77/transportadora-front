import { AbstractEntity } from "./AbstractEntity";
import { Caminhao } from "./Caminhao";
import { Cidade } from "./Cidade";
import { StatusFrete } from "./enum/StatusFrete";
import { Produto } from "./Produto";
import { Usuario } from "./Usuario";

export class Frete extends AbstractEntity {
    produto!: Produto
    cidadeOrigem!: Cidade
    cidadeDestino!: Cidade
    motorista!: Usuario
    caminhao!: Caminhao
    statusFrete!: StatusFrete
    quilometragemIni!: number
    quilometragemFim!: number
    totalBrutoRecebidoNota!: number
    totalLiquidoRecebido!: number
    pesoInicial!: number
    pesoFinalTransportado!: number
    precoTonelada!: number
    dataInicio!: Date
    dataFim!: Date
    observacao!: string
}