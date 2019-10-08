<template>
  <div>
  <my-header></my-header>
   <div id="products" class="main">
    <div class="classify">
      <p>
          <span>商品分类</span>
          <a href="javascript:;">商业照明</a>
          <a href="javascript:;">家居照明</a>
          <a href="javascript:;">户外照明</a>
          <a href="javascript:;">照明光源</a>
          <a href="javascript:;">电工电料</a>
          <a href="javascript:;">其他照明</a>
      </p>
      <p>
          <span>活动专区</span>
          <a href="javascript:;">超值购</a>
          <a href="javascript:;">尾品汇</a>
      </p>
    </div>
    <div class="ranking">
      <ul class="clear">
          <li>
              <a href="javascript" class="active">综 合</a>
          </li>
          <li>
                <a href="javascript">销 量</a>
          </li>
          <li>
                <a href="javascript">新 品</a>
          </li>
          <li>
                <a href="javascript">价 格</a>
          </li>
      </ul>
    </div>
    <div id="cart-list">
      <div id="list">
          <div class="list">
              <ul class="clear" id="show-list">
                  <li v-for="(img,i) of imgs" :key="i">
                      <router-link :to="img.picTo" :title="img.title">
                          <img :src="img.src" :alt="img.title">
                      </router-link>
                      <p class="title" v-text="img.title"></p>
                      <p class="price" v-text="img.price"></p>
                      <div>
                          <span class="reduce" @click="reduce" :data-m='i'>-</span>
                          <input type="text" v-model:value="img.n">
                          <span class="add" @click="add" :data-m='i'>+</span>
                          <router-link :to="img.shopTo" class="addCart" >加入购物车</router-link>
                      </div>
                  </li>
                 
              </ul>
          </div>
          <div id="pages">
              <a href="javascript:;" class="previous disabled">上一页</a>
              <a href="javascript:;" class="current">1</a>
              <a href="javascript:;">2</a>
              <a href="javascript:;">3</a>
              <a href="javascript:;">4</a>
              <a href="javascript:;">5</a>
              <a href="javascript:;" class="next">下一页</a>
          </div>
      </div>
      <div id="cart"></div>
    </div>
   </div>
   <my-footer></my-footer>
</div>
</template>
<script>
export default {
  data(){
        return{
        imgs:[
            {
                src:"img/product/012-1.png",
                picTo:"productdetail",
                title:"LED全铜花灯 现货批发",
                price:"市场指导价: ¥ 488.00",
                shopTo:"javascript:;",
                n:1
            },
            {
                src:"img/product/008-1.jpg",
                picTo:"productdetail",
                title:"LED全铜花灯 现货批发",
                price:"市场指导价: ¥ 588.00",
                shopTo:"javascript:;",
                n:1
            },
            {
                src:"img/product/014-1.png",
                picTo:"productdetail",
                title:"LED全铜花灯 现货批发",
                price:"市场指导价: ¥ 688.00",
                shopTo:"javascript:;",
                n:1
            },
            {
                src:"img/product/018-1.png",
                picTo:"productdetail",
                title:"LED全铜花灯 现货批发",
                price:"市场指导价: ¥ 788.00",
                shopTo:"javascript:;",
                n:1
            },
            {
                src:"img/product/005-1.png",
                picTo:"productdetail",
                title:"LED全铜花灯 现货批发",
                price:"市场指导价: ¥ 888.00",
                shopTo:"javascript:;",
                n:1
            },
            {
                src:"img/product/006-1.png",
                picTo:"productdetail",
                title:"LED全铜花灯 现货批发",
                price:"市场指导价: ¥ 988.00",
                shopTo:"javascript:;",
                n:1
            },
            {
                src:"img/product/007-1.png",
                picTo:"productdetail",
                title:"LED全铜花灯 现货批发",
                price:"市场指导价: ¥ 1088.00",
                shopTo:"javascript:;",
                n:1
            },
            {
                src:"img/product/002-1.jpg",
                picTo:"productdetail",
                title:"LED全铜花灯 现货批发",
                price:"市场指导价: ¥ 1188.00",
                shopTo:"javascript:;",
                n:1
            },
            {
                src:"img/product/009-1.jpg",
                picTo:"productdetail",
                title:"LED全铜花灯 现货批发",
                price:"市场指导价: ¥ 399.00",
                shopTo:"javascript:;",
                n:1
            },
            {
                src:"img/product/010-1.jpg",
                picTo:"productdetail",
                title:"LED全铜花灯 现货批发",
                price:"市场指导价: ¥ 499.00",
                shopTo:"javascript:;",
                n:1
            },
            {
                src:"img/product/011-1.png",
                picTo:"productdetail",
                title:"LED全铜花灯 现货批发",
                price:"市场指导价: ¥ 599.00",
                shopTo:"javascript:;",
                n:1
            },
            {
                src:"img/product/001-1.png",
                picTo:"productdetail",
                title:"LED全铜花灯 现货批发",
                price:"市场指导价: ¥ 699.00",
                shopTo:"javascript:;",
                n:1
            },
            {
                src:"img/product/013-1.png",
                picTo:"productdetail",
                title:"LED全铜花灯 现货批发",
                price:"市场指导价: ¥ 799.00",
                shopTo:"javascript:;",
                n:1
            },
            {
                src:"img/product/003-1.jpg",
                picTo:"productdetail",
                title:"LED全铜花灯 现货批发",
                price:"市场指导价: ¥ 899.00",
                shopTo:"javascript:;",
                n:1
            },
            {
                src:"img/product/015-1.png",
                picTo:"productdetail",
                title:"LED全铜花灯 现货批发",
                price:"市场指导价: ¥ 999.00",
                shopTo:"javascript:;",
                n:1
            },
            {
                src:"img/product/016-1.png",
                picTo:"productdetail",
                title:"LED全铜花灯 现货批发",
                price:"市场指导价: ¥ 1099.00",
                shopTo:"javascript:;",
                n:1
            }
        ]
        }
    },
    methods:{
        add(e){
          var i=e.target.dataset.m;
            this.imgs[i].n++;
        },
        reduce(e){
            var i=e.target.dataset.m;
            if(this.imgs[i].n>1){
            this.imgs[i].n--;
            }
        
        }
    }

    }
