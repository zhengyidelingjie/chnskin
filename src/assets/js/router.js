import vueRouter from 'vue-router'
import vip from '../../component/index/vip.vue'
import onSale from '../../component/index/onSale.vue'
import wechat from '../../component/index/wechat.vue'
import home from '../../component/index/home.vue'
import register from '../../component/menu/register.vue'
import test from '../../component/menu/test.vue'
export default new vueRouter({
	routes:[
	{
		path:'/vip',component:vip
	},
	{
		path:'/onSale',component:onSale
	},
	{
		path:'/wechat',component:wechat
	},
	{
		path:'/register',component:register
	},
	{
		path:'/test',component:test
	},
	{
		path:'/*',component:home
		
	}]
})
