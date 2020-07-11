<template>
  <div v-title data-title="一个很有意思的网站">
     <div class="header container-fluid">
    <div class="header-top d-none d-xl-block">
        <div class="font">
          <a  data-toggle="collapse" href="#collapseExample"  >醒来吧 知晓一切的人们！</a>
        </div>
        <div class="collapse" id="collapseExample">
          <ul class="list-unstyled d-flex tit ml-5">
            <li><a href="#"><h6>千手柱间<svg t="1593140894305" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2871" width="200" height="200"><path d="M642.174253 504.59418C650.164439 511.835287 650.070886 522.174253 641.84009 529.376198L332.618569 799.94503C323.751654 807.703582 322.853148 821.181184 330.611697 830.048098 338.370249 838.915012 351.847851 839.813519 360.714765 832.05497L669.936288 561.486138C697.36486 537.486138 697.727953 497.358861 670.825747 472.978737L360.992414 192.192278C352.26205 184.280386 338.770837 184.943889 330.858944 193.674252 322.947053 202.404616 323.610556 215.895829 332.340919 223.807723L642.174253 504.59418Z" p-id="2872"></path></svg></h6><p>木遁秘术·树界降诞、通灵·五重罗生门、仙法·木遁·真数千手</p></a></li>
            <li><a href="#"><h6>千手扉间<svg t="1593140894305" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2871" width="200" height="200"><path d="M642.174253 504.59418C650.164439 511.835287 650.070886 522.174253 641.84009 529.376198L332.618569 799.94503C323.751654 807.703582 322.853148 821.181184 330.611697 830.048098 338.370249 838.915012 351.847851 839.813519 360.714765 832.05497L669.936288 561.486138C697.36486 537.486138 697.727953 497.358861 670.825747 472.978737L360.992414 192.192278C352.26205 184.280386 338.770837 184.943889 330.858944 193.674252 322.947053 202.404616 323.610556 215.895829 332.340919 223.807723L642.174253 504.59418Z" p-id="2872"></path></svg></h6><p>飞雷神之术、飞雷神斩、飞雷神二段、飞雷神互瞬回旋之术、水遁·水龙咬爆</p></a></li>
            <li><a href="#"><h6>波风水门<svg t="1593140894305" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2871" width="200" height="200"><path d="M642.174253 504.59418C650.164439 511.835287 650.070886 522.174253 641.84009 529.376198L332.618569 799.94503C323.751654 807.703582 322.853148 821.181184 330.611697 830.048098 338.370249 838.915012 351.847851 839.813519 360.714765 832.05497L669.936288 561.486138C697.36486 537.486138 697.727953 497.358861 670.825747 472.978737L360.992414 192.192278C352.26205 184.280386 338.770837 184.943889 330.858944 193.674252 322.947053 202.404616 323.610556 215.895829 332.340919 223.807723L642.174253 504.59418Z" p-id="2872"></path></svg></h6><p>太极螺旋丸、飞雷神互瞬回旋之术、螺旋闪光超轮舞吼三式</p></a></li>
            <li><a href="#"><h6>猿飞日斩<svg t="1593140894305" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2871" width="200" height="200"><path d="M642.174253 504.59418C650.164439 511.835287 650.070886 522.174253 641.84009 529.376198L332.618569 799.94503C323.751654 807.703582 322.853148 821.181184 330.611697 830.048098 338.370249 838.915012 351.847851 839.813519 360.714765 832.05497L669.936288 561.486138C697.36486 537.486138 697.727953 497.358861 670.825747 472.978737L360.992414 192.192278C352.26205 184.280386 338.770837 184.943889 330.858944 193.674252 322.947053 202.404616 323.610556 215.895829 332.340919 223.807723L642.174253 504.59418Z" p-id="2872"></path></svg></h6><p>尸鬼封尽、四赤阳阵、通灵·猿猴王·猿魔</p></a></li>
          </ul>
        </div>
    </div>
    
    <div class="header-midder">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1275521507,2928204193&fm=26&gp=0.jpg" alt=""></a>
      
      
      <button class="navbar-toggler menu" @click="xyp" ref="xyp" data-target="#navbarSupportedContent"  data-toggle="collapse"  >
           <!-- <div class="search ">
            <a href="#">
              <svg t="1593153805708" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3834" width="200" height="200"><path d="M474.3168 170.5984c-168.5504 0-305.152 136.6016-305.152 305.152s136.6016 305.152 305.152 305.152c77.6192 0 148.48-28.9792 202.3424-76.6976l143.36 143.36c3.9936 3.9936 9.216 6.0416 14.4384 6.0416s10.4448-2.048 14.4384-6.0416c7.9872-7.9872 7.9872-20.992 0-28.9792L705.3312 675.0208c46.1824-53.4528 74.0352-123.0848 74.0352-199.2704 0.1024-168.5504-136.6016-305.152-305.0496-305.152z m0 569.344c-35.6352 0-70.2464-6.9632-102.8096-20.7872-31.4368-13.312-59.6992-32.3584-83.968-56.6272-24.2688-24.2688-43.3152-52.5312-56.6272-83.968-13.7216-32.5632-20.7872-67.1744-20.7872-102.8096 0-35.6352 6.9632-70.2464 20.7872-102.8096 13.312-31.4368 32.3584-59.6992 56.6272-83.968 24.2688-24.2688 52.5312-43.3152 83.968-56.6272 32.5632-13.7216 67.1744-20.7872 102.8096-20.7872s70.2464 6.9632 102.8096 20.7872c31.4368 13.312 59.6992 32.3584 83.968 56.6272 24.2688 24.2688 43.3152 52.5312 56.6272 83.968 13.7216 32.5632 20.7872 67.1744 20.7872 102.8096 0 35.6352-6.9632 70.2464-20.7872 102.8096-13.312 31.4368-32.3584 59.6992-56.6272 83.968-24.2688 24.2688-52.5312 43.3152-83.968 56.6272-32.5632 13.7216-67.1744 20.7872-102.8096 20.7872z" p-id="3835"></path></svg>
            </a>
          </div>
       <div class="person ml-4">
            <a href="#">
              <svg t="1593154059873" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4889" width="200" height="200"><path d="M661.600715 533.420869C725.750757 486.196311 767.626493 410.41844 767.626493 324.82911c0-142.905734-116.272143-259.173784-259.186064-259.173784-142.911874 0-259.185041 116.26805-259.18504 259.173784 0 86.633103 42.88267 163.265434 108.370173 210.337519-153.393599 60.431348-262.400269 209.732745-262.400269 384.322086 0 21.457708 17.400299 38.856983 38.85903 38.856983 21.459754 0 38.858006-17.399275 38.858006-38.856983 0-184.989201 150.502759-335.503217 335.4981-335.503217 1.602498 0 3.140527-0.207731 4.735861-0.245594 0.806365 0.056282 1.565658 0.245593 2.381234 0.245594 184.996364 0 335.49503 150.514015 335.49503 335.503217 0 21.457708 17.401322 38.856983 38.8621 38.856983 21.458731 0 38.858006-17.399275 38.858006-38.856983-0.001023-176.37501-111.293759-326.889025-267.171945-386.067846zM326.971401 324.82911c0-100.06502 81.408101-181.458795 181.469028-181.458795 100.05888 0 181.469028 81.394798 181.469028 181.458795 0 100.047624-81.410148 181.441399-181.469028 181.441399-100.060927-0.001023-181.469028-81.395822-181.469028-181.441399z" p-id="4890"></path></svg>
            </a>
          </div> -->
       <span></span>
       <span></span>
       <span></span>

      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <a class="nav-link" @click="daily">每日壁纸<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link"  @click="fateJump">星座运势<span class="sr-only">(current)</span></a>
          </li>
           <li class="nav-item show">
            <a class="nav-link history  dropdown-toggle"  data-toggle="dropdown" @click="history">历史上的今天<span class="sr-only"></span></a>
             <div class="dropdown-menu" >
                <a class="dropdown-item " @click="isshow">{{historys}}</a>

              </div>
          </li>
           <li class="nav-item ">
            <a class="nav-link" @click="video" >视频<span class="sr-only">(current)</span></a>
          </li>
           <li class="nav-item ">
            <a class="nav-link" @click="interfac">千图网解析<span class="sr-only">(current)</span></a>
          </li>


           <li class="nav-item ">
            <a class="nav-link" href="#">更多产品<span class="sr-only">(current)</span></a>
          </li>
           <li class="nav-item ">
            <a class="nav-link" href="#">商用<span class="sr-only">(current)</span></a>
          </li>

          
                 
        </ul>
        <div class="nva-bar d-lg-flex d-none ">
          <div class="search ">
            <a href="#">
              <svg t="1593153805708" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3834" width="200" height="200"><path d="M474.3168 170.5984c-168.5504 0-305.152 136.6016-305.152 305.152s136.6016 305.152 305.152 305.152c77.6192 0 148.48-28.9792 202.3424-76.6976l143.36 143.36c3.9936 3.9936 9.216 6.0416 14.4384 6.0416s10.4448-2.048 14.4384-6.0416c7.9872-7.9872 7.9872-20.992 0-28.9792L705.3312 675.0208c46.1824-53.4528 74.0352-123.0848 74.0352-199.2704 0.1024-168.5504-136.6016-305.152-305.0496-305.152z m0 569.344c-35.6352 0-70.2464-6.9632-102.8096-20.7872-31.4368-13.312-59.6992-32.3584-83.968-56.6272-24.2688-24.2688-43.3152-52.5312-56.6272-83.968-13.7216-32.5632-20.7872-67.1744-20.7872-102.8096 0-35.6352 6.9632-70.2464 20.7872-102.8096 13.312-31.4368 32.3584-59.6992 56.6272-83.968 24.2688-24.2688 52.5312-43.3152 83.968-56.6272 32.5632-13.7216 67.1744-20.7872 102.8096-20.7872s70.2464 6.9632 102.8096 20.7872c31.4368 13.312 59.6992 32.3584 83.968 56.6272 24.2688 24.2688 43.3152 52.5312 56.6272 83.968 13.7216 32.5632 20.7872 67.1744 20.7872 102.8096 0 35.6352-6.9632 70.2464-20.7872 102.8096-13.312 31.4368-32.3584 59.6992-56.6272 83.968-24.2688 24.2688-52.5312 43.3152-83.968 56.6272-32.5632 13.7216-67.1744 20.7872-102.8096 20.7872z" p-id="3835"></path></svg>
            </a>
          </div>
          <div class="person " @mouseenter="enter" @mouseleave="leave">
            <a href="#" class="login" >
              <svg t="1593154059873" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4889" width="200" height="200"><path d="M661.600715 533.420869C725.750757 486.196311 767.626493 410.41844 767.626493 324.82911c0-142.905734-116.272143-259.173784-259.186064-259.173784-142.911874 0-259.185041 116.26805-259.18504 259.173784 0 86.633103 42.88267 163.265434 108.370173 210.337519-153.393599 60.431348-262.400269 209.732745-262.400269 384.322086 0 21.457708 17.400299 38.856983 38.85903 38.856983 21.459754 0 38.858006-17.399275 38.858006-38.856983 0-184.989201 150.502759-335.503217 335.4981-335.503217 1.602498 0 3.140527-0.207731 4.735861-0.245594 0.806365 0.056282 1.565658 0.245593 2.381234 0.245594 184.996364 0 335.49503 150.514015 335.49503 335.503217 0 21.457708 17.401322 38.856983 38.8621 38.856983 21.458731 0 38.858006-17.399275 38.858006-38.856983-0.001023-176.37501-111.293759-326.889025-267.171945-386.067846zM326.971401 324.82911c0-100.06502 81.408101-181.458795 181.469028-181.458795 100.05888 0 181.469028 81.394798 181.469028 181.458795 0 100.047624-81.410148 181.441399-181.469028 181.441399-100.060927-0.001023-181.469028-81.395822-181.469028-181.441399z" p-id="4890"></path></svg>
            </a>
           
            <div class="login-box" ref="login">
             <div class="login-font">
              <span class="top"></span>
              <span class="bot"></span>
                 </div>
              <p data-toggle="modal" data-target="#exampleModal"><a href="#">登录</a></p>
              <p>注册</p>
            </div>
          </div>
          <div class="huawei-vmall">
            <div class="font-long">商城</div>
          </div>
        </div>

    </div>
