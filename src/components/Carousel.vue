<template>
  <div id="banner" :style="{width:innerWidth+'px'}" @mouseenter="stop" @mouseleave="start">
      <!-- 轮播图片 -->
    <ul id="ul-imgs" :class="ulClass" :style="ulStyle">
        <li v-for="(img,i) of imgs" :key="i" :style="{width:innerWidth+'px'}">
          <router-link :to="img.to" :title="img.title">
            <img :src="img.src" :style="{width:innerWidth+'px'}" />
          </router-link>
        </li>
        <li :style="{width:innerWidth+'px'}">
          <router-link :to="imgs[0].to" :title="imgs[0].title">
            <img :src="imgs[0].src" :style="{width:innerWidth+'px'}" />
          </router-link>
        </li>
      </ul>
        <!-- 左右箭头 -->
      <div id="btn-left" @click="move(-1)">
        <img src="../../public/img/carousel/l.png">
      </div>
      <div id="btn-right" @click="move(1)">
        <img src="../../public/img/carousel/r.png">
      </div>
      <!-- 轮播指示器 -->
      <ul id="ul-idxs">
        <li v-for="(img,idx) of imgs" :key="idx" :class="idx==i?'active':''" @click="moveTo(idx)"></li>
      </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        // 在初始时,设置默认宽度为当前窗口的宽度
        innerWidth:window.innerWidth,
        ulClass:{//定义所有图片的容器div上是否有transition属性
          hasTrans:true //在css中提前定义好的样式类,其中包含transition属性
          //如果值为true,则当前图片容器的div上就有过渡属性
          //如果不想让图片容器的div上有过渡属性,则设置该值为false
        },
        i:0, //当前正在播放的是第几张图片
        imgs:[
          {
            src:"img/carousel/01.PNG",
            title:"111",
            to:"product"
          },
          {
            src:"img/carousel/02.PNG",
            title:"111",
            to:"product"
          },
          {
            src:"img/carousel/03.PNG",
            title:"111",
            to:"product"
          },
          {
            src:"img/carousel/04.PNG",
            title:"111",
            to:"product"
          }
        ],
        canClick:true,
        timer:null
      }
    },
    created(){
      window.addEventListener("resize",()=>{
        this.innerWidth=window.innerWidth;
      })
      this.start();
    },
    computed:{//希望网页宽度变化或i变化,则自动重新计算ul的位置和大小
      ulStyle(){//修饰所有图片的父元素
        var width=this.innerWidth*(this.imgs.length+1)+"px";
        var marginLeft=-this.i*this.innerWidth+"px";
        return {width,marginLeft}
      }
    },
    methods:{
      stop(){
        clearInterval(this.timer);
      },
      start(){
        this.timer=setInterval(() => {
          this.move(1);
        }, 3000);
      },
      move(i){//防抖/节流
        //如果可以点击
        if(this.canClick){
          this.canClick=false;
          if(i==-1&&this.i==0){//如果向右移动,且正在显示第一张图片,就要骗
            this.ulClass.hasTrans=false;//去掉父级div上的transition样式类
            setTimeout(() => {//等50ms后,再进行后续操作
              this.i=this.imgs.length;//悄悄的将父级div移动到最左边
                setTimeout(() => {//等50ms后,再进行后续操作
                  this.ulClass.hasTrans=true;//打开父级div上的transition效果
                  this.i+=i;//正式向右移动一次
                  setTimeout(() => {//200ms后,才允许单击
                    this.canClick=true;
                  }, 200);
                }, 50);              
            }, 50);
          }else if(i==1&&this.i==this.imgs.length-1){
            //如果向左移动,且现在已经是显示最后一张了
            this.i+=i;//可以先带transition效果,左移一次
            setTimeout(() => {//等左移完,再去掉transition效果,骗用户
              this.ulClass.hasTrans=false;
              setTimeout(() => {//等50ms后,瞬间将父级div移动到显示第一张图片
                this.i=0;
                setTimeout(()=>{
                  this.ulClass.hasTrans=true;
                  setTimeout(() => {//稍等片刻之后允许单击
                  this.canClick=true;
                  })
                }, 50);
              }, 50);
            }, 200);
          }else{//如果不是两端的情况,则保持原来的逻辑
          this.i+=i;//才i+1 或 i-1
          this.canClick=false;//立即禁止单击,即使再单击,if也不成立了
          setTimeout(() => {//等动画播放完,再允许单击
            this.canClick=true;
          }, 600);
          }
        }
      },
      moveTo(i){
        if(this.canClick){
          this.i=i;
          this.canClick=false;
          setTimeout(() => {
            this.canClick=true;
          }, 300);
        }
      }
    }
  }
</script>
<style scored>
  #banner{
    position: relative;
    overflow:hidden;
    width:100% !important;
  }
  .hasTrans{
    transition: all 0.5s linear;
  }
  /* 图片样式 */
  #banner #ul-imgs{
    display:flex;
    width:6000px;
    margin-left:0px;
  }
  #banner #ul-imgs img{
    width:1200px;
    height:500px;
  }

  /* 小圆点样式 */
  #banner #ul-idxs{
    position: absolute;
    top:70%;
    left:50%;
    display:flex;
  }
  #banner #ul-idxs>li{
    background-color:#fff;
    margin-left:10px;
    width: 15px;
    height:15px;
    border-radius: 50%;
  }
  #banner #ul-idxs>li.active,#banner #ul-idxs>li:hover{
  background:#f4a064;
  transform:scale(1.3);
  }
  /* 左右箭头 */
  #btn-left,#btn-right{
    position:absolute;
    top:50%;
  }
  #btn-left{
    left:10%;
  }
  #btn-right{
    right:10%;
  }
</style>