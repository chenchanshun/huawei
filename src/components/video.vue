<template>
  <div class="video">
      <div class="titel">
        <span>热门推荐</span>
        <span @click="replace">换一批</span>
        <span @click="replacephone">下一个</span>
      </div>
      <ul class="video-list" >
          <div class="scroll ">
          <li class="list" v-for=" (index,value) in playdate"  :key="value" @click="play(value)">
              <!-- <p>{{index.data.url2}}</p> -->
              <!-- <p>{{index.data.videos[(JSON.stringify(index.data.img)).slice(-11,-1)].url}}</p> -->
                <div class="bg" ref="play" >
                    <svg t="1593920374105" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7280" width="200" height="200"><path d="M512 42.666667C253.866667 42.666667 42.666667 251.733333 42.666667 512s211.2 469.333333 469.333333 469.333333c260.266667 0 469.333333-209.066667 469.333333-469.333333S772.266667 42.666667 512 42.666667zM512 938.666667C277.333333 938.666667 85.333333 746.666667 85.333333 512 85.333333 277.333333 277.333333 85.333333 512 85.333333c234.666667 0 426.666667 192 426.666667 426.666667C938.666667 746.666667 746.666667 938.666667 512 938.666667zM716.8 494.933333 716.8 494.933333l-4.266667-2.133333c0 0 0 0-2.133333 0l-292.266667-168.533333 0 0C413.866667 322.133333 409.6 320 405.333333 320c-12.8 0-21.333333 8.533333-21.333333 21.333333l0 341.333333c0 12.8 8.533333 21.333333 21.333333 21.333333 4.266667 0 8.533333-2.133333 12.8-4.266667l0 0 292.266667-168.533333c0 0 0 0 2.133333 0l4.266667-2.133333 0 0c4.266667-4.266667 8.533333-10.666667 8.533333-17.066667S721.066667 499.2 716.8 494.933333zM426.666667 646.4 426.666667 377.6 661.333333 512 426.666667 646.4z" p-id="7281" fill="#ffffff"></path></svg>
                  </div>
                <video controlslist="nodownload   noremoteplayback" width=100% height=100%  ref="video"  preload="none"   :poster ="index.data.img"  controls>
                  <!-- 将img的地址转换成字符串 截取从倒数11位截取到-1位 取出ID -->
                  
                    <source  :src="index.data.videos[(JSON.stringify(index.data.img)).slice(-11,-1)].url"  type="video/mp4">
                </video>
                <!-- http://v3-ppx.ixigua.com/1db1f5f02b0a7a665ee32a19fbf578ee/5f004393/video/m/2203326c968353c48eb897d349c057a59ff11663a3b8000033c6bdda95f6/?a=1319&br=4818&bt=1606&cr=0&cs=0&dr=6&ds=6&er=&l=20200704155328010014043148241BA2CA&lr=&mime_type=video_mp4&qs=0&rc=amRtd214bWg3dTMzZmYzM0ApZjVoODxkNDs6NzM0PDNlNGc0cGUvZDIzZXJfLS0zMS9zc181Xi4yYF5hLV4wNDZfLy06Yw%3D%3D&vl=&vr= -->
                <!-- <p>{{this.playlist}}</p> -->
             </li>                <!-- preload="none" -->
            </div>
      </ul>
  </div>
</template>

