<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
    import ListItem from '../components/ListItem.vue';
    import bus from '../utils/bus.js';
    import ListMixin from '../mixins/ListFetchingMixin.js';

    export default {
        components: {
            ListItem,
        },
        mixins: [ListMixin],
        // mounted() {
        //     bus.$emit('end:spinner');
        // }


    }
</script>