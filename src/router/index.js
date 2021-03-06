import Vue from 'vue';
import VueRouter from 'vue-router'
import App from '../App'

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const routes = [{
    path: '/',
    redirect: 'home',
    component: App,
    children: [{
      	path: 'home',
      	component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
      	path: 'item',
      	component: r => require.ensure([], () => r(require('../page/item')), 'item')
    }, {
      	path: 'score',
      	component: r => require.ensure([], () => r(require('../page/score')), 'score')
    }]
},{
	path: '*',
	redirect: '/'
}];

const router = new VueRouter({
	routes
});

export default router;