</script>
<style scoped>
  #products{
      background:#fff;
  }
  #products div.classify{
      margin:50px 0;
      border:1px solid #dcdcdc;
  }
  #products div.classify p{
      height:50px;
      line-height:50px;
  }
  #products div.classify p:last-child{
      border-top:1px solid #dcdcdc;
  }
  #products div.classify p span{
      display:inline-block;
      width:120px;
      font-size:16px;
      text-align:right;
      padding-right:15px;
      background:#f6f6f6;
      border-right:1px solid #dcdcdc;
  }
  #products div.classify p a{
      font-size:14px;
      margin-left:15px;
  }
  #products div.ranking{
      width:960px;
      margin:20px 0;
      background:linear-gradient(to bottom,#f5f4f5 0%,#e6e0e5 100%);
      border:1px solid #dcdcdc;
  }
  #products div.ranking ul li{
      float:left;
      font-size:14px;
      width:100px;
      height:40px;
      line-height:40px;
      text-align:center;
      border:1px solid #dcdcdc;
      padding:0 20px;
      border-top:0;
      border-bottom:0;
      border-left:0;
  }
  #products div.ranking ul li:first-child a.active{
      color:#f4a064;
  }
  #cart_list{
    display:flex;
    justify-content:space-between;
  }
  #show-list{
      width:970px;
  }
  #show-list li{
      float:left;
      padding:10px;
      margin:10px;
      border:1px solid #e5e5e5;
      box-sizing:border-box;
  }
  #show-list li a img{
      width:198px;
      height:198px;
      transition:all 0.5s linear;
  }
  #show-list li a img:hover{
      transform:scale(1.05);
  }
  #products div.list ul li p.title{
      font-size:16px;
      width:200px;
      font-weight:bold;
      overflow:hidden;
      text-overflow: ellipsis;
      white-space:nowrap;
  }
  #show-list li p{
      margin-top:10px;
  }
  #show-list li p.price{
      font-size:14px;
      font-weight:bold;
      color:#f4a064;
  }
  #show-list>li>div{
      margin-top:10px;
  }
  #show-list>li>div>span{
      display:inline-block;
      font-size:32px;
      width:24px;
      height:24px;
      line-height:24px;
      text-align:center;
      color:#fff;
      cursor: pointer;
      background:linear-gradient(to bottom,#f0f0f0,#e0e0e0);
      vertical-align:top;
  }
  #show-list>li>div>input{
      width:25px;
      height:24px;
      box-sizing: border-box;
      border:none;
      text-align:center;
      outline:none;
      margin:0 3px;
      position:relative;
      bottom:4px;
  }
  #show-list>li>div>a{
      font:14px simhei;
      display:inline-block;
      width:100px;
      height:32px;
      line-height:32px;
      text-align:center;
      background:#ff8a00;
      border-radius:2px;
      color:#fff;
      /* cursor:pointer; */
      position:relative;
      top:-4px;
  }
  #pages{
      height:45px;
      text-align:center;
      line-height:45px;
      background:linear-gradient(to bottom,#f5f5f5 0%,#e6e0e5 100%);
  }
  #pages a{
      color:#ff8a00;
      padding:8px 12px;
      border:1px solid #ddd;
      border-radius:4px;
      margin-right:10px;
  }
  #pages a.disabled{
      color:#bfbfbf;
      background:#f2f2f2;
      border:1px solid #bfbfbf;
  }
  #pages a.current{
      color:#fff;
      background:#ff8a00;
      border-color:#ff8a00;
  }

</style>
