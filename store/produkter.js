import axios from 'axios'

export const state = () => ({
    list: []
})
  
export const mutations = {
    set(state, produkter) {
        state.list = produkter
    }
}

export const actions = {
    async get({commit}) {
      await axios.get(process.env.API_BASE_URL + 'produkter')
        .then((res) => {
          if (res.status === 200) {
            commit('set', res.data)
          }
        }).catch((error) => {
          console.log(error)
        })
    }
}
export const getters = {
    
}