<script>
// import {mapState,mapGetters} from 'vuex'
    import network from '../api/network'
    export default {
    name:'videos',
    watch:{
      currentplaylist(n,o){
        console.log('正在获取数据')
        var obj = {}
        var reluse = []
        for (let i = 0; i < this.playlistid[this.currentplaylist].length; i++) {
        //   console.log(`/api/pipixia/api.php?url=https://h5.pipix.com/item/${String(state.playlistid[i])}`)
          // console.log(`/api/pipixia/api.php?url=https://h5.pipix.com/item/${String(state.playlistid[i])}`)
          network.get(`/api/pipigx/api.php?url=http://h5.ippzone.com/pp/post/${String(this.playlistid[this.currentplaylist][i])}`)
          .then((res)=>{
           
            reluse.push(res)
            obj.data = reluse
           console.log(reluse)
           console.log(obj)
           this.playdate = obj.data
           
          })
          .catch(err=>{
            console.log(err)
          })
         

        }
       
      }
        // playdate(){
        //     let listdata = this.getplaylist
        //     let result = []
        //     // console.log(listdata)
        //   for (var key in listdata) {
        //     //   console.log(listdata[key]);
        //       result.push(listdata[key])
        //       this.playlist.push(listdata[key])
        //       console.log(this.playlisturl.push(String(listdata[2].data.url2)))
        //   }
          
        //   console.log(this.playlisturl[2])
          
        // }
    },
    data:function(){
        return{
            currentplaylist:0,    
            playlistid:[
                       ['251542030237',
                        '299474486858',
                        '318147568497',
                        '309373099712'],
                        ['308920097624',
                        '291069154518',
                        '311185004230',
                        '316151100482'],
                        ['294911095240',
                        '318030098595',
                        '317828771520',
                        '290549040837'],
                        ['320429256249',
                        '311587667375',
                        '327442122532',
                        '322358656052']    
                       

            ], 
            playdate:[],
            currentplay:0

        }
    },
  
    created () {
      
      console.log('正在获取数据')
        for (let i = 0; i < this.playlistid[this.currentplaylist].length; i++) {
        //   console.log(`/api/pipixia/api.php?url=https://h5.pipix.com/item/${String(state.playlistid[i])}`)
          // console.log(`/api/pipixia/api.php?url=https://h5.pipix.com/item/${String(state.playlistid[i])}`)
          network.get(`/api/pipigx/api.php?url=http://h5.ippzone.com/pp/post/${String(this.playlistid[this.currentplaylist][i])}`)
          .then((res)=>{
           
            console.log(res.data)
           
              // this.playdate = []
            
            this.playdate.push(res)
            console.log(this.playdate)
           
          })
          .catch(err=>{
            console.log(err)
          })
         

        }
              window.onresize = ()=>{
              if(document.documentElement.clientWidth+ 21 > 991){
                for (let i = 0; i < this.$refs.play.length; i++) {
                 $(this.$refs.play[i]).next().attr("controls","controls")
                 this.$refs.play[i].style.display = 'none'

                }
              // if($(this.$refs.play[value]).next().get(0) !== true){
              // }
            }else{

              for (let i = 0; i < this.$refs.play.length; i++) {
               $(this.$refs.play[i]).next().removeAttr("controls")
               if($(this.$refs.play[i]).next().get(0) == true){
                this.$refs.play[i].style.display = 'block'
              }
              }
              
              

            }
     
          }
      
    
    },
      methods:{
        replace(){
          if(this.currentplaylist < 3){
            this.currentplaylist++
            console.log(this.currentplaylist)
          }
          else{
            this.currentplaylist = 0
          }
        
        },
         replacephone(){
          
          let currentplay = document.getElementsByClassName('list')
          if(this.currentplay>2){
            this.currentplay= 0
          }
          this.currentplay ++;
          for (let i = 0; i < currentplay.length; i++) {
            console.log(currentplay[i] ,currentplay[i].style.top = -(1019*this.currentplay)+ 'px' )
            
          }
         },
        play(value){
                
          var offsetWid = document.documentElement.clientWidth+ 21
          let thisplay = $(this.$refs.play[value]).next().get(0)
          
        if(offsetWid <= 991){
          if(thisplay.paused== true){
            //判断播放器状态
            this.$refs.play[value].style.display = 'none'
            thisplay.play()
          }else{
              this.$refs.play[value].style.display = 'block'
              thisplay.pause()
               }
                  }
          //监听视图 改变播放键的显示 隐藏
          // window.onresize = ()=>{
          //     if(document.documentElement.clientWidth+ 21 > 991){
          //       for (let i = 0; i < this.$refs.play.length; i++) {
          //        $(this.$refs.play[i]).next().attr("controls","controls")
          //       }
          //     // if($(this.$refs.play[value]).next().get(0) !== true){
          //     this.$refs.play[value].style.display = 'none'
          //     // }
          //   }else{

          //     for (let i = 0; i < this.$refs.play.length; i++) {
          //      $(this.$refs.play[i]).next().removeAttr("controls")
          //     }
          //     if($(this.$refs.play[value]).next().get(0) == true){
          //       this.$refs.play[value].style.display = 'block'
          //     }
              

          //   }
     
          // }

        
      
      
      }
      
        },
        // refr (value){
        //     console.log( this.$refs.video[value].src = 'http://v3-ppx.ixigua.com/1bfbb048df05182694c41499a3cbec4b/5f005241/video/m/22017c98c9eedaa4fefb9afe3ee3da409f711661397700002462eada604e/?a=1319&br=5499&bt=1833&cr=0&cs=0&dr=6&ds=6&er=&l=202007041656020100140431461C1D28F4&lr=&mime_type=video_mp4&qs=0&rc=amhtaWtzZG9rdTMzZ2YzM0ApNGQ3OTw3Z2U2NzU3OGY2M2dsajZnYi8tXjFfLS1jMS9zczAtYmMxNTEzMi8tYy5fYDY6Yw%3D%3D&vl=&vr=')
        //    'http://v3-ppx.ixigua.com/1bfbb048df05182694c41499a3cbec4b/5f005241/video/m/22017c98c9eedaa4fefb9afe3ee3da409f711661397700002462eada604e/?a=1319&br=5499&bt=1833&cr=0&cs=0&dr=6&ds=6&er=&l=202007041656020100140431461C1D28F4&lr=&mime_type=video_mp4&qs=0&rc=amhtaWtzZG9rdTMzZ2YzM0ApNGQ3OTw3Z2U2NzU3OGY2M2dsajZnYi8tXjFfLS1jMS9zczAtYmMxNTEzMi8tYy5fYDY6Yw%3D%3D&vl=&vr='
        // }
    
    //   beforeUpdate(){
            // for(var i=0;i<this.playdate.length;i++){
            //     console.log('修改了')
            //     console.log('这是引用'+this.playlisturl[1],'这是网址http://v3-ppx.ixigua.com/e8689fb618e4bc09d5321ebce63bc82d/5f0044dc/video/m/2203326c968353c48eb897d349c057a59ff11663a3b8000033c6bdda95f6/?a=1319&br=4818&bt=1606&cr=0&cs=0&dr=6&ds=6&er=&l=202007041558570100140431470B1BB214&lr=&mime_type=video_mp4&qs=0&rc=amRtd214bWg3dTMzZmYzM0ApZjVoODxkNDs6NzM0PDNlNGc0cGUvZDIzZXJfLS0zMS9zc181Xi4yYF5hLV4wNDZfLy06Yw%3D%3D&vl=&vr=')
            //     this.$refs.video[i].src = this.playdate.data.url2[2]

              
            // }
        //   var current = []
        //  for(let i=0;i<this.playdate.length;i++){
        //         console.log('修改了')
        //         console.log('这是引用'+this.playlisturl[1],'这是网址http://v3-ppx.ixigua.com/e8689fb618e4bc09d5321ebce63bc82d/5f0044dc/video/m/2203326c968353c48eb897d349c057a59ff11663a3b8000033c6bdda95f6/?a=1319&br=4818&bt=1606&cr=0&cs=0&dr=6&ds=6&er=&l=202007041558570100140431470B1BB214&lr=&mime_type=video_mp4&qs=0&rc=amRtd214bWg3dTMzZmYzM0ApZjVoODxkNDs6NzM0PDNlNGc0cGUvZDIzZXJfLS0zMS9zc181Xi4yYF5hLV4wNDZfLy06Yw%3D%3D&vl=&vr=')
        //         this.$refs.video[i].src = this.playlisturl[1]

              
        //     }

    //  },
    computed:{
    //     ...mapState([
    //     // 'playdate'
    // ]), 
        // ...mapGetters([
        // 'getplaylist'
        // ])
        
    }
}
</script>

