import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // data
    allUsers: [{
      userId: 'hoza123',
      password: '123',
      name: 'Hoza',
      address: 'Seoul',
      src: 'https://goo.gl/oqLfJR'
    },
    {
        userId: 'max123',
        password: '456',
        name: 'Max',
        address: 'Berlin',
        src: 'https://goo.gl/Ksk9B9'
    },
    {
        userId: 'lego123',
        password: '789',
        name: 'Lego',
        address: 'Busan',
        src: 'https://goo.gl/x7SpCD'
    }]
  },

  getters: { // computed와 비슷하지만, 사용할 값(state)을 function에 알려줘야 한다.
    allUsersCount: state => {
      return state.allUsers.length
    },

    // 서울에 거주하는 사람들이 수 찾기
    countOfSeoul: state => {
      let count = 0
      state.allUsers.forEach(user => {
        if (user.address === 'Seoul') count ++
      })
      return count
    },

    percentageOfSeoul: (state, getters) => {
      return Math.round(getters.countOfSeoul / getters.allUsersCount * 100) 
    }
  },

  mutations: {
    addUsers: (state, payload) => {
      return state.allUsers.push(payload)
    }
  },

  actions: {
    addUsers: ({ commit }, payload) => {
      // (context, payload)
      // { commit }
      commit('addUsers', payload)
    }
  }
})