</nav>
    </div>
    
    <div class="header-bottom"></div>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" >
  <div class="modal-dialog modal-dialog-centered"  role="document">
    <div class="modal-content">
      <div class="modal-header border-bottom-0">
        <div class="modal-title" id="exampleModalLabel">
          <span>登录账号</span>
          <span>|</span>
          <span>扫码登录</span>
        </div>

        <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true" class="shut">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input id="username" type="text" placeholder="手机号/邮件地址/华为号">
        <input id="password" type="text" placeholder="密码">
      </div>
      <label for="">
       <input type="checkbox" name="" id="">
       记住密码
      </label>

          <a href="#">
             <div class="login-buttom">
                <span>登录</span>
              </div>
          </a>

      <div class="modal-footer border-top-0">
      </div>
    </div>
  </div>
 </div>
  </div>
  </div>
</template>

<script>
import network from '../api/network'
import {mapActions} from 'vuex'
export default {
  name:'HUAWEI',
  data:function(){
    return{
      historys:'加载中......'
    }
  },
  created(){
 $(function () {
        // 解决bootstrap下拉菜单第一次点击无反应问题
        $('.dropdown-toggle').dropdown();
        $('.login-buttom').click(function(){
          $('.shut').click()
          let user = $('#username').val()
          let pwd = $('#password').val()
          if(user === 'admin'&&pwd==='123456'){
            alert('登录成功')
          }else{
            alert('登录失败')

          }
        })
    });
    
  },
  methods:{
    ...mapActions([
      'getplays'
    ]),
    xyp(){
      if(this.$refs.xyp.className.indexOf('on')!== -1){
       this.$refs.xyp.classList.remove('on')
        
     }else{
     this.$refs.xyp.classList.add('on')
      }
    },
    enter(){
     this.$refs.login.style.display = 'block'
    },
    leave(){
    this.$refs.login.style.display = 'none'
    },
    fateJump(){
      //js跳转路由
       this.$router.push({path:'/fate'})
    },
    isshow(){
      // $('.dropdown-menu').removeClass('show')
      // if($('.dropdown-item').attr('data-toggle') == ''){
      // $('.dropdown-item').attr('data-toggle','dropdown')
      // }else{
      //   $('.dropdown-item').attr('data-toggle','')
      // }
    },
    history(){
      // console.log($('.dropdown-item').is('.show'))
      // console.log($('.dropdown-item'))
      
        console.log('获取')
            network.get(`/api/history/api.php`)
        .then((res)=>{
          this.historys = res.data
        //  $('.history').attr('data-toggle','')

        })
        .catch((err)=>{
          console.log(err)
        })
      
     
    },
    video(){
      this.$router.push({path:'/video'})
      // this.getplays()
    },
    interfac(){
      this.$router.push({path:'/interface'})
    },
    daily(){
      this.$router.push({path:('/daily')})
    }
  },
  
}