<style  scoped>
*{
    padding: 0px;
    margin: 0px;
}
.video{
    width: 600px;
    height: 1000px;
    /* border: 1px solid red; */
    margin: 0 auto;
    padding: 14px;
}
 .video .titel{
     display: flex;
     
     justify-content: space-between;
     height: 20px;
     width: 100%;
     border-left: 5px solid rgb(216, 22, 22);
     line-height: 20px;
     padding-left: 10px;
 }

  .video .titel span:nth-child(3){
    display: none;
  }
 .video .video-list{
     width: 100%;
     margin-top: 10px;
     display: flex;
     flex-wrap: wrap;
 }
  .video .video-list .scroll{
    display: flex;
    width: 100%;
    position: relative;
    flex-wrap: wrap;
    height: 100%;
    overflow: hidden;
 }
 .video-list .list{
     position: relative;
     top: 10px;
     left: 0px;
     box-sizing: border-box;
     list-style: none;
     border: 5px solid slategray;
     border-image: url('../assets/image/border-image.jpg') 30 30 round;
     width: 50%;
     box-sizing: border-box;
     height: 600px;
     /* border: 1px solid blue; */

 }
 .video-list .list .bg{
   position: absolute;
   width: 200px;
   height: 200px;
   top:50%;
   margin-top: -25%;
   left: 50%;
   transform: translateX(-50%);
   display: none;
 }
  .video-list .list .bg svg{
    width: 200px;
  }
  span:nth-child(2){
  cursor:pointer;

  }
  span:nth-child(3){
  cursor:pointer;

  }
 @media screen  and (max-width: 991px){
   .video-list .list[data-v-7271a9ca]{
         width: 100%;
         height: 100%;
   }
   
   .video-list .list .bg[data-v-7271a9ca]{
     display: block;
   }
   .video .titel span:nth-child(2){
     display: none;
   }
   .video .titel span:nth-child(3){
     display: block;
   }
    .video .video-list .scroll[data-v-7271a9ca]{
       display: block;
       height: 1019px;
     }
 }
  @media screen  and (max-width: 520px){
  .video[data-v-7271a9ca]{
    width: 100%;
    height: 100%;
  }
  }
</style>