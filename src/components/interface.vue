<template>
  <div class="interface">
        <div class="input-group mb-3">
            <input type="text" name="ss" class="form-control" placeholder="千图网链接" >
            <div class="input-group-append">
         <button class="btn btn-outline-secondary" @click="getdouy" type="button">解析</button>
            </div>
         </div>
         <div class="result">
             <img :src="figart.data.showpic" alt="" srcset="">
         </div>
  </div>
</template>

<script>
import network from '../api/network'
export default {
    name:'interface',
    data:function(){
        return{
            figart:{
                data:{
                    showpic:"http://api.63code.com/58pic/showPic.php?img_url=http://pic.qiantucdn.com/58pic/36/11/73/37c58PICyJ19zS9V5ZknT_PIC2018.jpg"
                }
            }
        }
    },
    methods:{
        getdouy(){
            let enter = $('.form-control').val()

            network.get(`/api/58pic/api.php?PicUrl=${enter}`)
            .then((res)=>{
                console.log(res)
                this.figart = res
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>

<style  scoped>
   .input-group{
       width: 50%;
       margin: 0 auto;
   }
   .interface .result{
    margin: 0 auto;
   }
   .interface .result img{
       width: 100%;
   }
</style>