</script>

<style  scoped>

*{
  padding: 0;
  margin: 0;
}


.container-fluid{
  padding: 0;
}
.header .header-top{
  padding: 0;
}
.header-top>div:nth-child(1){
  /* border: 1px solid red; */
  background-color: black;
  padding: 0 5%;  
  
}
.header-top>div:nth-child(2){
  /* border: 1px solid red; */
  padding: 0 5%;  

}
.header-top>div:nth-child(1) a{
  line-height: 16px;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
}

.header-bottom{
  height: 64px;
  /* background-color: red; */
}
.header ul li p{
  color:  #7f7f7f;;
  margin-top: 20px;
  margin-right: 6%;
}
.header .tit {
  padding: 40px 0;
}
.header ul li:nth-child(1) a{
  color: black;
}
.header ul li a{
  color: #c3172e;;
  text-decoration: none;

}
.header ul li a h6 svg{
  width: 23px;
  height: 23px;
}
.header ul li a h6 svg path{
    fill: red;
}
.header ul li:nth-child(1) a h6 svg path{
  fill: black;
}
.header-midder{
  height: 50px;
}
.header-midder .navbar{
  width: 100%;
  /* border-bottom: 10px solid black; */
}
.header-midder nav a img{
  width: 128px;
  margin-top: -10px;
}
.header-midder .navbar-brand{
  margin-left: 50px;
}
.header-midder .navbar-brand img{
  width: 50px;
}
/* .collapse ul{

} */
.nva-bar div{
  padding: 0 10px;
}
.nva-bar .search a svg{
  width: 20px;
  height: 20px;
}
.nva-bar .person a svg{
  width: 20px;
  height: 20px;
}
.nva-bar .huawei-vmall .font-long{
  border: solid 2px rgba(0,0,0,0.3);
  border-radius: 15px;
  padding: 0px 10px;
}

