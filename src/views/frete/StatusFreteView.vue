<template>
    <div class="colunm">
        <h1>ALTERAR STATUS DO FRETE PARA EM TRANSPORTE</h1>
        <div class="columnsStatus">
            <div class="field">
                <div class="control">
                    <input class="input" type="number" v-model ="frete.quilometragemIni" placeholder="Quilometragem Inicial">
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <input class="input" type="number" v-model ="frete.pesoInicial" placeholder="Peso Inicial">
                </div>
            </div>

            <div class="field">
                <label>Data de Inicio</label>
                <div class="control">
                    <input class="input" type="datetime-local" v-model ="frete.dataInicio">
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <textarea class="textarea" v-model ="frete.observacao" placeholder="Observação"></textarea>
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
    </div>
</template>

<style scoped lang="scss">

    h1 {
        padding: 20px;
        font-size: 18px;
        font-weight: bold;
        color: black;
    }
    .columnsStatus {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px; 

        input {
            width: 300px;
        }

        .textarea {
            width: 300px;
            max-height: 300px;
        }
    }
</style>

<script lang="ts">
    import { FreteClient } from '@/client/Frete.client'
    import { Frete } from '@/model/Frete'
    import { Component, Vue } from 'vue-property-decorator'
    import { Prop } from 'vue-property-decorator'

    @Component
    export default class StatusFreteView extends Vue {

        private freteClient: FreteClient = new FreteClient()

        public frete: Frete = new Frete()

        public freteList: Frete[] = []

        // @Prop({type: Number, required: false})
        // private readonly id!: number

        // private id!: number

        // id = this.$route.params.id

        private id = Number(this.$route.params.id);

        public mounted(): void {
            this.getFrete()
            console.log(this.id)
        }

        private getFrete(): void {
            this.freteClient.findById(this.id).then(
                success => {
                    this.frete = success
                },
                error => console.log(error)
            )
        }

        public onClickCadastrar(): void {
            
            this.freteClient.atualizar(this.frete).then(
                success => {
                    console.log('Registro Cadastrado com sucesso!!!')
                    this.frete = new Frete()
                },
                error => {
                    console.log(error)
                }
            )
        }
    }
</script>