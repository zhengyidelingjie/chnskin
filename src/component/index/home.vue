<template>
	<main>
	<div class="page-search"><mt-search autofocus placeholder="美白"></mt-search></div>
	<div id="banner">
<mt-swipe :auto="3000" >
  <mt-swipe-item><img src="../../assets/img/180809.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../../assets/img/banner_1223.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../../assets/img/banner_1230.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../../assets/img/banner_20180818.jpg"></mt-swipe-item>
</mt-swipe></div>
<div class="middleMeun">
	<ul>
		<li><i class="white"></i><br/>美白</li>
		<li><i class="danban"></i><br/>淡斑</li>
		<li><i class="qudou"></i><br/>女士祛痘</li>
		<li><i class="yiqi"></i><br/>美容仪器</li>
		<li><i class="heitou"></i><br/>黑头</li>
		<li><i class="mask"></i><br/>面膜</li>
		<li><i class="man"></i><br/>男士专区</li>
		<li><i class="neitiao"></i><br/>内调</li>
	</ul>
</div>
<div class="sellWell">
	<span>╬</span><h2>畅销</h2><span class="more">more></span>
	<i></i>
	<ul>
	    <li>
	    	<div>
	    		<img src="../../assets/img/hot1.jpg">
	    		<h4>瓷肌清本源五谷焕彩</h4>
	    		<i></i>
	    		<span class="nowPrice">￥178</span><span class="lastPrice">￥178</span>
	    		<span class="cart">▶加入购物车</span>
	    	</div>
	    </li>
	    <li>
	    	<div>
	    		<img src="../../assets/img/hot2.jpg">
	    		<h4>超声波焕肤美容仪</h4>
	    		<i></i>
	    		<span class="nowPrice">￥1380</span><span class="lastPrice">￥1380</span>
	    		<span class="cart">▶加入购物车</span>
	    	</div>
	    </li>
	    <li>
	    	<div>
	    		<img src="../../assets/img/hot3.jpg">
	    		<h4>医用愈肤生物膜</h4>
	    		<i></i>
	    		<span class="nowPrice">￥268</span><span class="lastPrice">￥268</span>
	    		<span class="cart">▶加入购物车</span>
	    	</div>
	    </li>
	</ul>
</div>
<div class="show">
	<span>╬</span><h2>晒单</h2><span class="more">more></span>
	<div id="showBanner">
<mt-swipe :auto="3000" >
  <mt-swipe-item><img src="../../assets/img/show_pic_01.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../../assets/img/show_pic_02.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../../assets/img/show_pic_03.jpg"></mt-swipe-item>
  <mt-swipe-item><img src="../../assets/img/show_pic_04.jpg"></mt-swipe-item>
</mt-swipe></div>
</div>
<div class="trends">
	<span>╬</span><h2>品牌动态</h2><span class="more">more></span><i></i>
	<p class="line"><p class="title">上海大虹桥美博会完美收官</p><span class="time">2016-05-26 22:31</span></p>
	<p class="line"><p class="title">韩国瓷肌赞助《梦想合伙人》首映，共同创建美丽梦想</p><span class="time">2016-05-26 22:31</span></p>
	<p class="line"><p class="title">韩国瓷肌赞助张智霖广州演唱会 与歌迷瓷粉共度疯狂时刻</p><span class="time">2016-05-26 22:31</span></p>
	<div class="bg"></div>
	</div>
<hr />
<div class="askDoctor">
	<div>
		<p>长按复制加微信</p><p>免费咨询皮肤科医生</p><p>wxid_czdcu48l6ttq22</p></div>
	<img src="../../assets/img/prop_wx.png">
</div>
<div class="branch">
	<div><span>╬</span><h2>4ever热门分院</h2><span class="more">more></span></div>
	<h4>中国地区</h4>
	<ul><li>广州店</li><li>成都店</li><li>青岛店</li></ul>
	<h4>韩国地区</h4>
	<ul>
		<li v-for="(v,i) in list">{{v}}</li>
	</ul>
