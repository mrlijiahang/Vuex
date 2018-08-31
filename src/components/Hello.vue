<template>
    <div>
        <div>Vuex</div> 
        <button @click="add">点我store加10</button>
        {{this.$store.state.count}}
    </div>
</template>
<script>
import store from '../store'

export default {
    mounted(){
        console.log(this.$store)
    },
    methods:{
        add(){
            this.$store.dispatch('actionadd',10)
            
        }
    }
   
    
}
</script>

