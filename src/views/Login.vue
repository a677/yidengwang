<template>
 <div>
   <div id="login" class="main">
		<div class="top">
			<div class="top">
				<span>您好，欢迎来到灯具批发商城_灯亿网！</span>
				<span>
					<a href="index.html">灯亿网首页</a>|
					<a href="javascript:;">买家中心</a>|
					<a href="javascript:;">卖家中心</a>|
					<a href="javascript:;">在线客服</a>|
					<a href="javascript:;">帮助中心</a>|
					<a href="javascript:;">手机版</a> 
				</span>
			</div>
		</div>
		<div class="center clear">
			<p>
				<a href="javascript:;">
					<img src="../../public/img/header/index_logo.png" />
				</a>
				<img src="../../public/img/user-login/logo_txt.png">
			</p>
			<div>
				<img src="../../public/img/user-login/login_left.png" class="lf">
				<div class="lf">
					<p>
						<span>会员登录</span>
						<a href="user_reg.html">立即注册</a>
					</p>
					<p>
						<input type="text" placeholder="请输入账号" name="uname">
						<img src="../../public/img/user-login/yhm.png">
					</p>
					<p>
						<input type="password" placeholder="请输入密码" name="upwd">
						<img src="../../public/img/user-login/mm.png">
					</p>
					<p>
						<a href="javascript:;">忘记密码?</a>
					</p>
					<p>
						<input type="button" value="登录">
					</p>
				</div>
			</div>
		</div>
		<div class="bottom">
			<p>
				<a href="javascript:;"> 关于我们 </a> |
				<a href="javascript:;"> 帮助中心  </a> |
				<a href="javascript:;"> 商家入驻  </a> |
				<a href="javascript:;"> 招贤纳士  </a>
			</p>
			<p>京ICP备案号：京ICP备15056225号</p>
			<p>
				<a href="javascript:;">
					<img src="../../public/img/user-login/icon_01.png">
				</a>
				<a href="javascript:;">
						<img src="../../public/img/user-login/icon_02.png">
				</a>
				<a href="javascript:;">
						<img src="../../public/img/user-login/icon_03.png">
				</a>
			</p>
		</div>
	</div>
 </div>
</template>
<script>
  export default {
    data(){
      
    }
  }
</script>
<style scoped>
    /* 上部分样式 */
  #login>div.top{
      padding:10px 0 10px 10px;
      background:#f1f1f1;
  }
  #login>div.top span:last-child{
      margin-left:595px;
  }
  #login>div.top span:last-child>a{
      margin-right:10px;
  }
  /* 中间部分 样式 */
  #login>div.center{
      padding:20px 0 20px 180px;
      background:#fff;
  }
  #login>div.center>p{
      margin-bottom:20px;
  }
  #login>div.center>p>img{
      margin-left:100px;
  }
  #login>div.center>div>img{
      margin-right:50px;
  }
  #login>div.center>div>div.lf{
      width:310px;
      height:350px;
      border:2px solid #dcdcdc;
      border-radius:5px;
      padding:50px 0 20px 40px;
      box-sizing:border-box;
  }
  #login>div.center>div>div.lf>p:first-child >span{
      font-size:20px;
      font-weight:bold;
  }
  #login>div.center>div>div.lf>p:first-child >a{
      font-size:16px;
      color:#f4a064;
      margin-left:70px;
  }
  #login>div.center>div>div.lf>p:nth-child(2){
      margin:40px 0 20px 0;
  }
  #login>div.center>div>div.lf>p>input{
      width:220px;
      height:35px;
      font-size:16px;
      outline:0;
      padding:0 20px 0 10px;
      box-sizing:border-box;
  }
  #login>div.center>div>div.lf>p>img{
      width:30px;
      height:30px;
      position:relative;
      right:38px;
      bottom:3px;
  }
  #login>div.center>div>div.lf>p:nth-child(4){
      font-size:14px;
      margin:20px 0 20px 160px;
  }
  #login>div.center>div>div.lf>p:last-child>input{
      padding:0 10px;
      color:#fff;
      border:0;
      background:#f4a064;
  }
  /* 下 部分 样式 */
  #login>div.bottom{
      background:#fff;
      padding:50px 0 20px 0;
  }
  #login>div.bottom>p{
      font-size:14px;
      text-align: center;
  }
  #login>div.bottom>p:nth-child(2){
      margin:30px 0 20px 0;
  }
  #login>div.bottom>p:last-child>a{
      margin-right:30px;
  }
</style>