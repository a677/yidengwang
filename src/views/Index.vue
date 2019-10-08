<template>
<div>
  <div class="main">
  <my-header></my-header>
    <!-- 1.网页头部 -->
    <div id="header"></div>
    <!-- 2.banner广告 -->
    <carousel></carousel>
    <!-- 3.图片导航 -->
    <ul id="pic_nav">
      <li v-for="(img,i) of picNImgs" :key="i">
        <router-link :to="img.to">
          <img :src="img.src">
        </router-link>
      </li>
    </ul>
    <!-- 4.好单品 -->
    <div id="hdp">好&nbsp;&nbsp;单&nbsp;&nbsp;品</div>
    <div id="hdp_pic">
      <div>
        <a href="javascript:;">
          <img src="../../public/img/index/hdp/haodanpinlg.jpg">
        </a>
      </div>
      <div>
        <ul>
          <li v-for="(img,i) of hdpImgs" :key="i">
            <router-link :to="img.to">
              <img :src="img.src">
            </router-link>
            <div>
              <p class="title" v-text="img.title"></p>
              <p class="price" v-text="img.price"></p>
            </div>
          </li>
          
        </ul>
      </div>
    </div> 
    <!-- 5.尾品汇 -->
    <div id="wph">尾&nbsp;&nbsp;品&nbsp;&nbsp;汇</div>
    <div id="wph_pic">
      <ul>
        <li v-for="(img,i) of wphImgs" :key="i">
          <router-link :to="img.to">
            <img :src="img.src">
          </router-link>
          <div>
            <p class="title" v-text="img.title"></p>
            <p class="price" v-text="img.price"></p>
          </div>
        </li>
       
      </ul>
    </div>
    <p id="light">
      <a href="javascript:;">
        <img src="../../public/img/index/wph/light.png">
      </a>
    </p>
    <!-- 6.楼层 -->
    <div id="floor">
      <!-- 1f -->
      <div class="floor floor1" id="f1">
        <div class="title">
          <h2>1F 商业照明</h2>
          <p>
          <router-link v-for="(t,i) of oneTitle" :key="i" :to="t.to" v-text="t.title"></router-link>
          </p>
        </div>
        <div class="floor_pic">
          <div>
            <a href="javascript:;">
              <img src="../../public/img/index/F1/floor1_lg.png">
            </a>
          </div>
          <div>
            <ul>
              <li v-for="(img,i) of oneImgs" :key="i">
                <router-link :to="img.to">
                  <img :src="img.src">
                </router-link>
                <div>
                  <p class="title" v-text="img.title"></p>
                  <p class="price" v-text="img.price"></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="brand"> 
          <router-link v-for="(img,i) of oneBImgs" :key="i" :to="img.to">
            <img :src="img.src">
          </router-link>
        </div>
      </div>
      <p class="sales">
        <a href="jacascript:;">
          <img src="../../public/img/index/F1/sales.jpg">
        </a>
      </p>
      <!-- 2f -->
      <div class="floor floor2" id="f2">
        <div class="title">
          <h2>2F 家居照明</h2>
          <p>
          <router-link v-for="(t,i) of twoTitle" :key="i" :to="t.to" v-text="t.title"></router-link>         
        </p>
        </div>
        <div class="floor_pic">
          <div>
            <a href="javascript:;">
              <img src="../../public/img/index/F2/floor2_lg.png">
            </a>
          </div>
          <div>
            <ul>
              <li v-for="(img,i) of twoImgs" :key="i">
                <a :to="img.to">
                  <img :src="img.src">
                </a>
                <div>
                  <p class="title" v-text="img.title"></p>
                  <p class="price" v-text="img.price"></p>
                </div>
              </li>     
            </ul>
          </div>
        </div>
        <div class="brand"> 
          <router-link v-for="(img,i) of towBImgs" :key="i" :to="img.to">
            <img :src="img.src">
          </router-link>
        </div>
      </div>
      <!-- 3f -->
      <div class="floor floor3" id="f3">
        <div class="title">
          <h2>3F 户外照明</h2>
          <p>
            <router-link v-for="(img,i) of threeTitle" :key="i" :to="img.to" v-text="img.title"></router-link>
          </p>
        </div>
        <div class="floor_pic">
          <div>
            <a href="javascript:;">
              <img src="../../public/img/index/F3/floor3_lg.png">
            </a>
          </div>
          <div>
            <ul>
              <li v-for="(img,i) of threeImgs" :key="i">
                <router-link :to="img.to">
                  <img :src="img.src">
                </router-link>
                <div>
                  <p class="title" v-text="img.title"></p>
                  <p class="price" v-text="img.price"></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="brand">
          <router-link v-for="(img,i) of threeBImgs" :key="i" :to="img.to">
            <img :src="img.src">
          </router-link>
         
        </div>
      </div>
      <p id="project">
        <a href="jacascript:;">
          <img src="../../public/img/index/F3/project.png">
        </a>
      </p>
      <!-- 4f -->
      <div class="floor floor4" id="f4">
        <div class="title">
          <h2>4F 照明光源</h2>
          <p>
            <a href="javascript:;"></a>
            
          </p>
        </div>
        <div class="floor_pic">
          <div>
            <a href="javascript:;">
              <img src="../../public/img/index/F4/floor4_lg.png">
            </a>
          </div>
          <div>
            <ul>
              <li v-for="(img,i) of fourImgs" :key="i">
                  <router-link :to="img.to">
                    <img :src="img.src">
                  </router-link>
                  <div>
                    <p class="title" v-text="img.title"></p>
                    <p class="price" v-text="img.price"></p>
                  </div>
              </li>             
            </ul>
          </div>
        </div>
        <div class="brand">
          <router-link v-for="(img,i) of fourBImgs" :key="i" :to="img.to">
            <img :src="img.src">
          </router-link>
        </div>
      </div>
      <!-- 5f -->
      <div class="floor floor5" id="f5">
        <div class="title">
          <h2>5F 电工电料</h2>
          <p>
             <router-link v-for="(t,i) of fiveTitle" :key="i" :to="t.to">
              <img :src="t.src">
            </router-link>
          </p>
        </div>
        <div class="floor_pic">
          <div>
            <a href="javascript:;">
              <img src="../../public/img/index/F5/floor5_lg.png">
            </a>       
          </div>
          <div>
            <ul>
              <li v-for="(img,i) of fiveImgs" :key="i">
                <router-link :to="img.to">
                  <img :src="img.src">
                </router-link>
                <div>
                  <p class="title" v-text="img.title"></p>
                  <p class="price" v-text="img.price"></p>
                </div>
              </li>
             
            </ul>
          </div>
        </div>
        <div class="brand">
          <router-link v-for="(img,i) of fiveBImgs" :key="i" :to="img.to">
            <img :src="img.src">
          </router-link>        
        </div>
      </div>
      <p class="enter">
        <a href="javascript:;">
          <img src="../../public/img/index/F5/enter.png">
        </a>
      </p>
    </div>
  </div>  
   <!--7.楼梯-->
   <div id="lift">
     <ul class="lift-list">
       <li class="lift_item" v-for="(text,i) of liftTxt" :key="i">
         <router-link class="lift_btn" :to="text.to" @click="come">
           <span class="lift_btn-txt" v-text="text.txt"></span>
         </router-link>
       </li>
     </ul>
   </div>
   <!--8.网页底部-->
  <my-footer></my-footer>