</div>
<footer>
	<ul>
		<li><i class="fangwei"></i><br/>防伪打假</li>
		<li><i class="fast"></i><br/>快速下单</li>
		<li><i class="test"></i><br/>肌肤测试</li>
		<li><i class="forever"></i><br/>韩国4ever官网</li>
		<li><i class="chnskin"></i><br/>瓷肌医学美肤</li>
		<li><i class="face"></i><br/>面部肌肤修复中心</li>
		<li><i class="dingzhuang"></i><br/>韩国瓷肌定妆</li>
		<li><i class="zhengxing"></i><br/>瓷肌韩国整形</li>
	</ul>
	<p>公司名：江西瓷肌电子商务有限公司</p>
</footer>
	</main>
</template>

<script>
export default {
  data () {
    return {
      list:['首尔站点','济州岛店','光州店','全州店','首尔站点','济州岛店','光州店','全州店','首尔站点','济州岛店','光州店','全州店','首尔站点','济州岛店','光州店','全州店','首尔站点','济州岛店','光州店','全州店']
    }
  }
};
</script>

<style>
    .page-search {
	height: 65px;
    margin:70px 10px auto 10px;
  }
   #banner .mint-swipe{
  	margin-left: 10px;
	margin-right: 10px;
  }
    #banner .mint-swipe,.mint-swipe-items-wrap{
	padding-bottom: 64%;
	height: 0px;	
	}
	#showBanner .mint-swipe,.mint-swipe-items-wrap{
	padding-bottom: 72%;
	height: 0px;	
	}
	#showBanner .mint-swipe{
		width: 100%;
	}
	.mint-swipe img{
	width: 100%;
	}
	.middleMeun{
		padding-left: 5px;
		padding-right: 5px;
		margin: 0 auto;
	}
	.middleMeun ul{
	text-align: center;
	}
	.middleMeun ul li{
	float: left;
	margin-right: 6.6%;
	width: 20%;
	font-size: 15px;
	}
	.middleMeun ul li:nth-of-type(4n){
		margin-right: 0;
	}
	.middleMeun ul li i{
		display: block;
		width: 100%;
		padding-bottom: 100%;
		margin-top: 25%;
	}
	.middleMeun .white{
		background: url(../../assets/img/nav1.png);
		background-size: contain;
	}
	.middleMeun .danban{
		background: url(../../assets/img/nav2.png);
		background-size: contain;
	}
	.middleMeun .qudou{
		background: url(../../assets/img/nav3.png);
		background-size: contain;
	}
	.middleMeun .yiqi{
		background: url(../../assets/img/nav4.png);
		background-size: contain;
	}
	.middleMeun .heitou{
		background: url(../../assets/img/nav5.png);
		background-size: contain;
	}
	.middleMeun .mask{
		background: url(../../assets/img/nav6.png);
		background-size: contain;
	}
	.middleMeun .man{
		background: url(../../assets/img/nav7.png);
		background-size: contain;
	}
	.middleMeun .neitiao{
		background: url(../../assets/img/nav8.png);
		background-size: contain;
	}
	.sellWell,.show,.trends{
		margin: 0 auto;
		margin-left: 10px;
		margin-right: 10px;
	}
	.sellWell h2,.show h2,.trends h2{
		display: inline;
	}
	.sellWell .more,.show .more,.trends .more{
		float: right;
		margin-top: 3%;
	}
	.sellWell i,.trends i{
		display: block;
		height: 3px;
		background: black;
	}
	.sellWell>i,.trends i{
		width: 100%;
	}
	.sellWell ul li i{
		width: 50%;
	}
	.sellWell ul{
		width: 100%;
		padding-bottom: 160%;
		margin-top: 5px;
		background: ghostwhite;
	}
	.sellWell ul li img{
		width:100%;
	}
	.sellWell .nowPrice{
		color: red;
		font-size: 20px;
	}
	.sellWell .lastPrice{
		text-decoration: line-through;
	}
	.sellWell .cart{
		display: block;
		width: 75%;
		height: 30px;
		border: 1px solid black;
		line-height: 30px;
		text-align: center;
	}
	.sellWell ul li{
		float: left;
		width: 45%;
		margin-top: 3%;
		margin-left: 3%;
	}
	.sellWell h4{
		font-size: 15px;
	}
	.trends .title{
		overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
        width: 65%;
	}
	.trends .line{
		border-top: 1px dashed gainsboro;
	}
	.trends .time{
		font-size: 12px;
	}
	.trends .bg{
		background: url(../../assets/img/footer_t.jpg);
		width: 100%;
		padding-bottom: 13%;
		background-size:contain;
	}
    .askDoctor{
    	width: 100%;
    	height: 180px;
    	background: black;
    	margin-top: 20px;
    	overflow: hidden;
    }
    .askDoctor p:nth-of-type(1),.askDoctor p:nth-of-type(2){
    	color: grey;
    	width: 50%;
    	text-align: center;
    }
    .askDoctor p:nth-of-type(1){
    	margin-top: 5%;
    }
    .askDoctor p:nth-of-type(3){
    	width: 45%;
    	height: 40px;
    	border-radius: 20px;
    	background: white;
    	color: red;
    	line-height: 40px;
    	text-align: center;
    	font-weight: bolder;
    	font-size: 13px;
    	margin-left: 10px;
    }
    .askDoctor img{
    	width: 40%;
    	margin-left: 50%;
    	margin-top: -100px;
    }
    .askDoctor div{
    	margin-top: 30px;
    }
    .branch{
    	margin-top: 20px;
    }
    .branch div{
    	border-top:1px dashed black;
    	border-bottom: 1px dashed black;
    	height: 50px;
    	line-height: 50px;
    }
    .branch h2{
    	display: inline;
    }
    .branch div span:nth-of-type(1){
    	margin-left: 10px;
    }
    .branch .more{
    	float: right;
    	margin-right: 10px;
    }
    .branch ul{
    	margin-left: 10px;
    	margin-right: 10px;
    	overflow: hidden;
    }
    .branch h4{
    	margin-left: 10px;
    	margin-top: 20px;
    }
    .branch ul li{
    	float: left;
    	margin-right: 6.5%;
    	width: 20%;
    	font-size: 12px;
    }
    .branch ul li:nth-of-type(4n){
    	margin-right: 0;
    }
    footer ul{
    	border-bottom: 1px solid black;
    	border-top: 1px solid black;
    	margin-top: 50px;
    	text-align: center;
    	font-size: 12px;
    	overflow: hidden;
    	padding-bottom: 20px;
    }
    footer ul li{
    	width: 20%;
    	float: left;
    	margin-right: 4%;
    	margin-top: 20px;
    }
    footer ul li:nth-of-type(1),footer ul li:nth-of-type(5){
    	margin-left: 10px;
    }
    footer ul li:nth-of-type(4n){
    	margin-right: 10px;
    }
    footer ul li i{
    	display: block;
    	width: 2.5rem;
    	height: 2.2rem;
    	margin: 0 auto;
    	background: url(../../assets/img/foot_icon.png);
    	background-size:12em;
    }
    footer ul li .fangwei{
    	background-position:.08rem -.1rem;
    }
    footer ul li .fast{
    	background-position:-2.4rem 0;
    }
    footer ul li .test{
    	background-position:-4.3rem 0;
    }
    footer ul li .forever{
    	background-position:-6.7rem 0;
    }
    footer ul li .chnskin{
    	background-position:-8.8rem -2.15rem;
    }
    footer ul li .face{
    	background-position:-2.5rem -2.15rem;
    }
    footer ul li .dingzhuang{
    	background-position:-4.8rem -2.15rem;
    }
    footer ul li .zhengxing{
    	background-position:-6.6rem -2.15rem;
    }
    footer p{
    	text-align: center;
    	padding-bottom: 55px;
    }
</style>