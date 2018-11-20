<template>
	<main>
		<div class="page-search"><mt-search autofocus placeholder="美白"></mt-search></div>
<div class="sort">
	<span @click="showdiv1()">全部 ^</span><span @click="showdiv2()">热销 ^</span><span @click="showdiv3()">价格 ^</span>
</div>
<div class="hd-box">
	<div class="all" v-show="show1">
		<ul><li>新品</li><li>美白</li><li>祛痘</li><li>新品</li><li>美白</li><li>祛痘</li><li>新品</li><li>美白</li><li>祛痘</li><li>祛痘</li></ul>
	</div>
	<div class="hot" v-show="show2">
		<ul><li>默认</li><li>单品</li><li>套装</li></ul>
	</div>
	<div class="price" v-show="show3">
		<ul><li>默认</li><li>低至高</li><li>高至低</li></ul>
	</div>
</div>
<div class="goods">
	<ul>
		<li v-for="(v,i) in goods">
			<img :src="v.img_src"></img>
		    <h3>{{v.title}}</h3>
		    <p>{{v.depict}}</p>
		    <span class="price">{{v.price}}</span><span class="cart">加入购物车</span>
		</li>
	</ul>
</div>
	</main>
</template>

<script>
	export default {
		data(){
			return{
				show1:false,
				show2:false,
				show3:false,
				goods:[{
					img_src:"src/assets/img/goods.jpg",
					title:"水能量舒柔洁面乳",
					depict:"温和轻柔地清洁肌肤表面的尘埃污垢和隐藏在肌肤深层",
					price:"￥48"
				},{
					img_src:"src/assets/img/goods.jpg",
					"title":"清本源卸妆洗颜乳",
					"depict":"轻松卸妆，深层洁面，洁面卸妆二合一。",
					"price":"￥38"
				},{
					"img_src":"src/assets/img/goods.jpg",
					"title":"清本源卸妆洗颜乳",
					"depict":"轻松卸妆，深层洁面",
					"price":"￥28"
				},{
					"img_src":"src/assets/img/goods.jpg",
					"title":"清本源卸妆洗颜乳",
					"depict":"轻松卸妆，深层洁面",
					"price":"￥28"
				},{
					"img_src":"src/assets/img/goods.jpg",
					"title":"清本源卸妆洗颜乳",
					"depict":"轻松卸妆，深层洁面",
					"price":"￥28"
				},{
					"img_src":"src/assets/img/goods.jpg",
					"title":"清本源卸妆洗颜乳",
					"depict":"轻松卸妆，深层洁面",
					"price":"￥28"
				},{
					"img_src":"src/assets/img/goods.jpg",
					"title":"清本源卸妆洗颜乳",
					"depict":"轻松卸妆，深层洁面",
					"price":"￥28"
				},{
					"img_src":"src/assets/img/goods.jpg",
					"title":"清本源卸妆洗颜乳",
					"depict":"轻松卸妆，深层洁面",
					"price":"￥28"
				},{
					"img_src":"src/assets/img/goods.jpg",
					"title":"清本源卸妆洗颜乳",
					"depict":"轻松卸妆，深层洁面",
					"price":"￥28"
				},{
					"img_src":"src/assets/img/goods.jpg",
					"title":"清本源卸妆洗颜乳",
					"depict":"轻松卸妆，深层洁面",
					"price":"￥28"
				}]
			}
		},
		methods:{
			showdiv1(){
				this.show1=!this.show1;
				this.show2=false;
				this.show3=false;
			},
			showdiv2(){
				this.show2=!this.show2;
				this.show1=false;
				this.show3=false;
			},
			showdiv3(){
				this.show3=!this.show3;
				this.show2=false;
				this.show1=false;
			}
		}
};
</script>

<style>
	 .page-search {
	height: 65px;
    margin:70px 10px auto 10px;
  }
.sort{
	display: flex;
	margin-left: 10px;
	margin-right: 10px;
	text-align: center;
}
.sort span{
	flex: 1;
	border: 1px solid black;
	color: red;
}
.hd-box{
	margin: 0 auto;
	margin-left: 10px;
	margin-right: 10px;
	text-align: center;
	position: relative;
}
.hd-box div ul li{
	float: left;
	width: 19%;
	border-right: 1px solid black;
}
.hd-box div ul li:nth-of-type(5n),.hd-box .hot ul li:nth-of-type(3),.hd-box .price ul li:nth-of-type(3){
	border-right: none;
}
.hd-box div{
	width: 100%;
	position: absolute;
	box-shadow: 0 0 10px #eaeaea;
	color: gray;
}
.hd-box .all{
	height: 60px;
	line-height: 30px;
	background: white;
}
.hd-box .hot,.hd-box .price{
	height: 30px;
	top:0px;
	background: white;
}
.hd-box .price{
	top:0px;
}
.hd-box .hot ul li:nth-of-type(1),.hd-box .price ul li:nth-of-type(1){
	color: red;
}
.goods{
	margin: 10px auto;
	margin-left: 10px;
	margin-right: 10px;
}
.goods img{
	width: 130px;
	position: absolute;
	top: 0;
	left: 0;
}
.goods ul li{
	position: relative;
	height: 140px;
	border-bottom: 1px solid black;
}
.goods h3{
	position: absolute;
	top: 0;
	left: 140px;
}
.goods p{
	position: absolute;
	left: 140px;
	top:30px;
}
.goods .price{
	color: red;
	position: absolute;
	bottom: 20px;
	left: 140px;
}
.goods .cart{
	width: 30%;
	height: 30px;
	line-height: 30px;
	background: black;
	color: white;
	position: absolute;
	bottom: 20px;
	right: 20px;
	text-align: center;
}
</style>