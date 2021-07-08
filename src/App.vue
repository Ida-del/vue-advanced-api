<template>
    <div id="app">
        <tool-bar></tool-bar>
        <transition name="fade">
            <router-view></router-view>
        </transition>
        <spinner :loading="loadingStatus"></spinner>
    </div>
</template>

<script>
    import ToolBar from './components/ToolBar.vue';
    import Spinner from './components/Spinner.vue';
    import bus from './utils/bus.js';

    export default {
        components: {
            ToolBar,
            Spinner,
        },
        data() {
            return {
                loadingStatus: false,
            };
        },
        methods: {
            startSpinner() {
                this.loadingStatus = true;
            },
            endSpinner() {
                this.loadingStatus = false;
            }
        },
        created() {
            bus.$on('start:spinner', this.startSpinner);
            bus.$on('end:spinner', this.endSpinner);

        },
        beforeDestroy() {
            bus.$off('start:spinner', this.startSpinner);
            bus.$off('end:spinner', this.endSpinner);
        },
    }
</script>

<style>
    body {
        margin: 0;
    }
    
    a {
        color: #34495e;
        /* activated link */
        text-decoration: none;
    }
    
    a:hover {
        /* color: #34495e; */
        text-decoration: underline;
    }
    
    a.router-link-active {
        text-decoration: underline;
    }
    /* Router Transition */
    
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s;
    }
    
    .fade-enter,
    .fade-leave-to
    /* .fade-leave-active below version 2.1.8 */
    
    {
        opacity: 0;
    }
</style>