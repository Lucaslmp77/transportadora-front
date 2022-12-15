<template>
    <div class="columns">
        <div class="control">
            <tbody>
                <tr v-for='item in produtoList'>
                    <h1>{{item}}</h1>
                    <button @click="excluir(item.id)">Excluir produto</button>
                    <button @click="findById(item.id)">findById</button>
                    <button @click="editar(item)">Editar</button>
                </tr>
            </tbody>

            <router-link to="/cadastrar-produto">
                <button>Cadastrar produto</button>
            </router-link>
        </div>
    </div>
</template>

<!-- <script lang="ts">
    import { ProdutoClient } from '@/client/Produto.client';
    import { Produto } from '@/model/Produto';
    import { Component, Vue } from 'vue-property-decorator'

    @Component
    export default class ListarProdutosView extends Vue {

        produtoClient: ProdutoClient = new ProdutoClient()

        produtoList: Produto[] = []

        produto: Produto = new Produto()
        
        public mounted(): void {
            this.listarProdutos()
        }

        listarProdutos() {
            this.produtoClient.listAll().then(
                success => this.produtoList = success,
                error => console.log(error)
            )
        }

        excluirProduto(id:number) {
            this.produtoClient.excluir(id).then(
                success => {
                    window.location.reload()
                },
                error => console.log(error)
            )
        }

        findById(id: number) {
            this.produtoClient.findById(id).then(
                success => { 
                    this.produto = success
                    console.log(this.produto)
                },
                error => console.log(error)
            )
        }

        editar(produto: Produto) {
            this.produtoClient.editar(produto).then(
                success => { 
                    produto.nome = 'sucesso!!!'
                    this.produto = success
                },
                error => console.log(error)
            )
        }
    }
</script> -->

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { ProdutoClient } from '@/client/Produto.client';
    import { Produto } from '@/model/Produto';

    @Component
    export default class ListarProdutosView extends Vue {

        produtoClient: ProdutoClient = new ProdutoClient()

        produtoList: Produto[] = []

        produto: Produto = new Produto()

        public mounted(): void {
            this.listarProdutos()
        }

        listarProdutos() {
            this.produtoClient.listAll().then(
                success => this.produtoList = success,
                error => console.log(error)
            )
        }

        findById(id: number) {
            this.produtoClient.findById(id).then(
                success =>{ 
                    this.produto = success
                    console.log(this.produto)
                },
                error => console.log(error)
            )
        }

        editar(produto: Produto) {
            this.produtoClient.editar(produto).then(
                success => {
                produto.nome = "deu"
                this.produto = success
            },
            error => console.log(error)
            )
        }

        excluir(id: number) {
            this.produtoClient.excluir(id).then(
                success => 
                this.produto = success,
                error => console.log(error)
            )
        }



    }
</script>