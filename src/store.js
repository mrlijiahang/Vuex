import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count:0
    },
    getters(){
        return this.state.count+=100
    },
    // 同步
    mutations:{
        add(state,n){
            state.count +=n
        }
    },
    actions: {
        actionadd (context,n) {
          context.commit('add',n)
        }
      }
})
export default store