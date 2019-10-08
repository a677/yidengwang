<template>
<div>
  <footer id="footer">
    <div id="footer" class="main">
        <div class="footer_top">
            <ul>
                <li>
                    <img src="../../public/img/footer/footer1.png">
                    <h2>正品保证</h2>
                    <p>正品行货 放心选购</p>
                </li>
                <li>
                    <img src="../../public/img/footer/footer2.png">
                    <h2>特色服务</h2>
                    <p>产品供应 采购报价</p>
                </li>
                <li>
                    <img src="../../public/img/footer/footer3.png">
                    <h2>名品特卖</h2>
                    <p>灯具齐全 轻松购物</p>
                </li>
                <li>
                    <img src="../../public/img/footer/footer4.png">
                    <h2>帮助中心</h2>
                    <p>放心购买 随心选购</p>
                </li>
            </ul>
        </div>
        <hr>
        <div class="footer_center">
            <div class="footer_center_left">
                <img src="../../public/img/header/index_logo.png">
                <h2>400-1133-126</h2>
                <p> 周一至周日 8:30-22:00</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th><a href="javascript:;">
                            关于我们
                        </a></th>
                        <th><a href="javascript:;">
                            新手指南
                        </a></th>
                        <th><a href="javascript:;">
                            交易安全
                        </a></th>
                        <th><a href="javascript:;">
                            商家合作
                        </a></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="javascript:;">
                            关于灯亿
                        </a></td>
                        <td><a href="javascript:;">
                            会员注册
                        </a></td>
                        <td><a href="javascript:;">
                            买家防骗
                        </a></td>
                        <td><a href="javascript:;">
                            商家入驻
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="javascript:;">
                            招贤纳士
                        </a></td>
                        <td><a href="javascript:;">
                            用户登录
                        </a></td>
                        <td><a href="javascript:;">
                            交易纠纷
                        </a></td>
                        <td><a href="javascript:;">
                            合作热线
                        </a></td>
                    </tr>
                    <tr>
                        <td><a href="javascript:;">
                            意见建议
                        </a></td>
                        <td><a href="javascript:;">
                            密码找回
                        </a></td>
                        <td><a href="javascript:;">
                            维权举报
                        </a></td>
                        <td><a href="javascript:;">
                        </a></td>
                    </tr>
                </tbody>
            </table>
            <div class="footer_center_right">
                <div>
                    <p>微信订阅号</p>
                    <img src="../../public/img/footer/dingyuehao.jpg">
                </div>
                <div>
                    <p>微信服务号</p>
                    <img src="../../public/img/footer/fuwuhao.jpg">
                </div>
            </div>
        </div>
        <div class="footer_bottom">
            <p>
                友情链接：
                <a href="javascript:;">灯具</a> |
                <a href="javascript:;">古盏堂</a> |
                <a href="javascript:;">互联网家居</a> |
                <a href="javascript:;">乐多购物网</a> |
                <a href="javascript:;">灯具设计</a>
            </p>
            <p>
                    <a href="javascript:;">关于我们</a> |
                    <a href="javascript:;">帮助中心</a> |
                    <a href="javascript:;">商家入驻</a> |
                    <a href="javascript:;">招贤纳士</a>
                </p>
            <p>灯具批发、灯饰批发就上灯具网上批发商城——灯亿网</p>
            <p>按字母分类：A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0-9</p>
            <div class="beian">
                <p>                   
                    京ICP备案号：京ICP备15056225号 
                    <img src="../../public/img/footer/pic.gif">
                </p>
                <p>
                    <img src="../../public/img/footer/publicSecurityIcon.png">
                    京公网安备 11030102010168号
                </p>
            </div>
            <div>
                <a href="javascript:;">
                <img src="../../public/img/footer/icon_02.png">
                </a>
                <a href="javascript:;">
                    <img src="../../public/img/footer/icon_03.png">
                </a>
            </div>
        </div>
    </div>
  </footer>
</div>
</template>
<script>
  export default {
    data(){
      return{}
    }
  }
</script>
<style scoped>
  #footer{
      background:#fff;
  }
  /* 上  样式 */
  #footer>div.footer_top{
      padding:30px 50px 10px;
      box-sizing:border-box;
  }
  #footer>div.footer_top>ul{
      display: flex;
      justify-content:space-between;
  }
  #footer>div.footer_top>ul>li{
      text-align:center;
  }
  #footer>div.footer_top>ul>li>img{
      width:50px;
      height:50px;
  }
  #footer>div.footer_top>ul>li>h2{
      margin:5px 0;
  }
  #footer>div.footer_top>ul>li>p{
      font-size:14px;
      margin-bottom:10px;
  }
  /*   中  样式   */
  #footer>div.footer_center{
      width:100%;
      display:flex;
      justify-content:space-between;
      padding:10px 30px;
      box-sizing:border-box;
  }
  /*   中-左 样式 */
  #footer>div.footer_center>div.footer_center_left>img{
      width:150px;
      height:70px;
  }
  #footer>div.footer_center>div.footer_center_left>h2{
      margin:5px 0;
      text-align:center;
  }
  #footer>div.footer_center>div.footer_center_left>p{
      font-size:14px;
      text-align: center;
  }
  /*  中-中  样式 */
  #footer>div.footer_center>table{
      font-size:14px;
      width:500px;
      height:100px;
      text-align:center;
  }
  /*   中-右   样式*/
  #footer>div.footer_center>div.footer_center_right{
      display:flex;
      justify-content:space-between;
      text-align:center;
      font-size:14px;
  }
  #footer>div.footer_center>div.footer_center_right>div{
      margin-right:10px;
  }
  #footer>div.footer_center>div.footer_center_right>div>p{
      margin-bottom:5px;
  }
  /*   下  样式 */
  #footer>div.footer_bottom{
      text-align:center;
      padding:10px 0;
  }
  #footer>div.footer_bottom>p{
      font-size:14px;
      margin-bottom:10px;
  }
  #footer>div.footer_bottom>div.beian>p{
      display:inline-block;
      margin:0 20px 10px 0;
      font-size:14px;
  }
  #footer>div.footer_bottom>div:last-child{
      width:300px;
      display:flex;
      justify-content:space-between;
      margin-left:450px;
  }
</style>