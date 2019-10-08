<template>
   <div id="header" class="main">
    <div class="top clear">
      <span class="lf">您好，欢迎来到灯具批发商城_灯亿网！</span>
      <ul id="loginList" class="lf">
        <li class="lf">
          <router-link :to="jump[0].to" v-text="jump[0].txt"></router-link>
        </li>
        <li class="lf">
            <router-link :to="jump[1].to" v-text="jump[1].txt"></router-link>
        </li>
      </ul>
      <span class="rf">
        <a href="index.html">灯亿网首页</a>|                    
        <a href="javascript:;">买家中心</a>|
        <a href="javascript:;">卖家中心</a>|
        <a href="javascript:;">在线客服</a>|
        <a href="javascript:;">帮助中心</a>|
        <a href="javascript:;">手机版</a>                    
      </span>
    </div>
    <div class="bottom clear">
      <a href="javascript:;" class="lf">
        <img src="../../public/img/header/index_logo.png">
      </a>
      <div id="top-input" class="lf">
        <form action="">
          <a href="javascript:;" class="sort-search">商品</a>
          <i class="caret"></i>
          <input type="text" id="txtSearch" placeholder="请输入您要搜索的内容">
          <a href="javascript:;">
            <img src="../../public/img/header/index_search.png" class="rf">
          </a>
        </form>
        <p>
          <a href="jvavscript:;">西蒙电气</a>
          <a href="jvavscript:;">三雄极光</a>
          <a href="jvavscript:;">接线盒</a>
          <a href="jvavscript:;">贴片软灯</a>
          <a href="jvavscript:;">灯条暖光</a>
        </p>
      </div>
      <div id="mycart" class="lf">
        <img src="../../public/img/header/shopping-cart.png">
        <a href="javascript:;">我的购物车</a>
      </div>
    </div>
    <div id="all">
      <div class="all">
        <a href="javascript:;">全部商品分类</a>
        <div id="d1">
          <ul>
            <li>
              <div>
                <a href="javascript:;">商业照明</a>
                <span>></span>
              </div>
              <div>
                <a href="javascript:;">筒灯</a>
                <a href="javascript:;">射灯</a>
                <a href="javascript:;">格栅灯</a>
              </div>
              <hr>
            </li>
            <li>
              <div>
                <a href="javascript:;">家居照明</a>
                <span>></span>
              </div>
              <div>
                <a href="javascript:;">台灯</a>
                <a href="javascript:;">吊灯</a>
                <a href="javascript:;">吸顶灯</a>
              </div>
              <hr>
            </li>
            <li>
              <div>
                <a href="javascript:;">户外照明</a>
                <span>></span>
              </div>
              <div>
                <a href="javascript:;">路灯</a>
                <a href="javascript:;">地灯</a>
                <a href="javascript:;">水底灯</a>
              </div>
              <hr>
            </li>
            <li>
              <div>
                <a href="javascript:;">照明光源</a>
                <span>></span>
              </div>
              <div>
                <a href="javascript:;">灯带</a>
                <a href="javascript:;">尖泡</a>
                <a href="javascript:;">球形泡</a>
              </div>
              <hr>
            </li>
            <li>
              <div>
                <a href="javascript:;">电工电料</a>
                <span>></span>
              </div>
              <div>
                <a href="javascript:;">开关</a>
                <a href="javascript:;">插座</a>
                <a href="javascript:;">断路器</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ul class="nav">
        <li>
          <a href="index.html" class="active">首页</a>
        </li>
        <li>
            <a href="index.html">品牌专区</a>
        </li>
        <li>
            <a href="index.html">超值购</a>
        </li>
        <li>
            <a href="index.html">尾品汇</a>
        </li>
        <li>
            <a href="index.html">采购中心</a>
        </li>
        <li>
            <a href="index.html">灯头条</a>
        </li>
      </ul>
      </p>
    </div>
  </div>  
</template>

<script>
export default {
  data(){
    return{
      jump:[
        {
          to:"login",
          txt:"[ 登录 ]"
        },
        {
          to:"reg",
          txt:"[ 免费注册 ]"
        }
      ]

    }
  }
}
</script>
<style scoped>
    #header>div.top{
      padding:10px 0 10px 10px;
      background: #f1f1f1;
    }
    #header>div.top>ul{
      margin-left:80px;
    }
    #header>div.top span.rf a{
    margin-right:10px;
    }
    #header div.bottom{
    background-color:#fff;
    padding-left:10px;
    }
    #top-input{
      margin:20px 0 0 240px;
      width:414px;
    }
    form{
      border:2px solid #f4a064;
      border-radius:5px;
    }
    #top-input a.sort-search{
    font-size:16px;
    margin-left:5px;
    }
    #top-input i.caret{
    border:7px solid transparent;
    border-top-color:#666;
    position:relative; 
    top:10px;
    left:5px;
    }
    #txtSearch{
    width:300px;
    height:34px;
    /* 取消边框 */
    border:0;
    /* 取消轮廓 */
    outline:0;
    padding-left:15px;
    }
    #top-input a>img{
    margin:5px 10px 0 0;
    }
    #top-input p{
    margin-top:15px;
    }
    #top-input p>a{
    margin-right:20px;
    font-size:14px
    }
    #mycart{
    width:172px;
    height:42px;
    line-height:42px;
    font-size:16px;
    border:1px solid #f4a064;
    border-radius:5px;
    margin:20px 0 0 190px;
    }
    #mycart>img{
      width:35px;
      height:35px;
      margin-left:10px;
    }
    #all{
    position:relative; 
    background: #fff;
    border-bottom:2px solid #f4a064;
    padding:20px 20px 0 20px;
    display:flex;
    justify-content:space-between;
    }
    #all>div{
    width:180px;
    font-size:20px;
    height:30px;
    line-height:30px;
    color:#fff;
    font-weight:bold;
    text-align:center;
    background:#ffa200;
    }
    #all>div a{
    color:#fff;
    }
    .all div{
      display: block;
    } 
  
    #all #d1{
    width:248px;
    height:0px;
    overflow:hidden;
    position:absolute;
    left:0;
    z-index:10;
    background:#03011f;
    opacity:0.5;
    transition:all .5s linear;
    }
    .all:hover #d1{
       height:498px !important;

    }
    #all #d1 ul li{
      margin-top:15px;
    }
    #all #d1 ul li div{
      mergin-bottom:10px; 
    }
    #all #d1 ul li span{
      margin-left:50px;
    }
    #all #d1 ul li div:nth-child(2){
      margin-left:-20px;
    }
    #all #d1 ul li div:nth-child(2) a{
      font-size: 14px;
      margin-left:15px;
    }
    #all #d1 ul li a:hover{
      color:#ffa200;
      text-decoration:underline;
    }
    #all #d1 ul li hr{
      width:70%;
    }
    #all ul.nav{
    display:flex;
    justify-content:space-between;
    margin-right:300px;
    padding-top:6px;
    }
    #all ul.nav li{
      margin-right:40px;
    }
    #all ul.nav li a{
      font-size:18px;
      font-weight:bold;
    }
    #all ul.nav li a.active{
      color:#f4a064;
    }
</style>
