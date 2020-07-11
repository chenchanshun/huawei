<template>
  <div class="fate">
      <div class="input-group input-group-lg">
    <input type="text" class="form-control" placeholder="输入月" >
    <input type="text" class="form-control form-two" placeholder="输入日" >

    <div class="input-group-append">
      <button class="btn btn-outline-secondary " @click="getTime" type="button" >查看运势</button>
    </div>
    </div>
    <div>
    </div>
      <div class="fatefrom">
        <!-- <div class="fateimg">
          <img src="../assets/image/1.png" class="fimg d-none" alt="" srcset="">
          <img src="../assets/image/2.png" class="fimg d-none" alt="" srcset="">
          <img src="../assets/image/3.png" class="fimg d-none" alt="" srcset="">
          <img src="../assets/image/4.png" class="fimg d-none" alt="" srcset="">
          <img src="../assets/image/5.png" class="fimg d-none" alt="" srcset="">
          <img src="../assets/image/6.png" class="fimg d-none" alt="" srcset="">
          <img src="../assets/image/7.png" class="fimg d-none" alt="" srcset="">
          <img src="../assets/image/8.png" class="fimg d-none" alt="" srcset="">
          <img src="../assets/image/9.png" class="fimg d-none" alt="" srcset="">
          <img src="../assets/image/10.png" class="fimg  d-none"  alt="" srcset="">
          <img src="../assets/image/11.png" class="fimg  d-none"  alt="" srcset="">
          <img src="../assets/image/12.png" class="fimg  d-none"  alt="" srcset="">
        </div> -->
        <div class="fatefont">
          <div class="alert alert-light" role="alert">
            {{this.fate.fortune}}
            {{this.fate.birthday}}
            </div>
          <div class="alert alert-primary" role="alert">
            今日健康指数:{{this.fate.health_index}}
            </div>
            <div class="alert alert-secondary" role="alert">
            今日商谈指数:{{this.fate.discuss_index}}
            </div>
            <div class="alert alert-success" role="alert">
            今日幸运颜色:{{this.fate.lucky_color}}
            </div>
            <div class="alert alert-danger" role="alert">
            今日幸运数字:{{this.fate.lucky_numbers}}
            </div>
            <div class="alert alert-warning" role="alert">
            今日速配星座:{{this.fate.match_constellation}}
            </div>
            <div class="alert alert-info" role="alert">
            今日运势短评:{{this.fate.comments}}
            </div>
            <div class="alert alert-warning" role="alert">
            今日综合运势:{{this.fate.comprehensive_luck}}
            </div>
            <div class="alert alert-danger" role="alert">
            今日爱情运势:{{this.fate.love}}
            </div>
            <div class="alert alert-success" role="alert">
            今日事业学业:{{this.fate.academic}}
            </div>
            <div class="alert alert-secondary" role="alert">
            今日财富运势:{{this.fate.wealth_luck}}
            </div>
            <div class="alert alert-primary" role="alert">
            今日健康运势:{{this.fate.health_luck}}
            </div>
        </div>
      </div>
    
  </div>
</template>

<script>
import network from '../api/network'

export default {
    name:'fate',
    data(){
      return{
        fate:{},
        currentnum :null
      }
    },
    methods:{
       getDaynum(month,day){
          if(day >31||month>12){
            console.log('请输入正确的日期');
            return
          }
        
          if(month>=3&&month<=4){
            if(month == 3){
              if(day >= 21){
                return 1
              }
            }else if(month == 4){
              if(day <= 19){
                return 1
              }
            }
          }
          if(month>=4&&month<=5){
            if(month == 4){
              if(day >= 20){
                return 2
              }
            }else if(month == 5){
              if(day <= 20){
                return 2
              }
            }
          }
          if(month>=5&&month<=6){
            if(month == 5){
              if(day >= 21){
                return 3
              }
            }else if(month == 6){
              if(day <= 21){
                return 3
              }
            }
          }
          if(month>=6&&month<=7){
            if(month == 6){
              if(day >= 22){
                return 4
              }
            }else if(month == 7){
              if(day <= 23){
                return 4
              }
            }
          }
          if(month>=7&&month<=8){
            if(month == 7){
              if(day >= 23){
                return 5
              }
            }else if(month == 8){
              if(day <= 22){
                return 5
              }
            }
          }
          if(month>=8&&month<=9){
            if(month == 8){
              if(day >= 23){
                return 6
              }
            }else if(month == 9){
              if(day <= 22){
                return 6
              }
            }
          }
          if(month>=9&&month<=10){
            if(month == 9){
              if(day >= 23){
                return 7
              }
            }else if(month == 10){
              if(day <= 23){
                return 7
              }
            }
          }
          if(month>=10&&month<=11){
            if(month == 10){
              if(day >= 24){
                return 8
              }
            }else if(month == 11){
              if(day <= 22){
                return 8
              }
            }
          }
          if(month>=11&&month<=12){
            if(month == 11){
              if(day >= 23){
                return 9
              }
            }else if(month == 12){
              if(day <= 21){
                return 9
              }
            }
          }
          if(month>=1&&month<=2){
            if(month == 1){
              if(day >= 20){
                return 11
              }
            }else if(month == 2){
              if(day <= 18){
                return 11
              }
            }
          }
          if(month>=2&&month<=3){
            if(month == 2){
              if(day >= 19){
                return 12
              }
            }else if(month == 3){
              if(day <= 20){
                return 12
              }
            }
          }
          if(month>=1){
            if(month == 1){
              if(day <= 19){
                return 10
              }
            }
           }
          if(month>=12){
            if(month == 12){
              if(day >= 22){
                return 10
              }
            }
          }
          
         
        // 1:3.21-4.19
        // 2:4.20-5.20
        // 3:5.21-6.21
        // 4:6.22-7.22
        // 5:7.23-8.22
        // 6:8.23-9.22
        // 7:9.23-10.23
        // 8:10.24-11.22
        // 9:11.23-12.21
        // 10:12.22-1.19   ????
        // 11:1.20-2.18
        // 12:2.19-3.20
      },
      getTime(){
        //获取输入内容
        let month = $('.form-control').val().replace(/0/g, " ").replace(/\s+/g,"");
        let day = $('.form-two').val().replace(/\s+/g,"");
        console.log(month,day)
        let date = this.getDaynum(month,day)
        this.currentnum = date
        let fateimg = $('.fateimg>img')
        console.log($(fateimg[this.currentnum]).removeClass("d-none"))
        console.log($(fateimg[this.currentnum]).siblings().addClass("d-none"))
        //获取服务器数据
        network.get(`/api/fortune_today/api.php?fortune=${date}`)
        .then((res)=>{
          this.fate = res.data
          console.log(this.fate)

        })
        .catch(function(err){
          console.log(err)

        })
       
      }
      
    },
     
     

}
</script>

<style scoped>
  .input-group{
    width: 50%;
    margin: 0 auto;
  }
  .input-group .form-control{
    display: block;
  }
  .fatefrom{
    width: 70%;
    height: 600px;
    margin: 0 auto;
    position: relative;
  }
   .fatefrom .fateimg{
     position: absolute;
     top: 20px;
     left: 20%;
     transform: translateX(-50%);
   }
  
   .fatefrom .fatefont{
     position: absolute;
     top: 150px;
     width: 100%;
   }
   .fatefont div:nth-child(1){
     position: absolute;
     top: -13%;
     font-size: 30px;
     left: 20%;
     transform: translateX(-50%);
   }
</style>