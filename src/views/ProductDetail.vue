<template>
 <div>
  <my-header></my-header>
    <div class="main">
      <div id="product-details">
        <div id="preview">
          <div id="mediumDiv">
            <img :src=iconImgs[n].src>
            <div id="mask" v-show="maskShow" :style="maskStyle"></div>
            <div id="superMask" @mouseover="toggle" @mouseout="toggle" @mousemove="maskMove"></div>
          </div>
          <div id="largeDiv" v-show="maskShow" :style="{'background-image':lgUrls[n],'background-position':bgPosition}"></div>
          <ul id="icon_list"> 
            <li class="li" v-for="(img,i) of iconImgs" :key="i" :data-m='i' @mouseover="sImgOver"> 
              <img :src="img.src"> 
            </li>
            
          </ul>
        </div>
        <div id="show-details">
          <!-- 1.标题 -->
          <h2>LED全铜花灯 现货批发</h2>
          <!-- 2.售价 -->
          <div class="price">
            <div>
              <b>售价:</b>
              <span> ¥ 1388.00</span>
            </div>
            <div>
              <b>物流提醒:</b>
              配送方式、物流费用请与商家协商！
            </div>
          </div>
          <!-- 3.颜色 -->
          <p class="color">
            <b>颜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色:</b>
            <a href="javascript" class="pro">铜色</a>
          </p>
          <!-- 4.材质 -->
          <p class="texture">
            <b>材&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;质:</b>
            <a href="javascript" class="pro">全铜</a>
          </p>
          <!-- 5.数量 -->
          <p class="count">
            <b>数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量:</b>
            <span class="reduce">-</span>
            <input type="text" value="1">
            <span class="add">+</span>
          </p>
          <!-- 6.购买按钮 -->
          <div>
            <p class="btns">
              <a href="javascript:;" class="buy">立即购买</a>
            </p>
            <p class="addcart">
              <a href="javascript;:" class="add">加入购物车</a>
            </p>
          </div>
        </div>
        <div id="store">
          <p>店铺信息</p>
          <hr>
          <p>
            <img src="../../public/img/product-detail/dtxx.jpg">
          </p>
          <p>现货批发</p>
          <p>
            <span>公司名称:</span>
            <span>北京灯亿网库电子有限公司</span>
          </p>
          <p>
            <span>联  系  人:</span>
            <span>z h.zhang </span>
          </p>
          <p>
            <span>联系电话:</span>
            <span>18900000000</span>
          </p>
          <p>
            <span>联系客服:</span>
            <a href="javascript:;">
              <img src="../../public/img/product-detail/kf.png">
            </a>
          </p> 
          <p>
            <span>所在地区:</span>
            <span>北京市</span>
          </p>  
          <p>
            <span>详细地址:</span>
            <span>北京市东城区蓝宝大厦四楼</span>
          </p> 
          <p>
            <span>经营类型:</span>
            <span>商业照明 家居照明</span>
          </p>
          <hr>
          <p>
            <a href="javascript:;">进入店铺</a>
            <a href="javascript:;">收藏店铺</a>
          </p>
        </div>
      </div>
      <div id="product_bottom">
        <div class="recommend">
          <p>店 内 推 荐</p>
          <ul>
            <li>
              <a href="javascript:;">
                <img src="../../public/img/product-detail/left1.jpg">
              </a>
              <p class="title">节日花束灯</p>
              <p class="price">￥98.00</p>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/img/product-detail/left2.jpg">
              </a>
              <p class="title">定制艺术吊灯</p>
              <p class="price">￥666.00</p>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/img/product-detail/left3.jpg">
              </a>
              <p class="title">LED蓝牙音乐台灯</p>
              <p class="price">￥98.00</p>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/img/product-detail/left4.jpg">
              </a>
              <p class="title">OLED光源桌面装饰灯原木材料健康光源</p>
              <p class="price">￥549.00</p>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../public/img/product-detail/left5.jpg">
              </a>
              <p class="title">全铜花灯 现货批发</p>
              <p class="price">￥2540.00</p>
            </li>
            <li>
                <a href="javascript:;">
                  <img src="../../public/img/product-detail/left1.jpg">
                </a>
                <p class="title">节日花束灯</p>
                <p class="price">￥98.00</p>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../../public/img/product-detail/left2.jpg">
                </a>
                <p class="title">定制艺术吊灯</p>
                <p class="price">￥666.00</p>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../../public/img/product-detail/left3.jpg">
                </a>
                <p class="title">LED蓝牙音乐台灯</p>
                <p class="price">￥98.00</p>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../../public/img/product-detail/left4.jpg">
                </a>
                <p class="title">OLED光源桌面装饰灯原木材料健康光源</p>
                <p class="price">￥549.00</p>
              </li>
          </ul>
        </div>
          <div class="detail">
              <div id="my-tabs">
                  <ul class="tabs">
                    <li :class="{isActive:i===index}" v-for="(item,i) of serve" :key="i" v-text="item" @click="jump(i)">
                    </li>
                  </ul>
                  <div class="container">
                        <div id="content1" v-show="index===0">
                          <table>
                            <tbody>
                              <tr>
                                <td>品牌</td>
                                <td>其他</td>
                              </tr>
                              <tr>
                                <td>型号</td>
                                <td>6631</td>
                              </tr>
                              <tr>
                                <td>发货地</td>
                                <td>广东中山</td>
                              </tr>
                              <tr>
                                <td>电压</td>
                                <td>220V AC</td>
                              </tr>
                              <tr>
                                <td>是否带光源</td>
                                <td>否</td>
                              </tr>
                              <tr>
                                <td>光源接口</td>
                                <td>螺口</td>
                              </tr>
                            </tbody>
                          </table>
                          <ul>
                              <li>
                                  <img src="../../public/img/product-detail/right1.jpg">
                                </li>
                            <li>
                              <img src="../../public/img/product-detail/right2.jpg">
                            </li>
                            <li>
                              <img src="../../public/img/product-detail/right3.jpg">
                            </li>
                            <li>
                              <img src="../../public/img/product-detail/right4.jpg">
                            </li>
                            <li>
                              <img src="../../public/img/product-detail/right5.jpg">
                            </li>
                            <li>
                              <img src="../../public/img/product-detail/right6.jpg">
                            </li>
                          </ul>
                        </div>
                        <div id="content2"  v-show="index===1">
                            <table>
                                <tbody>
                                  <tr>
                                    <td>品牌</td>
                                    <td>其他</td>
                                  </tr>
                                  <tr>
                                    <td>型号</td>
                                    <td>6631</td>
                                  </tr>
                                  <tr>
                                    <td>发货地</td>
                                    <td>广东中山</td>
                                  </tr>
                                  <tr>
                                    <td>电压</td>
                                    <td>220V AC</td>
                                  </tr>
                                  <tr>
                                    <td>是否带光源</td>
                                    <td>否</td>
                                  </tr>
                                  <tr>
                                    <td>光源接口</td>
                                    <td>螺口</td>
                                  </tr>
                                  <tr>
                                      <td>接口规格</td>
                                      <td>E14</td>
                                    </tr>
                                    <tr>
                                      <td>安装方式</td>
                                      <td>明装式</td>
                                    </tr>
                                    <tr>
                                      <td>材质</td>
                                      <td>铜,玻璃,水晶</td>
                                    </tr>
                                    <tr>
                                      <td>灯体颜色</td>
                                      <td>铜色</td>
                                    </tr>
                                    <tr>
                                      <td>外形</td>
                                      <td>组合形状</td>
                                    </tr>
                                    <tr>
                                      <td>风格</td>
                                      <td>欧式,中式,田园,现代,古典,奢华,其它</td>
                                    </tr>
                                    <tr>
                                        <td>用途</td>
                                        <td>家用,商用,其它</td>
                                      </tr>
                                      <tr>
                                        <td>适用场所</td>
                                        <td>室内,餐厅,客厅,卧室,厨房,走廊,阳台,会议室,大堂,梳妆台,工程用,其它</td>
                                      </tr>
                                      <tr>
                                        <td>控制方式</td>
                                        <td>外部控制</td>
                                      </tr>
                                </tbody>
                              </table>
                        </div>
                        <div id="content3"  v-show="index===2">
                            公司奉行“服务第一、质量第一、信誉第一”的宗旨，通过严格的内部管理和科学的营销机制，产品赢得了广大用户的信赖和厚爱，销售网络遍及全国二十多个省、市、自治区。
                        </div>
                        <div id="content4"  v-show="index===3">
                          <p>一.按厂家保修条例免费提供保修期内的上门维修服务</p>
                          <p>二.免费为保修期内出故障的led灯具提供更换及维修</p>
                          <p>三.免费提供售前、售后技术咨询</p>
                          <p>四.免费提供定期跟踪维护</p>
                        </div>
                  </div>
                </div>
          </div>   
      </div>
    </div>
 </div>
