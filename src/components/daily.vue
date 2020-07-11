<template>
  <div class="daily">
      <img id="Img" :src="bing.data" alt="">
  </div>
</template>

<script>
import network from '../api/network'
import axios from 'axios'
export default {
    name:'daily',
    data:function(){
        return{
            bing:'url'
        }
    },
    created(){

        axios.get('api/bing/api.php',
        {
          params:'',
          responseType: "arraybuffer", 

        }).then(res => {
          //处理直接返回的数据流图片
          return 'data:image/png;base64,' + btoa(
          new Uint8Array(res.data)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
            // console.log(response)
        // return 'data:image/png;base64,' + btoa(
        // new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        // )
        })
        .then(data => {
            // console.log(data)
        $('#Img').attr('src', data);
        })
        .catch(ex => {
        console.error(ex);
        });
        // .then(data => {
        // console.log(data)
        // this.bing = data
        // })
        // .then(data => {
        //      console.log(data) //图片地址 <img src='data' />
         
        //     })
        // network.get('/api/bing/api.php')
        // .then((res)=>{
        //     console.log(res)
         
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
    }
}
</script>

<style  scoped>
    #Img{
        width: 100%;
        /* height: 100%; */
    }
</style>