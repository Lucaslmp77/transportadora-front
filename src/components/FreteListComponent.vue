<template>
    <div class="divFreteGenerica">
        <div class="divFretePai">
            <table class="table">
                <thead>
                    <tr>
                        <th><abbr title="Position">Pos</abbr></th>
                        <th>Team</th>
                        <th><abbr title="Played">Pld</abbr></th>
                        <th><abbr title="Won">W</abbr></th>
                        <th><abbr title="Drawn">D</abbr></th>
                        <th><abbr title="Lost">L</abbr></th>
                        <th><abbr title="Goals for">GF</abbr></th>
                        <th><abbr title="Goals against">GA</abbr></th>
                        <th><abbr title="Goal difference">GD</abbr></th>
                        <th><abbr title="Points">Pts</abbr></th>
                        <th>Qualification or relegation</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th><abbr title="Position">Pos</abbr></th>
                        <th>Team</th>
                        <th><abbr title="Played">Pld</abbr></th>
                        <th><abbr title="Won">W</abbr></th>
                        <th><abbr title="Drawn">D</abbr></th>
                        <th><abbr title="Lost">L</abbr></th>
                        <th><abbr title="Goals for">GF</abbr></th>
                        <th><abbr title="Goals against">GA</abbr></th>
                        <th><abbr title="Goal difference">GD</abbr></th>
                        <th><abbr title="Points">Pts</abbr></th>
                        <th>Qualification or relegation</th>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Leicester City <strong>(C)</strong>
                        </td>
                        <td>38</td>
                        <td>23</td>
                        <td>12</td>
                        <td>3</td>
                        <td>68</td>
                        <td>36</td>
                        <td>+32</td>
                        <td>81</td>
                        <td>Qualification for the Champions League group stage</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Arsenal</td>
                        <td>38</td>
                        <td>20</td>
                        <td>11</td>
                        <td>7</td>
                        <td>65</td>
                        <td>36</td>
                        <td>+29</td>
                        <td>71</td>
                        <td>Qualification for the Champions League group stage</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Tottenham Hotspur</td>
                        <td>38</td>
                        <td>19</td>
                        <td>13</td>
                        <td>6</td>
                        <td>69</td>
                        <td>35</td>
                        <td>+34</td>
                        <td>70</td>
                        <td>Qualification for the Champions League group stage</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
    .divFretePai {
        display: flex;
        width: 800px;
    }
</style>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class FreteListComponent extends Vue {}
</script>