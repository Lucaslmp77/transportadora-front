<template>
    <div class="columns is-fullwidth">
        <h1>LISTA DE FRETES</h1>

        <div class="column">
            <p class="control">
                <input class="input" type="text" placeholder="Pesquise aqui...">
            </p>
            <p class="control">
                <button class="button is-link">
                    Buscar
                </button>
            </p>
            <router-link to="/cadastrar-frete">
                <button class="button is-primary is-focused">
                    Cadastrar Frete
                </button>
            </router-link>    
        </div>
    
        <table class="table is-bordered is-fullwidth">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Status do frete</th>
                    <th>Cidade de Origem</th>
                    <th>Cidade de Destino</th>
                    <th>Caminhão (placa)</th>
                    <th>Produto</th>
                    <th>Alterar Status</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for= 'item in freteList'>
                    <th> {{ item.cadastrar }} </th>
                    <th> 
                        
                        <span v-if="item.statusFrete === 'CARGA'" class="tag is-info"> Em Carga </span>
                        <span v-if="item.statusFrete === 'EM_TRANSPORTE'" class="tag is-info"> Em Transporte </span>
                        <span v-if="item.statusFrete === 'INTERROMPIDO'" class="tag is-warning"> Interrompido </span>
                        <span v-if="item.statusFrete === 'DESCARGA'" class="tag is-primary"> Em Descarga </span>
                        <span v-if="item.statusFrete === 'FATURADO'" class="tag is-success"> Faturado </span>
                        <span v-if="item.statusFrete === 'CANCELADO'" class="tag is-danger"> Cancelado </span>

                    </th>
                    <th> {{ item.cidadeOrigem.nome }} </th>
                    <th> {{ item.cidadeDestino.nome }} </th>
                    <th> {{ item.caminhao.placa }} </th>
                    <th> {{ item.produto.nome }} </th>
                    <th>

                        <div v-if="item.statusFrete ==='CARGA'">
                            
                            <button @click="onClickStatusEmTransporte(item.id)" class="button is-small is-default">T</button> &nbsp;
                            
                            <button @click="onClickStatusInterrompido(item.id)" class="button is-small is-default">I</button> &nbsp;

                            <button @click="onClickStatusCancelado(item.id)" class="button is-small is-default">C</button>

                        </div>
                        <div v-if="item.statusFrete ==='EM_TRANSPORTE'">
                            <button @click="onClickStatusInterrompido(item.id)" class="button is-small is-default">I</button> &nbsp;
                            <button @click="onClickStatusDescarga(item.id)" class="button is-small is-default">D</button>
                        </div>
                        <div v-if="item.statusFrete ==='INTERROMPIDO'">

                            <button @click="onClickStatusCarga(item.id)" class="button is-small is-default">CR</button> &nbsp;

                            <button @click="onClickStatusEmTransporte(item.id)" class="button is-small is-default">T</button> &nbsp;

                            <button @click="onClickStatusCancelado(item.id)" class="button is-small is-default">C</button>

                        </div>
                        <div v-if="item.statusFrete ==='DESCARGA'">
                            <button  @click="onClickStatusFaturado(item.id)" class="button is-small is-default">F</button>
                        </div>
                        <div v-if="item.statusFrete ==='FATURADO'">
                            Sem ação
                        </div>
                        <div v-if="item.statusFrete ==='CANCELADO'">
                            <button @click="onClickStatusCarga(item.id)" class="button is-small is-default">CR</button> &nbsp;
                            <button @click="onClickStatusInterrompido(item.id)" class="button is-small is-default">I</button>
                        </div>

                    </th>
                    <th><button @click="onClickDetalhar(item.id)" class="button is-warning is-focused">Detalhar</button></th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped lang="scss">
    .columns {
        h1 {
            font-size: 36px;
            color: black;
        }
        .column {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 30px;
            .input {
                border-color: blue;
            }
        }
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        padding: 30px;
    }
</style>

<script lang="ts">
    import { FreteClient } from '@/client/Frete.client'
    import { Frete } from '@/model/Frete'
    import router from '@/router'
    import { Component, Vue } from 'vue-property-decorator'
    import { RouterLink } from 'vue-router'

    @Component
    export default class FreteListView extends Vue {

        private freteClient: FreteClient = new FreteClient()
        public freteList: Frete[] = []

        public mounted(): void {
            this.listarFretes()
        }

        private listarFretes(): void {
            this.freteClient.listAll().then(
                success => {
                    this.freteList = success.data
                },
                error => {
                    console.log(error)
                }
            )
        }

        public onClickStatusEmTransporte(id: number) {
            router.push({path:`/status-frete-transporte/${id}` })
        }

        public onClickStatusInterrompido(id: number) {
            router.push({path:`/status-interrompido/${id}` })
        }

        public onClickStatusCancelado(id: number) {
            router.push({path:`/status-cancelado/${id}` })
        }

        public onClickStatusFaturado(id: number) {
            router.push({path:`/status-faturado/${id}` })
        }

        public onClickStatusCarga(id: number) {
            router.push({path:`/status-carga/${id}` })
        }

        public onClickStatusDescarga(id: number) {
            router.push({path:`/status-descarga/${id}` })
        }

        public onClickDetalhar(id: number) {
            router.push({path:`/detalhar-frete/${id}` })
        }
    }

</script>