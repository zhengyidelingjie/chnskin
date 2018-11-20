<template>
	<main>
	<div id="head">
		<mt-header title="用户登录">
		  <router-link to="/" slot="left">
		    <mt-button icon="back" @click="handleClose"></mt-button>
		  </router-link>
		</mt-header>		
 </div>
 <div class="form">
 	<span><label for="username"></label><input type="text" placeholder="请输入手机号码" id="username"/></span>
 		<span><label for="pass"></label><input type="password" placeholder="请输入6个字符，数字或字母" id="pass"/></span>
 		<span class="login">立即登录</span>
 	<p><router-link to='/register'><span class="register">立即注册</span></router-link> | <span>忘记密码？</span></p>
 </div>
	</main>
</template>

<script>
export default {
methods: {
  	handleClose: function(){
  	}
}
}
</script>

<style>
#head{
	margin-top: 70px;
}
#head .mint-header{
	background: none;
	color: black;
	border-bottom: 3px solid black;
	margin: 0 auto;
	margin-left: 10px;
	margin-right: 10px;
	height: 50px;
}
#head .mint-header-title{
	font-weight: bolder;
	font-size: 18px;
}
.form{
	margin: 0 auto;
	margin-left: 10px;
	margin-right: 10px;
}
.form label{
	display: inline-block;
	width: 10%;
	padding-bottom: 10%;
}
.form label:nth-of-type(1){
	background: url(../../assets/img/tubiao211.png);
	background-size: contain;
}
.form span:nth-of-type(2) label{
	background: url(../../assets/img/mima.png);
	background-size: contain;
}
.form input{
	border: none;
	outline: none;
}
.form>span:nth-of-type(1),.form>span:nth-of-type(2){
	display: block;
	border-bottom: 1px solid gainsboro;
	padding-bottom: 10px;
	margin-top: 10px;
}
.form .login{
	display: block;
	width: 100%;
	height: 50px;
	background: black;
	color: white;
	text-align: center;
	line-height: 50px;
	border-radius: 10px;
	margin-top: 15px;
}
.form p{
	text-align: center;
	margin-top: 20px;
}
.form p .register{
	color: red;
}
</style>