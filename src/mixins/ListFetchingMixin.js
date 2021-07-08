import bus from '../utils/bus.js'

export default {
    created() {

    },
    mounted() {
        bus.$emit('end:spinner');
    }
}