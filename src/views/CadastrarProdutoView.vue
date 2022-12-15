<template>
    <div class="colunm">
        <h1>CADASTRAR PRODUTO</h1>
        <div class="columnsStatus">
            <div class="field">
                <div class="control">
                    <input class="input" v-model="produto.nome">
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button @click="onclickCadastrar()" class="button is-success is-focused">Salvar</button>
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
    import { ProdutoClient } from '@/client/Produto.client';
    import { Produto } from '@/model/Produto';
    import { Component, Vue } from 'vue-property-decorator'

    @Component
    export default class CadastrarProdutoView extends Vue {

        produtoClient: ProdutoClient = new ProdutoClient()

        produto: Produto = new Produto()
        
        public mounted(): void {
        }

        // onclickCadastrar() {
        //     this.produtoClient.cadastrar(this.produto).then(
        //         success =>  this.produtoClient,
        //         error => console.log(error)
        //     )
        // }

        // onclickCadastrar() {
        //     this.produtoClient.cadastrar(this.produto).then(
        //         success => this.produtoClient,
        //         error => console.log(error)
        //     )
        // }

        onclickCadastrar() {
            this.produtoClient.cadastrar(this.produto).then(
                success => this.produtoClient,
                error => console.log(error)
            )
        }
    }
</script>