<template>
    <div class="columnsCadastrar">
        <h1>FRETE DETALHADO</h1>
        <div class="field is-grouped">
            <div class="control">
                <label>Produto</label>
                <input class="input" type="text" v-model="frete.produto.nome">
            </div>

            <div class="control">
                <label>Cidade Origem</label>
                <input class="input" type="text"  v-model="frete.cidadeOrigem.nome">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <label>Cidade Destino</label>
                <input class="input" type="text" v-model="frete.cidadeDestino.nome">
            </div>
            <div class="control">
                <label>Motorista</label>
                <input class="input" type="text" v-model="frete.motorista.nome">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <label>Caminhão (placa)</label>
                <input class="input" type="text" v-model="frete.caminhao.placa">
            </div>
            <div class="control">
                <label>Status Frete</label>
                <input class="input" v-model="frete.statusFrete">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <label>Quilometragem Inicial</label>
                <input class="input" type="text" v-model="frete.quilometragemIni">
            </div>
            <div class="control">
                <label>Peso Final</label>
                <input class="input" type="text" v-model="frete.pesoInicial">
            </div>
            <!-- <div class="control">
                <input class="input" v-model="frete.quilometragemFim">
            </div> -->
        </div>
        <!-- <div class="field is-grouped">
            <div class="control">
                <input class="input" type="text" v-model="frete.totalBrutoRecebidoNota">
            </div>
            <div class="control">
                <input class="input" v-model="frete.totalLiquidoRecebido">
            </div>
        </div> -->
        <!-- <div class="field is-grouped">
            <div class="control">
                <input class="input" v-model="frete.pesoFinal">
            </div>
        </div> -->
        <div class="field is-grouped">
            <!-- <div class="control">
                <input class="input" type="text" v-model="frete.pesoFinalTransportado">
            </div> -->
            <div class="control">
                <label>Preço por Tonelada</label>
                <input class="input" v-model="frete.precoTonelada">
            </div>
            <div class="control">
                <label>Data de Inicio</label>
                <input class="input" type="text" v-model="frete.dataInicio">
            </div>
        </div>
        <!-- <div class="field is-grouped">
            <div class="control">
                <input class="input" v-model="frete.dataFim">
            </div>
        </div> -->
        <div class="field is-grouped">
            <div class="control">
                <label>observação</label>
                <textarea class="textarea" type="text" v-model="frete.observacao"></textarea>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <router-link to="/frete"><button class="button is-link is-light">Voltar</button></router-link>
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
        gap: 10px;
        h1 {
            font-size: 36px;
            color: black;
            margin-bottom: 15px;
        }
        label {
            color: black;
            font-weight: 600;
        }
        textarea {
            width: 400px;
            max-height: 200px;
        }
    }
</style>

<script lang="ts">
    import { FreteClient } from '@/client/Frete.client'
    import { Frete } from '@/model/Frete'
    import { Component, Vue } from 'vue-property-decorator'

    @Component
    export default class DetalharFreteView extends Vue {

        private freteClient: FreteClient = new FreteClient()

        public frete: Frete = new Frete()

        private id = Number(this.$route.params.id);

        public mounted(): void {
            this.getFrete()
        }
    
        private getFrete(): void {
            this.freteClient.findById(this.id).then(
                success => {
                    this.frete = success
                },
                error => console.log(error)
            )
        }
    }
</script>