</template>
<script>
  export default {
    data(){
      return{
        maskShow:false,
        maskStyle:{
          left:0,
          top:0
        },
        iconImgs:[
          {
            src:"img/product/sm/016-1.png"
          },
          {
            src:"img/product/sm/016-2.png"
          },
          {
            src:"img/product/sm/016-3.png"
          },
          {
            src:"img/product/sm/016-4.png"
          }
        ],
        lgUrls:[
          'url(img/product/lg/016-1.png)',
          'url(img/product/lg/016-2.png)',
          'url(img/product/lg/016-3.png)',
          'url(img/product/lg/016-4.png)'
        ],
        serve:[' 商 品 详 情 ',' 商 品 参 数 ',' 配 送 服 务 ',' 售 后 服 务 '],
        index:0,
        n:0
      }
    },
    computed:{
      bgPosition(){
      var left=parseInt(this.maskStyle.left);
      var top=parseInt(this.maskStyle.top);
      return `-${left*8/5}px -${top*8/5}px`
      }
    },
    methods:{
      sImgOver(e){
        var i=e.target.parentNode.dataset.m;
        // console.log(e.target.parentNode.dataset.m)
        this.n=i;
      },
      jump(i){
        this.index=i;
      },
      toggle(){
        this.maskShow=!this.maskShow;
      },
      maskMove(e){
         var left=e.offsetX-110;
         var top=e.offsetY-110;
         if(left<0){left=0}
         else if(left>220){left=220}
          if(top<0){top=0}
         else if(top>220){top=220}
         top+="px";
         left+="px";
       this.maskStyle={left,top}   
      }

    }
  }