.header-midder nav .search a svg{
  width: 26px;
  height: 26px;

}
.header-midder nav .person a svg{
  width: 26px;
  height: 26px;
}
.navbar-light .navbar-toggler{
  display: none !important;
}

.navbar-nav{
  margin:0 auto;
  
}  
.collapse  .nva-bar{
  margin-right: 20px;
}
 .dropdown-menu{
  width: 100%;
}
.dropdown-menu .dropdown-item{
  text-align: center;
  color: #7f7f7f;
  line-height: 45px;
}
.navbar-nav li{
  padding-left: 20px;
  
}
.navbar-nav li a{
  
  cursor:pointer;
  font-size: 20px;
}
.navbar-light .navbar-nav .nav-link{
  font-size: 20px;
  color: black;
}

.header-midder .navbar-toggler{
  width: 52px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  display: block;
  border: none;
  outline: none;
}
.header-midder .menu span{
  display: block ;
  width: 24px;
  height: 2px;
  background: rgb(60, 60, 60);
  margin: 5px 0;
  transition: all .3s linear;
}
.header-midder .on span:nth-child(1){
  transform: rotate(405deg) translate(5px,5px);
}
.header-midder .on span:nth-child(2){
  transform: scale(0);
}
.header-midder .on span:nth-child(3){
  transform: rotate(-405deg) translate(5px,-5px) ;
}
.login{
  position: relative;
}
.login-box{
  position: absolute;
  right: 90px;
  top: 70px;
  width: 300px;
  height: 150px;
  border: 1px solid gainsboro;
  display: none;
  background-color: #FFF;
}
.login-box p{
  padding: 20px 0;
  font-size: 20px;
  color: #7f7f7f;
  margin-left: 20px;
  
} 
.login-box p:nth-child(2){
  border-bottom: 1px gainsboro solid;
}
.login-box .login-font{
  position: relative;
  left: 222px;
  
}
.login-box  a{
  text-decoration:none;
  outline: none;
  color: black;
}
.login-box .login-font span:nth-child(1){
    position: absolute;
    border-width: 10px;
    border-style: solid dashed dashed;
    border-color: transparent transparent #e8e8e8;
    bottom: 1px;
}
.login-box .login-font span:nth-child(2){
    position: absolute;
    border-width: 10px;
    border-style: solid dashed dashed;
    border-color: transparent transparent #fff;
    bottom: -1px;
}
.modal-content{
  width: 600px;
  height: 400px;


}
.modal-header{
  position: relative;
}

