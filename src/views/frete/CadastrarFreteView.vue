<template>
    <div class="columnsCadastrar">
        <form class="formCadastrar">
            <h1>CADASTRO DE FRETE</h1>
            <div class="primeiraColuna">
                <div class="field">
                    <label class="label">Cidade de Origem</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Ex: Foz do Iguaçu">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Cidade de Destino</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Ex: Curitiba">
                    </div>
                </div>
            </div>
            <div class="primeiraColuna">
                <div class="field">
                    <label class="label">Produto</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Ex: Farinha de trigo">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Caminhão</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Ex: BRA2E19">
                    </div>
                </div>
            </div>

            <div class="primeiraColuna">
                <div class="field">
                    <label class="label">Motorista</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Ex: Roberto Augusto">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Preço por tonelada</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Ex: R$ 35.000,00">
                    </div>
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-primary is-focused">Salvar</button>
                </div>
                <div class="control">
                    <router-link to="/frete"><button class="button is-link is-light">Voltar</button></router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped lang="scss">
    .columnsCadastrar {
        display: flex;
        align-items: center;
        flex-direction: column;
        form {
            padding: 30px 30px;
            display: flex;
            align-items: center;
            flex-direction: column;
            border: 1.5px solid black;
            border-radius: 12px;
            gap: 10px;
            h1 {
                font-size: 36px;
                color: black;
                margin-bottom: 15px;
            }
            .primeiraColuna {
                display: flex;
                gap: 10px;
                .label {
                    display: flex;
                }
            }
        }
    }
</style>