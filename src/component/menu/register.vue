<template>
	<main>
	<div id="header">
		<mt-header title="免费注册">
		  <router-link to="/" slot="left">
		    <mt-button icon="back" @click="handleClose"></mt-button>
		  </router-link>
		</mt-header>		
 </div>
 <div class="regForm">
 	<span><label for="phone" class="phone"></label><input type="text" placeholder="请输入手机号码" id="phone"/></span>
 	<span><label for="code" class="code"></label><input type="text" placeholder="请输入验证码" id="code"/><i>获取验证码</i></span>
 		<span><label for="pass" class="pass"></label><input type="password" placeholder="请设置密码（不少于6个数字或字母）" id="pass"/></span>
 		<span><label for="repass" class="repass"></label><input type="password" placeholder="请确认密码" id="repass"/></span>
 		<span class="register">确认注册</span>
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
	#header{
	margin-top: 70px;
}
#header .mint-header{
	background: none;
	color: black;
	border-bottom: 3px solid black;
	margin: 0 auto;
	margin-left: 10px;
	margin-right: 10px;
	height: 50px;
}
#header .mint-header-title{
	font-weight: bolder;
	font-size: 18px;
}
.regForm{
	margin: 0 auto;
	margin-left: 10px;
	margin-right: 10px;
}
.regForm label{
	display: inline-block;
	width: 10%;
	padding-bottom: 10%;
}
.regForm .phone{
	background: url(../../assets/img/tubiao211.png);
	background-size: contain;
}
.regForm .code{
	background: url(../../assets/img/yanzhengma.png);
	background-size: contain;
}
.regForm i{
	display: inline-block;
	width: 30%;
	height: 40px;
	background: gainsboro;
	float: right;
	font-style: normal;
	color: white;
	text-align: center;
	line-height: 40px;
	border-radius: 5px;
}
.regForm .pass,.regForm .repass{
	background: url(../../assets/img/mima.png);
	background-size: contain;
}
.regForm input{
	border: none;
	outline: none;
}
.regForm>span{
	display: block;
	border-bottom: 1px solid gainsboro;
	padding-bottom: 10px;
	margin-top: 10px;
}
.regForm .register{
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
</style>