</script>
<style>
    /* 上部 样式 */
  #product-details{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    margin-top:15px;
    background:#fff;
  }
  /* 上>左：产品预览图 */
  #preview{
    width:440px;
    position:relative;
  }
  #preview>#mediumDiv{
    position:relative;
  }
  #preview>#mediumDiv>img{
    width:440px;
  }
  #preview>#mediumDiv>#mask{
    position:absolute;
    width:220px;
    height:220px;
    background:#ffa;
    opacity:0.5;
    top:220px;
    left:220px;
  }
  #preview>#mediumDiv>#superMask{
    position:absolute;
    width:440px;
    height:440px;
    opacity:0;
    top:0;
    left:0;
    cursor:move;
  }
  #preview>#largeDiv{
    position:absolute;
    width:440px;
    height:440px;
    background:#fff;
    background-repeat:no-repeat;
    border:1px solid #ddd;
    top:30px;
    left:445px;
    z-index:999;
  }
  #preview ul{
    display:flex;
    justify-content:space-between;
    margin-top:10px;
  }
  #preview ul>li img{
    width:82px;
  }
  #preview ul>li img:hover{
    border:2px solid #f4a064;
    box-sizing:border-box;
  }
  /* 上>中：详情 */
  #show-details{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
  }
  #show-details h2{
    color:#333;
    margin-bottom:5px;
  }
  #show-details>div.price{
    padding:15px;
    background:linear-gradient(to bottom,#f0f0f0,#e0e0e0);
    border-radius:3px;
  }
  #show-details>div.price>div:first-child{
    font-size:14px;
    margin-bottom:15px;
  }
  #show-details>div.price span{
    font-size:18px;
    color:#f4a064;
  }
  #show-details p{
    font-size:14px;
    margin:5px 0;
  }
  #show-details p b{
    margin-right:25px;
  }
  a.pro{
    padding:8px 6px;
    margin:0 5px 5px 0;
    border:1px solid #666;
    display:inline-block;
  }
  #show-details>p.count{
    margin-top:10px;
  }
  #show-details>p.count span{
    display:inline-block;
    width:36px;
    height:35px;
    background:#ddd;
    text-align:center;
    line-height:35px;
    color:#333;
    font-size:18px;
    cursor:pointer;
  }
  #show-details>p.count input{
    width:36px;
    height:35px;
    margin:0 5px;
    border:1px solid #ddd;
    outline:0;
    text-align:center;
    line-height:35px;
    box-sizing:border-box;
  }
  #show-details>div:last-child{
    display:flex;
  }
  #show-details p.btns a.buy,#show-details p.addcart a.add{
    display:inline-block;
    width:150px;
    height:45px;
    background:#ff6600;
    text-align:center;
    line-height:45px;
    font-size:20px;
    color:#fff;
    margin:10px 0 10px 50px;
    border:1px solid #ff6600;
    border-radius:5px;
  }
  #show-details p.addcart a.add{
    color:#ff6600;
    background:#ffdfbf;
    border:1px solid #ff6600;
  }
  /* 上>右：店铺 */
  #store{
    padding:15px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:220px;
    border:1px solid #e6e6e6;
  }
  #store>p:first-child{
    font-size:18px;
    font-weight:bold;
    margin-left:20px;
  }
  hr{
    background:#e5e5e5;
    width:95%;
  }
  #store>p:nth-child(3){
    text-align:center;
  }
  #store>p:nth-child(3)>img{
    width:180px;
    height:90px;
  }
  #store>p:nth-child(4){
    font-size:16px;
    text-align:center;
  }
  #store>p:last-child{
    text-align:center;
  }
  #store>p:last-child>a{
    display:inline-block;
    width:80px;
    height:35px;
    text-align:center;
    line-height:35px;
    font-size:16px;
    border-radius:3px;
  }
  #store>p:last-child>a:first-child{
    color:#fff;
    margin-right:30px;
    background:#ff6600;
    border:1px solid #ff6600;
  }
  #store>p:last-child>a:last-child{
    color:#ff6600;
    background:#ffdfbf;
    border:1px solid #ff6600;
  }
  /* 下部分样式 */
  #product_bottom{
    margin-top:20px;
    display:flex;
    justify-content:space-between;
  }
  /* 下左部分样式 */
  #product_bottom>div.recommend{
    width:260px;
    text-align:center;
    border:1px solid #dcdcdc;
  }
  #product_bottom>div.recommend>p{
    font-size:18px;
    padding:10px 0;
    background:linear-gradient(to bottom,#f0f0f0,#e0e0e0);
    border-bottom:1px solid #dcdcdc;
  }
  #product_bottom>div.recommend ul li{
    margin-top:10px;
    padding:10px 0;
  }
  #product_bottom>div.recommend ul li a img{
    width:240px;
    transition:all .5s linear;
  }
  #product_bottom>div.recommend ul li a img:hover{
    transform:scale(1.05);
  }
  #product_bottom>div.recommend ul li p.title{
    font-size:16px;
    margin:10px 0;
    width:220px;
    padding-left:20px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  #product_bottom>div.recommend ul li p.price{
    font-size:16px;
    color:#ff3300;
  }
  /* 下>右 */
  #product_bottom div.detail{
    width:920px;
    height:3020px;
    border:1px solid #dcdcdc;
  }
  #product_bottom div.detail #my-tabs .tabs a{
    display:inline-block;
    text-align:center;
  }
  #product_bottom div.detail #my-tabs .tabs li{
    float:left;
    font-size:18px;
    padding:10px 20px;
    background:linear-gradient(to bottom,#f0f0f0,#e0e0e0);
    border-right:1px solid #dcdcdc;
    cursor:pointer;
  }
  .isActive{
    background:#fff;
    border-bottom:0;
    border-top:2px solid #ff3300;
  }
  #product_bottom div.detail #my-tabs .tabs li.a{
    color:#ff3300;
  }
  #product_bottom div.detail #my-tabs .container{
    position:relative;
  }
  /*
  #product_bottom div.detail #my-tabs .container .active{
    display:block;
  }*/
  #product_bottom div.detail #my-tabs .container>div{
    padding:30px;
    position:absolute;
    top:40px;
    left:0; 
  }
  #product_bottom div.detail #my-tabs .container table{
    font-size:14px;
    border:1px solid #dcdcdc;
    border-collapse:collapse;
    margin-bottom:15px;
  }
  #product_bottom div.detail #my-tabs .container table tr>td:first-child{
    width:120px;
    text-align:right;
    padding:10px 15px 10px 0;
    background:#f7f7f7;
    border:1px solid #dcdcdc;
  }
  #product_bottom div.detail #my-tabs .container table tr>td:last-child{
    width:600px;
    text-align:left;
    padding:10px 0 10px 15px;
    border:1px solid #dcdcdc;
  }
  #content1 ul li img{
    width:450px;
    margin-left:150px;
  }
</style>