.modal-body {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  padding: 50px;
}
.modal-body input{
  width: 300px;
  font-size: 18px;
  color: red;
  height: 50px;
  padding: 0 10px;
  line-height: 50px;
  border:none;
  background: rgba(0, 0, 0, 0.05);
  border-bottom:1px solid #ccc;
  margin-top: 20px;
}
/* .modal-body input[type=text]{

} */
.modal-content .login-buttom{
  width: 300px;
  height: 50px;
  position: absolute;
  top: 70%;
  left: 50%;
  border-radius: 15px;
  transform: translateX(-50%);
  text-align: center;
  border: 1px solid #ccc;
  color: #ccc;

}
.modal-content .login-buttom:hover{
  background: red;
  color: #fff;
}
.modal-content .login-buttom span{
  line-height: 50px;
  font-size: 22px;
  
}
.modal-content label{
  position: absolute;
  top: 60%;
  left: 20%;
}

.modal-header .modal-title{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.modal-header .modal-title span{
    line-height: 40px;
    text-align: center;
    padding: 0 20px;
    height: 40px;
}
.navbar{
  z-index: 999;
}
/* .header .header-top[data-v-77f12dbe]{
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
}
.header>div[data-v-77f12dbe]{
  position: fixed;
} */
 .header-midder nav a img[data-v-77f12dbe]{
    width: 100px;
  }
.bg-light{
    background-color: #FFF!important;
}





@media screen and (max-width: 1259px){
  .navbar-nav li[data-v-77f12dbe]{
    padding-left: 0px;
  }
 .navbar-light .navbar-nav .nav-link[data-v-77f12dbe]{
   font-size: 18px;
 }

 }
@media screen and (max-width: 1029px){
.collapse ul li[data-v-77f12dbe]{
  margin-left: 0px;
}
 .navbar-light .navbar-nav .nav-link[data-v-77f12dbe]{
   font-size: 16px;
 }
  
}
@media screen and (max-width: 991px){
  .header-midder nav a img[data-v-77f12dbe]{
    width: 50px;
  }
  
  .navbar-light .navbar-toggler{
  display: block !important;
}

  }


</style>

