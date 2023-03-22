import { CreateStore } from 'vuex'
export default CreateStore({
    state:{
        products: []
    },
    mutations:{
        setProductos(state,payload){
            state.products=payload
        }
    },
    actions:{
        async fetchData({commit}){
            try {
                const res = await fetch('api.json')
                const data = await res.json()
                commit('setProducto', data)
            } catch (error) {
                
            }
        }
    },
    modules:{

    }
})