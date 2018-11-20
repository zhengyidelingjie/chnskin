<template>
 <div id="app">
 	<header>
 		<span class="meun" @click="showAside()"></span>
 		<h1><img src="./assets/img/logo.png"></h1>
 		<span class="cart"></span><i>0</i>
 	</header>
 	<transition-group tag="aside" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutLeft">
 		<ul v-show="show" key="1">
 			<li><router-link to='/home'>首页<span>></span></router-link></li>
 			<li><router-link to='/onSale'>全部分类<span>></span></router-link></li>
 			<li><router-link to='/test'>肌肤测试<span>></span></router-link></li>
 			<li><router-link to='/onSale'>促销活动<span>></span></router-link></li>
 			<li><router-link to='/onSale'>热销推荐<span>></span></router-link></li>
 			<li><router-link to='/onSale'>人气套装<span>></span></router-link></li>
 			<li><router-link to='/onSale'>畅销单品<span>></span></router-link></li>
 			<li><router-link to='/onSale'>功效选择<span>></span></router-link></li>
 		</ul>
 	</transition-group>
 	<ul class="bottomMeun">
    <li><router-link to="/vip"><div><i class="vip"></i></div><div>会员</div></router-link></li>
    <li><router-link to="/onSale"><div><i class="onSale"></i></div><div>促销</div></router-link></li>
    <li><router-link to="/wechat"><div><i class="wechat"></i></div><div>微信</div></router-link></li>
 	</ul>
    <router-view></router-view>
 </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show:false
    }
  },
  methods:{
  	showAside(){
  		this.show=!this.show;
  	}
  }
}
</script>

<style scoped>
	header{
		position: fixed;
		top: 0;
		box-shadow:0 3px gainsboro;
		width: 100%;
		height: 70px;
		z-index: 100;
		background: white;
		display: flex;
	}
	header h1{
		flex: 10;
		line-height: 70px;
		text-align: center;
	}
	header img{
		    width: 50%;
		    display: inline;
	}
	header .meun{
		background: url(assets/img/caidan.png) no-repeat;
		background-size: contain;
		margin-left: 10px;
		margin-top: 5%;
		flex: 1;
	}
	header .cart{
		background: url(assets/img/gouwuchekong.png) no-repeat;
		background-size: contain;
		margin-right: 10px;
		margin-top: 5%;
		flex: 1;
	}
	header i{
		display: block;
		width: 20px;
		height: 20px;
		border-radius: 10px;
		background: red;
		color: white;
		font-style: normal;
		text-align: center;
		position: absolute;
		right: 5px;
		top:10px;
	}
	aside ul{
		background: white;
		z-index: 100;
		position: fixed;
		width: 250px;
		height: 100%;
		top:73px;
		left: 0;
	}
	aside ul li{
		line-height:250%;
		border-bottom: #DCDCDC 1px solid;
		margin-left: 10px;
		margin-right: 10px;
	}
	aside ul li span{
		float: right;
	}
	aside ul li a{
		color: grey;
	}
.bottomMeun{
	display: table;
	text-align: center;
	position: fixed;
	bottom: 0;
	width: 100%;
	padding-bottom: 5px;
	padding-top: 5px;
	background: black;
	opacity: 0.75;
	z-index: 100;
}
.bottomMeun li{
	display: table-cell;
}
.bottomMeun li i{
	display: block;
	padding-bottom: 20%;
	width: 20%;
	height: 0;
	margin-left: 40%;
}
.vip{
	background: url(assets/img/huiyuan.png);
	background-size: contain;
}
.onSale{
	background: url(assets/img/cuxiao.png);
	background-size: contain;
}
.wechat{
	background: url(assets/img/gongzhonghao.png);
	background-size: contain;
	animation: shake infinite 1s linear;
}
@keyframes shake{
	0%{transform: rotate(-30deg);}
	33%{transform: rotate(30deg);}
	66%{transform: rotate(-30deg);}
	100%{transform:rotate(0) scale(0.9);}
}
ul li div:nth-of-type(2){
	color: white;
}
</style>
