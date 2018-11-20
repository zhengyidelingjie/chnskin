<template>
<main id="test">
	<img src="../../assets/img/img_01.jpg">
	<img src="../../assets/img/img_02.jpg">
	<div class="que1">
		<ul>
			<li><b>▪ 请你描述下你的皮肤特征：</b></li>
			<li v-for="(v,i) in question1"><input type="radio" name="radio-bt1">{{v}}</li>
		</ul>
	</div>
	<div class="que2">
		<ul>
			<li><b>▪ 你素颜时的肤色属于哪个？</b></li>
			<li v-for="(v,i) in question2"><input type="radio" name="radio-bt2">{{v}}</li>
		</ul>
	</div>
	<div class="que3">
		<ul>
			<li><b>▪ 你的脸部有什么皮肤问题？</b></li><li><b>（多选）</b></li>
			<li v-for="(v,i) in question3"><input type="checkbox"><span></span>{{v}}</li>
		</ul>
	</div>
	<img src="../../assets/img/img_06.jpg">
	<img src="../../assets/img/img_07.jpg" class="bgpic">
	<div class="method">
		你的姓名：<input type="text" placeholder="请输入您的名字"/><br />
		性别：<input type="radio" name="sex"/>男 <input type="radio" name="sex" />女<br />
		生日：<input type="radio" name="date"/>公历 <input type="radio" name="date" />农历<br />
		<select>
			<option v-for="(v,i) in year">{{v}}</option>
		</select>
		<select>
			<option v-for="(v,i) in month">{{v}}</option>
		</select>
		<select>
			<option v-for="(v,i) in day">{{v}}</option>
		</select><br />
		（年龄会作为你皮肤状况判断的重要参考值）<br />
		手机号码：<input type="tel" placeholder="请输入您的手机号码"/><br />
		QQ号码：<input type="text" placeholder="请输入您的QQ号码"/><br />
		<span class="btn">点击获取方案</span>
	</div>
</main>
</template>

<script>
	export default {
		data(){
			return {
				question1:['A.不干也不油','B.干燥，毛孔细','C.T区油，U区干','D.全脸泛油，易长痘'],
				question2:['A.白皙','B.粉嫩','C.暗黄','D.大麦色'],
				question3:['A. 黑头/毛孔','B. 黑眼圈/眼袋/脂肪粒/眼纹','C. 痘痘/痘印','D. 干燥/紧绷','E. 暗黄/斑点','F.皱纹','G.出油'],
				year:[2018,2017,2016,2015,2014,2013,2012,2011,2010],
				month:[1,2,3,4,5,6,7,8,9,10,11,12],
				day:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
			}
		}
	}
</script>

<style>
	#test img{
		max-width:100%;
		border: 0;
		vertical-align:top;
	}
	#test img:nth-of-type(1){
		margin-top: 70px;
	}
	.que1,.que2{
		background: url(../../assets/img/img_03.jpg)no-repeat;
		background-size:100%;
		padding-bottom: 12%;
		overflow: hidden;
	}
	.que3{
		background: url(../../assets/img/img_05.jpg)no-repeat;
		background-size:100%;
		width: 100%;
		padding-bottom: 15%;
		overflow: hidden;
	}
	.que1 ul,.que2 ul{
		margin-left: 15%;
		margin-top: 30px;
	}
	ul li{
		line-height: 20px;
	}
	.que3 ul{
		margin-left: 15%;
		margin-top: 40px;
	}
	.method{
		position: absolute;
		top:182%;
		left: 30px;
		width: 85%;
		font-size: 15px;
	}
	.method select:nth-of-type(1){
		margin-left: 25%;
	}
	.method .btn{
		display: block;
		margin: 5px auto;
		color: white;
		background: red;
		text-align: center;
		width: 70%;
		height: 40px;
		border-radius: 15px;
		line-height: 40px;
		font-size: 20px;
	}
</style>