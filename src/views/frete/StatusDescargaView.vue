<template>
    <div class="colunm">
        <h1>ALTERAR STATUS DO FRETE PARA DESCARGA</h1>
        <div class="columnsStatus">
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
                    <button @click="onClickAtualizar()" class="button is-success is-focused">Salvar</button>
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

    @Component
    export default class StatusDescargaView extends Vue {

        private freteClient: FreteClient = new FreteClient()

        public frete: Frete = new Frete()

        public freteList: Frete[] = []

        private id = Number(this.$route.params.id);
        
        public mounted(): void {
            this.getFrete()
        }

        private getFrete(): void {
            this.freteClient.findById(this.id).then(
                success => {
                    this.frete = success
                    this.frete.statusFrete = 3
                },
                error => console.log(error)
            )
        }

        public onClickAtualizar(): void {
            this.freteClient.atualizar(this.frete).then(
                success => {
                    console.log('Status alterado com sucesso!!!')
                    alert("Status alterado com sucesso!!!")
                    this.frete = new Frete()
                },
                error => {
                    console.log(error)
                }
            )
        }
    }
</script>