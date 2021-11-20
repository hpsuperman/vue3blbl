import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const dongtai = r => require.ensure([], () => r(require('../page/dongtai/dongtai')), 'dongtai')
const vip = r => require.ensure([], () => r(require('../page/vip/vip')), 'vip')
const my = r => require.ensure([], () => r(require('../page/my/my')), 'my')
const user = r => require.ensure([], () => r(require('../page/user/user')), 'user')
const xiaoxi = r => require.ensure([], () => r(require('../page/xiaoxi/xiaoxi')), 'xiaoxi')



        
export default [{
    path:'/',
    component: App,
    children:[
        {
            path:'',
            redirect:'/home'
        },
        {
            path:'/home',
            component:home
        },
        {
            path:'/dongtai',
            component:dongtai
        },
        {
            path:'/vip',
            component:vip
        },
        {
            path:'/my',
            component:my
        },
        {
            path:'user',
            component:user
        },
        {
            path:'xiaoxi',
            component:xiaoxi
        },
        
    ]
}]