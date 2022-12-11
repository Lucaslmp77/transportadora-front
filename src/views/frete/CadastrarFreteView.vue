<template>
    <div class="columnsCadastrar">
        <h1>CADASTRO DE FRETE</h1>
        <div class="field is-grouped">
            <div class="control">
                <label>Estado Cidade Origem</label>
                <div class="select is-fullwidth">
                    <select @change="changeEstadoOrigem()" id="selectEstadoOrigem">
                        <option value="" selected disabled hidden>Selecione o Estado</option>
                        <option :value="item.id"
                            v-for= "item in estadoOrigemList" :key="item.id"> {{ item.estado }} </option>
                    </select>
                </div>
            </div>
            <div class="control">
                <label>Cidade Origem</label>
                <div class="select is-fullwidth">
                    <select class="selectCidadeOrigem" v-model ="frete.cidadeOrigem">
                        <option :value="item" 
                            v-for= "item in cidadeOrigemList" :key="item.id"> {{ item.nome }} </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <label>Estado Cidade Destino</label>
                <div class="select is-fullwidth">
                    <select @change="changeEstadoDestino()" id="selectEstadoDestino">
                        <option value="" selected disabled hidden>Selecione o Estado</option>
                        <option :value="item.id" 
                            v-for= "item in estadoDestinoList" :key="item.id"> {{ item.estado }} </option>
                    </select>
                </div>
            </div>
            <div class="control">
                <label>Cidade Destino</label>
                <div class="select is-fullwidth">
                    <select v-model ="frete.cidadeDestino">
                        <option :value="item" 
                            v-for= "item in cidadeDestinoList" :key="item.id"> {{ item.nome }} </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <label>Produto</label>
                <div class="select is-fullwidth">
                    <select v-model ="frete.produto">
                        <option :value="item" 
                            v-for= "item in produtoList" :key="item.id"> {{ item.nome }} </option>
                    </select>
                </div>
            </div>
            <div class="control">
                <label>Caminhão</label>
                <div class="select is-fullwidth">
                    <select v-model ="frete.caminhao">
                        <option :value="item" 
                            v-for= "item in caminhaoList" :key="item.id"> {{ item.placa }} </option>
                    </select>
                </div>
            </div>
            <div class="control">
                <label>Motorista</label>
                <div class="select is-fullwidth">
                    <select v-model ="frete.motorista">
                        <option :value="item" 
                            v-for= "item in motoristaList" :key="item.id"> {{ item.nome }} </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <input class="input" type="text" v-model="frete.precoTonelada" placeholder="Preço por tonelada">
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <router-link to="/frete"><button class="button is-link is-light">Voltar</button></router-link>
            </div>
            <div class="control">
                <button @click="onClickCadastrar()" class="button is-success is-focused">Salvar</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .columnsCadastrar {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;
        h1 {
            font-size: 36px;
            color: black;
            margin-bottom: 15px;
        }
    }
</style>

<script lang="ts">
    import { CaminhaoClient } from '@/client/Caminhao.client'
    import { CidadeClient } from '@/client/Cidade.client'
    import { EstadoClient } from '@/client/Estado.client'
    import { FreteClient } from '@/client/Frete.client'
    import { ProdutoClient } from '@/client/Produto.client'
    import { UsuarioClient } from '@/client/Usuario.client'
    import { Caminhao } from '@/model/Caminhao'
    import { Cidade } from '@/model/Cidade'
    import { Estado } from '@/model/Estado'
    import { Frete } from '@/model/Frete'
    import { Produto } from '@/model/Produto'
    import { Usuario } from '@/model/Usuario'
    import { Component, Vue } from 'vue-property-decorator'

    @Component
    export default class CadastrarFreteView extends Vue {

        private freteClient: FreteClient = new FreteClient()
        private produtoClient: ProdutoClient = new ProdutoClient()
        private caminhaoClient: CaminhaoClient = new CaminhaoClient()
        private motoristaClient: UsuarioClient = new UsuarioClient()
        private estadoClient: EstadoClient = new EstadoClient()
        private cidadeClient: CidadeClient = new CidadeClient()

        public frete: Frete = new Frete()

        public produtoList: Produto[] = []
        public caminhaoList: Caminhao[] = []
        public motoristaList: Usuario[] = []
        public estadoOrigemList: Estado[] = []
        public estadoDestinoList: Estado [] = []
        public cidadeOrigemList: Cidade[] = []
        public cidadeDestinoList: Cidade[] = []

        public mounted(): void {
            this.selectProdutoList()
            this.selectCaminhaoList()
            this.selectMotoristaList()
            this.selectEstadoOrigemList()
            this.selectEstadoDestinoList()
        }

        public onClickCadastrar(): void {
            
            this.freteClient.cadastrar(this.frete).then(
                success => {
                    console.log('Registro Cadastrado com sucesso!!!')
                    this.frete = new Frete()
                },
                error => {
                    console.log(error)
                }
            )
        }

        private selectProdutoList(): void {
            this.produtoClient.findByProdutosAtivos().then(
                success => this.produtoList = success,
                error => console.log(error)
            )
        }

        private selectCaminhaoList(): void {
            this.caminhaoClient.findByCaminhoesAtivos().then(
                success => this.caminhaoList = success,
                error => console.log(error)
            )
        }

        private selectMotoristaList(): void {
            this.motoristaClient.findByMotoristasAtivos().then(
                success => this.motoristaList = success,
                error => console.log(error)
            )
        }

        private selectEstadoOrigemList(): void {
            this.estadoClient.findByEstadosAtivos().then(
                success => this.estadoOrigemList = success,
                error => console.log(error)
            )
        }

        private selectEstadoDestinoList(): void {
            this.estadoClient.findByEstadosAtivos().then(
                success => this.estadoDestinoList = success,
                error => console.log(error)
            )
        }

        public changeEstadoOrigem(): void {
            var selectEstado = (<HTMLSelectElement>document.getElementById('selectEstadoOrigem')).value;

            console.log(selectEstado)

            this.cidadeClient.findByEstado(Number(selectEstado)).then(
                success => this.cidadeOrigemList = success,
                error => console.log(error)
            )
        }

        public changeEstadoDestino(): void {
            var selectEstado = (<HTMLSelectElement>document.getElementById('selectEstadoDestino')).value;

            console.log(selectEstado)

            this.cidadeClient.findByEstado(Number(selectEstado)).then(
                success => this.cidadeDestinoList = success,
                error => console.log(error)
            )
        }

    }

</script>