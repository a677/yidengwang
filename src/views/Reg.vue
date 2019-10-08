<template>
 <div>
   <div id="register" class="main">
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
    <div class="welcome">
      <img src="../../public/img/header/index_logo.png">
      <img src="../../public/img/user-login/logo_txt.png">
    </div>
    <div class="parent">
      <div class="container">
        <div class="panel main">
          <img src="../../public/img/user-login/login_left.png">
          <form id="form-register">
            <div class="txt">
              <p>新用户注册
                <span><a href="login.html">直接登陆</a></span>
              </p>
            </div>
            <div class="form-group">
              <label for="uname">用户名：</label>
              <input type="text" placeholder="请输入用户名" name="uname" id="uname" minlength="3" maxlength="12">
              <span class="msg-error">用户名不能为空</span>
            </div>
            <div class="form-group">
              <label for="upwd">登录密码：</label>
              <input type="password" placeholder="请输入密码" name="upwd" id="upwd" minlength="6" maxlength="12">
              <span class="msg-error">密码不能为空</span>
            </div>
            <div class="form-group">
              <label for="upwdconfirm">确认密码：</label>
              <input type="password" placeholder="请确认密码" name="upwdconfirm" id="upwdconfirm" minlength="6" maxlength="12">
              <span class="msg-default hidden">确认密码不能为空</span>
            </div>
            <div class="form-group">
              <label for="email">邮箱：</label>
              <input type="email" placeholder="请输入邮箱地址" name="email" id="email">
              <span class="msg-default hidden">邮箱不能为空</span>
            </div>
            <div class="form-group">
              <label for="phone">手机号：</label>
              <input type="text" placeholder="请输入您的手机号" name="phone" id="phone" pattern="(\+86|0086)?\s*1[3-8]\d{9}">
              <span class="msg-default hidden">请输入合法的手机号</span>
            </div>
            
            <div class="form-group">
              <label></label>
              <input type="button" value="提 交 注 册 信 息" id="bt-register">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <my-footer></my-footer>
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
    /* 上 样式 */
  div.top{
      padding:10px 0 10px 10px;
      background:#f1f1f1;
  }
  div.top span:last-child{
      margin-left:595px;
  }
  div.top span:last-child>a{
      margin-right:10px;
  }
    /* 中间样式  */
  #register div.welcome{
      padding:20px;
      position:relative;
      background:#f1f1f1;
  }
  #register div.welcome img:last-child{
      margin-left:200px;
      position:absolute;
      top:35px;
  }
  /* 下部分  样式 */
  .parent{
      position:relative;
  }
  .container{
      width:100%;
      box-sizing:border-box;
      margin:0 auto;
      overflow-x:hidden;
  }
  .panel{
      border-radius:2px;
      min-height:100px;
      padding:1.2em .6em;
      margin-right:25px;
      box-sizing:border-box;
      background-color:#f1f1f1;
  }
  .parent img{
      position:absolute;
      right:20px;
      width:600px;
      height:430px;
  }
  #form-register div.txt p{
      margin-left:30px;
      font-size:24px;
  }
  #form-register div.txt p{
      margin-left:30px;
      font-size:24px;
  }
  #form-register div.txt p a{
      font-size:18px;
      margin-left:150px;
  }
  .form-group{
      margin-bottom:20px;
  }
  .form-group>label{
      display:inline-block;
      width:90px;
      text-align:right;
      font-size:14px;
      color:#03011f;
  }
  #form-register input{
      border:0;
      outline:0;
  }
  .form-group>input{
      padding:10px 20px;
      width:235px;
      margin-top:12px;
      border-radius:2px;
  }
  input[type="button"]{
      background:#f4a064;
      width:276px;
      color:#fff;
      border-radius:2px;
      font-weight:bold;
      cursor:pointer;
  }
</style>