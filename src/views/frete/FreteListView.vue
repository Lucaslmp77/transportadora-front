<template>
    <div class="columnsFrete">
        <div class="columnFrete">
            <h1>LISTA DE FRETES</h1>
            <router-link to="/cadastrar-frete"><button class="button is-primary is-focused">Cadastrar Frete</button></router-link>
        </div>
        <table class="table is-bordered">
            <thead>
                <tr>
                    <th>Num</th>
                    <th>Data</th>
                    <th>Status do frete</th>
                    <th>Cidade de Origem</th>
                    <th>Cidade de Destino</th>
                    <th>Caminhão (placa)</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td>24/11/2022</td>
                    <td>EM_TRANSPORTE</td>
                    <td>Foz do Iguaçu</td>
                    <td>Santa Catarina</td>
                    <td>BRA2E19</td>
                    <td><img class="icon-edit" src="@/assets/icon-edit.png" alt="icone editar"> <img src="@/assets/icon-delete.png" alt="icone delete"></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>24/11/2022</td>
                    <td>EM_TRANSPORTE</td>
                    <td>Foz do Iguaçu</td>
                    <td>Santa Catarina</td>
                    <td>BRA2E19</td>
                    <td><img class="icon-edit" src="@/assets/icon-edit.png" alt="icone editar"> <img src="@/assets/icon-delete.png" alt="icone delete"></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>24/11/2022</td>
                    <td>EM_TRANSPORTE</td>
                    <td>Foz do Iguaçu</td>
                    <td>Santa Catarina</td>
                    <td>BRA2E19</td>
                    <td><img class="icon-edit" src="@/assets/icon-edit.png" alt="icone editar"> <img src="@/assets/icon-delete.png" alt="icone delete"></td>
                </tr>
                <tr>
                    <th>4</th>
                    <td>24/11/2022</td>
                    <td>EM_TRANSPORTE</td>
                    <td>Foz do Iguaçu</td>
                    <td>Santa Catarina</td>
                    <td>BRA2E19</td>
                    <td><img class="icon-edit" src="@/assets/icon-edit.png" alt="icone editar"> <img src="@/assets/icon-delete.png" alt="icone delete"></td>
                </tr>
                <tr>
                    <th>5</th>
                    <td>24/11/2022</td>
                    <td>EM_TRANSPORTE</td>
                    <td>Foz do Iguaçu</td>
                    <td>Santa Catarina</td>
                    <td>BRA2E19</td>
                    <td><img class="icon-edit" src="@/assets/icon-edit.png" alt="icone editar"> <img src="@/assets/icon-delete.png" alt="icone delete"></td>
                </tr>
                <tr>
                    <th>6</th>
                    <td>24/11/2022</td>
                    <td>EM_TRANSPORTE</td>
                    <td>Foz do Iguaçu</td>
                    <td>Santa Catarina</td>
                    <td>BRA2E19</td>
                    <td><img class="icon-edit" src="@/assets/icon-edit.png" alt="icone editar"> <img src="@/assets/icon-delete.png" alt="icone delete"></td>
                </tr>
                <tr>
                    <th>7</th>
                    <td>24/11/2022</td>
                    <td>EM_TRANSPORTE</td>
                    <td>Foz do Iguaçu</td>
                    <td>Santa Catarina</td>
                    <td>BRA2E19</td>
                    <td><img class="icon-edit" src="@/assets/icon-edit.png" alt="icone editar"> <img src="@/assets/icon-delete.png" alt="icone delete"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped lang="scss">
    .columnsFrete {
        table {
            border: 1.5px solid black;
            img {
                cursor: pointer;
            }
        }
        .columnFrete {
            display: flex;
            align-items: center;
            gap: 30px;
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
    }
</style>