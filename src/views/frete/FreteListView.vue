<template>
    <div class="columns">
        <FreteListComponent/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import FreteListComponent from '@/components/FreteListComponent.vue';

    @Component({
        components: {
            FreteListComponent,
        },
    })

    export default class FreteListView extends Vue {}
</script>