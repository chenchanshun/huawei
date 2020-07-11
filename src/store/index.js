import Vue from 'vue'
import Vuex from 'vuex'
import network from '../api/network'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // playdate:[],
    // playlistid:['6824332657489352967',
    //             '6844425548114958600',
    //             '6779496724458117390',
    //             '6790995704228616456',
    //             '6830013906128214286',
    //             '6831460051857709320'
    //           ]
  },
  mutations: {
    // getplay(state){
    //   console.log('正在获取数据')
    //     for (let i = 0; i < state.playlistid.length; i++) {
    //     //   console.log(`/api/pipixia/api.php?url=https://h5.pipix.com/item/${String(state.playlistid[i])}`)
    //       // console.log(`/api/pipixia/api.php?url=https://h5.pipix.com/item/${String(state.playlistid[i])}`)
    //       network.get(`/api/pipixia/api.php?url=https://h5.pipix.com/item/${String(state.playlistid[i])}`)
    //       .then((res)=>{
           
    //         // console.log(res.data.url1)
    //         state.playdate.push(res)
    //         console.log(state.playdate)
           
    //       })
    //       .catch(err=>{
    //         console.log(err)
    //       })
          
    //     }
       
      
    // }
  },
  getters:{
    // getplaylist(state){
    //   return state.playdate
    // }
  },
  actions:{
  //  getplays({commit}){
  //    commit('getplay')
  //  }
  },
  modules: {
  }
})