</div>
</template>

<script>
  import carousel from "../components/Carousel.vue"
  export default {
    data(){
      return{ 
        picNImgs:[
          {
            src:"img/index/pic_nav/shangye.jpg",
            to:"jacascript:;"
          },
          {
            src:"img/index/pic_nav/jiaju.jpg",
            to:"jacascript:;"
          },
          {
            src:"img/index/pic_nav/huwai.jpg",
            to:"jacascript:;"
          },
          {
            src:"img/index/pic_nav/zhaoming.jpg",
            to:"jacascript:;"
          },
          {
            src:"img/index/pic_nav/diangong.jpg",
            to:"jacascript:;"
          }
        ],
        hdpImgs:[
          {
            src:"img/index/hdp/haodanpin1.png",
            to:"productdetail",
            title:"光鸿LED照明吸顶灯具客厅卧室方形现代简约大气调光灯饰",
            price:"￥95.00"
          },
          {
            src:"img/index/hdp/haodanpin2.png",
            to:"productdetail",
            title:"光鸿LED照明吸顶灯具客厅卧室方形现代简约大气调光灯饰",
            price:"￥95.00"
          },
          {
            src:"img/index/hdp/haodanpin3.png",
            to:"productdetail",
            title:"光鸿LED照明吸顶灯具客厅卧室方形现代简约大气调光灯饰",
            price:"￥99.00"
          },
          {
            src:"img/index/hdp/haodanpin4.png",
            to:"productdetail",
            title:"光鸿LED照明吸顶灯具客厅卧室方形现代简约大气调光灯饰",
            price:"￥99.00"
          },
          {
            src:"img/index/hdp/haodanpin5.png",
            to:"productdetail",
            title:"光鸿LED照明吸顶灯具客厅卧室方形现代简约大气调光灯饰",
            price:"￥99.00"
          },
          {
            src:"img/index/hdp/haodanpin6.png",
            to:"productdetail",
            title:"光鸿LED照明吸顶灯具客厅卧室方形现代简约大气调光灯饰",
            price:"￥99.00"
          },
          {
            src:"img/index/hdp/haodanpin7.png",
            to:"productdetail",
            title:"光鸿LED照明吸顶灯具客厅卧室方形现代简约大气调光灯饰",
            price:"￥95.00"
          },
          {
            src:"img/index/hdp/haodanpin8.png",
            to:"productdetail",
            title:"光鸿LED照明吸顶灯具客厅卧室方形现代简约大气调光灯饰",
            price:"￥95.00"
          }
        ],
        wphImgs:[
          {
            src:"img/index/wph/weipinhui1.png",
            to:"javascript:;",
            title:"朗士照明天花灯 RS-LC225B 3W",
            price:"￥25.00"
          },
          {
            src:"img/index/wph/weipinhui2.png",
            to:"javascript:;",
            title:"朗士照明筒灯 RS-LT3531 5W",
            price:"￥35.00"
          },
          {
            src:"img/index/wph/weipinhui3.png",
            to:"javascript:;",
            title:"朗士照明筒灯 RS-LC211 10W",
            price:"￥45.00"
          },
          {
            src:"img/index/wph/weipinhui4.png",
            to:"javascript:;",
            title:"朗士照明筒灯 RS-LTY801 12W",
            price:"￥55.00"
          },
          {
            src:"img/index/wph/weipinhui5.png",
            to:"javascript:;",
            title:"朗士照明筒灯 RS-LTC252A 18W",
            price:"￥65.00"
          },
        ],
        oneTitle:[
          {
            title:"筒灯",
            to:"javascript:;"
          },
          {
            title:"射灯",
            to:"javascript:;"
          },
          {
            title:"格栅灯",
            to:"javascript:;"
          },
          {
            title:"格栅射灯",
            to:"javascript:;"
          },
          {
            title:"天花灯",
            to:"javascript:;"
          },
          {
            title:"投光灯",
            to:"javascript:;"
          },
          {
            title:"洗墙灯",
            to:"javascript:;"
          },
          {
            title:"更多 >",
            to:"javascript:;"
          },
        ],
        oneImgs:[
          {
            src:"img/index/F1/floor1_1.png",
            to:"javascript:;",
            title:"全铜花灯 现货批发",
            price:"￥472.00"
          },
          {
            src:"img/index/F1/floor1_2.png",
            to:"javascript:;",
            title:"全铜花灯 现货批发",
            price:"￥852.00"
          },
          {
            src:"img/index/F1/floor1_3.png",
            to:"javascript:;",
            title:"全铜花灯 现货批发",
            price:"￥632.00"
          },
          {
            src:"img/index/F1/floor1_4.png",
            to:"javascript:;",
            title:"全铜花灯 现货批发",
            price:"￥960.00"
          },
          {
            src:"img/index/F1/floor1_5.png",
            to:"javascript:;",
            title:"防爆灯 防尘防水防潮",
            price:"￥36.00"
          },
          {
            src:"img/index/F1/floor1_6.png",
            to:"javascript:;",
            title:"飞利浦LED闪烁筒灯",
            price:"￥112.00"
          },
          {
            src:"img/index/F1/floor1_7.png",
            to:"javascript:;",
            title:"国亮LED射灯",
            price:"￥7.00"
          },
          {
            src:"img/index/F1/floor1_8.png",
            to:"javascript:;",
            title:"绿能亮霞LED筒灯系列",
            price:"￥8.50"
          },
          {
            src:"img/index/F1/floor1_9.png",
            to:"javascript:;",
            title:"艾构 3W 3000K/6500K 喷白/喷塑 LED天花灯",
            price:"￥12.25"
          },
          {
            src:"img/index/F1/floor1_10.png",
            to:"javascript:;",
            title:"朗士照明 COB集成芯片RS-LC系列天花灯",
            price:"￥60.00"
          },

        ],
        oneBImgs:[
          {
            src:"img/index/F1/brand_1.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F1/brand_2.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F1/brand_3.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F1/brand_4.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F1/brand_5.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F1/brand_6.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F1/brand_7.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F1/brand_8.png",
            to:"javascript:;"
          },
        ],
        twoTitle:[
          {
            title:"吸顶灯",
            to:"javascript:;"
          },
          {
            title:"台灯",
            to:"javascript:;"
          },
          {
            title:"吊灯",
            to:"javascript:;"
          },
          {
            title:"镜前灯",
            to:"javascript:;"
          },
          {
            title:"壁灯",
            to:"javascript:;"
          },
          {
            title:"落地灯",
            to:"javascript:;"
          },
          {
            title:"其他",
            to:"javascript:;"
          },
          {
            title:"更多 >",
            to:"javascript:;"
          }
        ],
        twoImgs:[
          {
            src:"img/index/F2/floor2_1.png",
            to:"javascript:;",
            title:"吉豪灯饰7296美式吊灯简约客厅灯餐厅灯卧室灯",
            price:"￥355.00"
          },
          {
            src:"img/index/F2/floor2_2.png",
            to:"javascript:;",
            title:"OLED健康宝宝护眼灯多功能小夜灯健康oled光源",
            price:"￥125.00"
          },
          {
            src:"img/index/F2/floor2_3.png",
            to:"javascript:;",
            title:"经典塑料球泡",
            price:"￥5.00"
          },
          {
            src:"img/index/F2/floor2_4.png",
            to:"javascript:;",
            title:"雷士 LED灯杯",
            price:"￥20.00"
          },
          {
            src:"img/index/F2/floor2_5.png",
            to:"javascript:;",
            title:"LED灯泡 24W螺口超亮LED玉米灯 U型节能灯暖白照明室内",
            price:"￥22.00"
          },
          {
            src:"img/index/F2/floor2_6.png",
            to:"javascript:;",
            title:"吉豪灯饰6933美式吊灯简约客厅灯餐厅灯卧室灯",
            price:"￥672.00"
          },
          {
            src:"img/index/F2/floor2_7.png",
            to:"javascript:;",
            title:"吉豪灯饰全铜7323美式吊灯简约客厅灯餐厅灯卧室灯",
            price:"￥448.00"
          },
          {
            src:"img/index/F2/floor2_8.png",
            to:"javascript:;",
            title:"现代创意宜家北欧餐厅卧室客厅多头灯具美式铁艺复古多头吸顶灯",
            price:"￥100.00"
          },
          {
            src:"img/index/F2/floor2_9.png",
            to:"javascript:;",
            title:"美式乡村工业风方形鸟笼铁艺客厅餐厅吊灯欧式复古创意个性酒吧台",
            price:"￥220.00"
          },
          {
            src:"img/index/F2/floor2_10.png",
            to:"javascript:;",
            title:"loft复古工业风创意个性吊灯咖啡馆酒吧楼梯螺旋铁艺旋转吊灯",
            price:"￥300.00"
          },
        ],
        towBImgs:[
          {
            src:"img/index/F2/brand_1.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F2/brand_2.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F2/brand_3.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F2/brand_4.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F2/brand_5.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F2/brand_6.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F2/brand_7.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F2/brand_8.png",
            to:"javascript:;"
          },
        ],
        threeTitle:[
           {
            title:"路灯",
            to:"javascript:;"
          },
           {
            title:"水底灯",
            to:"javascript:;"
          },
           {
            title:"地埋灯",
            to:"javascript:;"
          },
           {
            title:"庭院灯",
            to:"javascript:;"
          },
           {
            title:"草坪灯",
            to:"javascript:;"
          },
           {
            title:"护栏灯",
            to:"javascript:;"
          },
           {
            title:"其他",
            to:"javascript:;"
          },
           {
            title:"更多 >",
            to:"javascript:;"
          },
        ],
        threeImgs:[
          {
            src:"img/index/F3/floor3_1.png",
            to:"javascript:;",
            title:"LED户外工程中荷花壁灯",
            price:"￥96.00"
          },
          {
            src:"img/index/F3/floor3_2.png",
            to:"javascript:;",
            title:"LED多颗集成大功率泛光灯",
            price:"￥150.00"
          },
          {
            src:"img/index/F3/floor3_3.png",
            to:"javascript:;",
            title:"充电式LED便携手电精灵（手机充电宝，户外作业，红蓝光求救信小夜灯）",
            price:"￥142.00"
          },
          {
            src:"img/index/F3/floor3_4.png",
            to:"javascript:;",
            title:"LED户外壁灯 外墙灯 广场灯 别墅灯 现代创意 简约 工业风",
            price:"￥120.00"
          },
          {
            src:"img/index/F3/floor3_5.png",
            to:"javascript:;",
            title:"LED户外壁灯 外墙灯 广场灯 别墅灯 现代创意 简约",
            price:"￥160.00"
          },
          {
            src:"img/index/F3/floor3_6.png",
            to:"javascript:;",
            title:"LED户外工程大小直六角壁灯阳台灯",
            price:"￥110.00"
          },
          {
            src:"img/index/F3/floor3_7.png",
            to:"javascript:;",
            title:"LED户外工程孔雀之星壁灯阳台灯墙体灯",
            price:"￥180.00"
          },
          {
            src:"img/index/F3/floor3_8.png",
            to:"javascript:;",
            title:"太阳能柱球",
            price:"￥100.00"
          },
          {
            src:"img/index/F3/floor3_9.png",
            to:"javascript:;",
            title:"竹节草坪灯",
            price:"￥100.00"
          },
          {
            src:"img/index/F3/floor3_10.png",
            to:"javascript:;",
            title:"LED户外工程大小弯六角系列壁灯柱头灯",
            price:"￥66.00"
          }
        ],
        threeBImgs:[
           {
             src:"img/index/F3/brand_1.png",
            to:"javascript:;"
           },
           {
             src:"img/index/F3/brand_2.png",
            to:"javascript:;"
           },
           {
             src:"img/index/F3/brand_3.png",
            to:"javascript:;"
           },
           {
             src:"img/index/F3/brand_4.png",
            to:"javascript:;"
           },
           {
             src:"img/index/F3/brand_5.png",
            to:"javascript:;"
           },
           {
             src:"img/index/F3/brand_6.png",
            to:"javascript:;"
           },
           {
             src:"img/index/F3/brand_7.png",
            to:"javascript:;"
           },
           {
             src:"img/index/F3/brand_8.png",
            to:"javascript:;"
           }
        ],
        fourTitle:[
          {
            title:"灯带",
            to:"javascript:;"
          },
          {
            title:"球泡",
            to:"javascript:;"
          },
          {
            title:"尖泡",
            to:"javascript:;"
          },
          {
            title:"拉尾泡",
            to:"javascript:;"
          },
          {
            title:"灯管",
            to:"javascript:;"
          },
          {
            title:"节能灯",
            to:"javascript:;"
          },
          {
            title:"玉米灯",
            to:"javascript:;"
          },
          {
            title:"更多 >",
            to:"javascript:;"
          },
        ],  
        fourImgs:[
          {
            src:"img/index/F4/floor4_1.png",
            to:"javascript:;",
            title:"飞利浦LED球泡E27梨形柔光大球泡龙珠泡圆形节能光源8.5/9.5/11.5",
            price:"￥29.00"
          },
          {
            src:"img/index/F4/floor4_2.png",
            to:"javascript:;",
            title:"洛林（ROlin）LED5W大螺口E27白光灯泡节能灯U型灯泡.5/9.5/11.5",
            price:"￥16.00"
          },
          {
            src:"img/index/F4/floor4_3.png",
            to:"javascript:;",
            title:"高亮LED球泡塑包铝6500K/高亮LED球泡塑包铝3000K",
            price:"￥9.00"
          },
          {
            src:"img/index/F4/floor4_4.png",
            to:"javascript:;",
            title:"3528灯带家装工装款白光暖光蓝光",
            price:"￥8.00"
          },
          {
            src:"img/index/F4/floor4_5.png",
            to:"javascript:;",
            title:"光鸿LED灯泡 7W螺口超亮LED玉米灯 U型节能灯暖白照明室内",
            price:"￥6.00"
          },
          {
            src:"img/index/F4/floor4_6.png",
            to:"javascript:;",
            title:"型号：XZ-D504 功率：心照 18W豆胆泡",
            price:"￥36.00"
          },
          {
            src:"img/index/F4/floor4_7.png",
            to:"javascript:;",
            title:"飞利浦 3W/5W蜡烛尖泡拉尾灯泡可选 LED 尖泡",
            price:"￥30.00"
          },
          {
            src:"img/index/F4/floor4_8.png",
            to:"javascript:;",
            title:"型号：HJSD-P17 功率：黄金时代 35W",
            price:"￥40.00"
          },
          {
            src:"img/index/F4/floor4_9.png",
            to:"javascript:;",
            title:"合家美E14螺口LED光源尖泡",
            price:"￥10.00"
          },
          {
            src:"img/index/F4/floor4_10.png",
            to:"javascript:;",
            title:"合家美E14螺口LED光源尖泡",
            price:"￥120.00"
          },
        ],  
        fourBImgs:[
          {
            src:"img/index/F4/brand_1.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F4/brand_2.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F4/brand_3.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F4/brand_4.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F4/brand_5.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F4/brand_6.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F4/brand_7.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F4/brand_8.png",
            to:"javascript:;"
          },
        ],  
        fiveTitle:[
          {
            title:"开关",
            to:"javascript:;"
          },
          {
            title:"插座",
            to:"javascript:;"
          },
          {
            title:"断路器",
            to:"javascript:;"
          },
          {
            title:"防溅盒",
            to:"javascript:;"
          },
          {
            title:"配电箱",
            to:"javascript:;"
          },
          {
            title:"换气扇",
            to:"javascript:;"
          },
          {
            title:"浴霸节",
            to:"javascript:;"
          },
          {
            title:"更多 >",
            to:"javascript:;"
          },
        ],
        fiveImgs:[
          {
            src:"img/index/F5/floor5_1.png",
            to:"javascript:;",
            title:"TNC开关Z6系列香槟金三孔 不锈钢拉丝面板",
            price:"￥20.00"
          },
          {
            src:"img/index/F5/floor5_2.png",
            to:"javascript:;",
            title:"正泰开关插座 NEW1C 正泰电工 明装墙壁开关 二开单双控开关",
            price:"￥20.00"
          },
          {
            src:"img/index/F5/floor5_3.png",
            to:"javascript:;",
            title:"TNC地插座 五孔地插 全铜防水地板插座 地面电源插座开关面板",
            price:"￥26.00"
          },
          {
            src:"img/index/F5/floor5_4.png",
            to:"javascript:;",
            title:"TNC开关插座香槟金电话电脑网线插座86型墙壁不锈钢拉丝弱电面板",
            price:"￥30.00"
          },
          {
            src:"img/index/F5/floor5_5.png",
            to:"javascript:;",
            title:"TNC开关插座 有线电视tv电话线插座香槟金色拉丝86型弱电墙壁面板",
            price:"￥38.00"
          },
          {
            src:"img/index/F5/floor5_6.png",
            to:"javascript:;",
            title:"开关插座不锈钢香槟金网络网线插座有线电视电脑插座拉丝面板",
            price:"￥24.00"
          },
          {
            src:"img/index/F5/floor5_7.png",
            to:"javascript:;",
            title:"飞利浦 Q8单开16A三极/二三极插座",
            price:"￥23.00"
          },
          {
            src:"img/index/F5/floor5_8.png",
            to:"javascript:;",
            title:"飞利浦 Q8电话电脑/电视电话插座",
            price:"￥48.00"
          },
          {
            src:"img/index/F5/floor5_9.png",
            to:"javascript:;",
            title:"朗士电工K6不锈钢香槟金系列开关",
            price:"￥20.00"
          },
          {
            src:"img/index/F5/floor5_10.png",
            to:"javascript:;",
            title:"TNC开关插座插座面板开关面板墙壁开关一位单控带五孔一开五孔",
            price:"￥30.00"
          },
        ],
        fiveBImgs:[
          {
            src:"img/index/F5/brand_1.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F5/brand_2.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F5/brand_3.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F5/brand_4.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F5/brand_5.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F5/brand_6.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F5/brand_7.png",
            to:"javascript:;"
          },
          {
            src:"img/index/F5/brand_8.png",
            to:"javascript:;"
          },
        ],
        liftTxt:[
          {
            txt:"商业照明",
            to:"#f1"
          },
          {
            txt:"商业照明",
            to:"#f2"
          },
          {
            txt:"家居照明",
            to:"#f3"
          },
          {
            txt:"户外照明",
            to:"#f4"
          },
          {
            txt:"照明光源",
            to:"#f5"
          },
        ],
        // scollTop:0
      } 
    },
   components:{carousel}
  }

