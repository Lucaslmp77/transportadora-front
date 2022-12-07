<template>
    <div class="columnsFrete">
        <div class="columnFrete">
            <h1>LISTA DE FRETES</h1>
        </div>

        <router-link to="/cadastrar-frete"><button class="button is-primary is-focused">Cadastrar Frete</button></router-link>
    
        <table class="table is-bordered is-fullwidth">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Status do frete</th>
                    <th>Cidade de Origem</th>
                    <th>Cidade de Destino</th>
                    <th>Caminhão (placa)</th>
                    <th>Produto</th>
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
                            <button class="button is-small is-default">T</button> &nbsp;
                            <button class="button is-small is-default">I</button> &nbsp;
                            <button class="button is-small is-default">C</button>
                        </div>
                        <div v-if="item.statusFrete ==='EM_TRANSPORTE'">
                            <button class="button is-small is-default">I</button> &nbsp;
                            <button class="button is-small is-default">D</button>
                        </div>
                        <div v-if="item.statusFrete ==='INTERROMPIDO'">
                            <button class="button is-small is-default">CR</button> &nbsp;
                            <button class="button is-small is-default">T</button> &nbsp;
                            <button class="button is-small is-default">C</button>
                        </div>
                        <div v-if="item.statusFrete ==='DESCARGA'">
                            <button class="button is-small is-default">F</button>
                        </div>
                        <div v-if="item.statusFrete ==='FATURADO'">
                            Sem ação
                        </div>
                        <div v-if="item.statusFrete ==='CANCELADO'">
                            <button class="button is-small is-default">CR</button> &nbsp;
                            <button class="button is-small is-default">I</button>
                        </div>

                    </th>
                    <!-- @click="onClickPaginaDetalhar(item.id)" -->
                    <!-- <th><button class="button is-warning is-focused">Detalhar</button></th> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped lang="scss">
    .columnsFrete {
        .columnFrete {
            display: flex;
            align-items: center;
            h1 {
            font-size: 36px;
            color: black;
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
    import { Component, Vue } from 'vue-property-decorator'

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
    }

</script>