</script>
<style scoped>
  /*  @import url(../../public/css/base.css);*/
  /* 图片导航样式 */
  #pic_nav {
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
  }
  /* 好单品和尾品汇的样式 */
  #hdp, #wph {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    background: #fff;
    padding: 10px 0;
    border-bottom: 1px solid #73BC90;
  }
  #hdp_pic,#wph_pic ul{
    display:flex;
    justify-content: space-between;
    background:#fff;
    padding:20px 0;
  }
  #hdp_pic div ul {
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    width:956px;
    margin-left:20px;
  }
  #hdp_pic div ul li a img {
    width:224px;
    height:224px;
    transition:all .5s linear;
  }
  #hdp_pic div ul li a img:hover,#wph_pic ul li a img:hover {
    transform: scale(1.05);
  }
  #hdp_pic div ul li div{
    width:224px;
    font-size:14px;
    padding:10px;
    box-sizing:border-box;
  }
  #hdp_pic div ul li div p.price{
    font-size: 18px;
    color: #F4A064;
    margin-top: 5px;
  }

  #wph_pic ul li a img{
    width:230px;
    height:230px;
    transition:all .5s linear; 
  }
  #wph_pic ul li div{
    width:230px;
    font-size:14px;
    padding:10px 0;
  }
  #wph_pic ul li div p.price{
    font-size: 18px;
      color: #F4A064;
      margin-top: 5px;
  }
  /* 楼层样式 */
  #floor div.floor div.title{
    display:flex;
    padding:10px 20px;
    margin:20px 0;
  } 
  #floor div.floor1 div.title{
    background:#3f9379;
  }
  #floor div.floor div.title h2{
    color:#fff;
  }
  #floor div.floor div.title p a{
    margin-left:20px;
    color:#fff;
  }
  #floor div.floor div.title p a:hover{
    text-decoration: underline;
  }
  #floor div.floor div.title p{
    font-size: 16px;
  }
  #floor div.floor div.title p{
    margin-left:495px;
  }
  #floor div.floor div.floor_pic,#floor div.floor div.floor_pic ul{
    display:flex;
    justify-content: space-between;
  }
  #floor div.floor div.floor_pic ul{
    flex-wrap: wrap;
    width:940px;
    margin-left:20px;
  }
  #floor div.floor div.floor_pic ul li div{
    width:180px;
    font-size:16px;
    padding:10px;
    box-sizing: border-box;
  }
  #floor div.floor div.floor_pic ul li div p.title{
    width:160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  #floor div.floor div.floor_pic ul li div p.price{
    font-size:18px;
    color:#f4a064;
    margin-top:10px;
  }
  #floor div.floor div.floor_pic ul li a img:hover{
    transform: scale(1.05);
  }
  #floor div.floor div.floor_pic ul li a img{
    transition: all 0.5s linear;
  }
  #floor div.brand{
    display:flex;
    justify-content: space-between;
    padding:20px;
    margin:20px 0;
    background:#fff;
  }
  #floor div.brand a img{
    width:120px;
    height:60px;	
  }
  #floor div.floor2 div.title{
    background:#ec6667;	
  }
  #floor div.floor2 div.title p{
    margin-left:545px;
  }
  #floor div.floor3 div.title{
    background:#4e587f;
  }
  #floor div.floor4 div.title{
    background:#61467e;
  }
  #floor div.floor4 div.title p{
    margin-left:530px;
  }
  #floor div.floor5 div.title{
    background:#9c735b;
  }
  #lift{
    margin-top:25px;
    position:fixed;
    z-index:100;
    background-color:#918888;
    left:10px;
    top:100px;
  }
  .lift_item{
    border-top:1px solid #b1aaaa;
    transition:all .3s linear;
  }
  .lift_item.show{
    
  }
  .lift_item:hover,.lift_item_on{
    position:relative;
    border-bottom:1px solid #d70b1c;
    margin-bottom:-1px;
    border-color:#d70b1c;
    background-color:#d70b1c;
  }
  .lift_btn{
    overflow:hidden;
    display:block;
    width:34px;
    padding:10px 5px;
    line-height:14px;
    text-align:center;
    color:#fefefe;
    transition:color .1s;
  }

</style>