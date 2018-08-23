import Vue from 'vue'
import Router from 'vue-router'
import showNews from './components/user/showNews'
import showArticle from './components/user/showArticle'
import center from './components/admin/center'
import edit from './components/admin/edit'
import hasEdit from './components/admin/hasEdit'
import change from './components/admin/change'

Vue.use(Router);
//通过mode设置路由模式
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/news',
            component: showNews,
            children: [
                {
                    path: '/news/details/:id',
                    component: showArticle,
                }
            ]
        },
        {
            path: '/admin',
            component: center,
            children: [
                {
                    path: '/admin/edit',
                    component: edit,
                },
                {
                    path: '/admin/hasEdit/',
                    component: hasEdit,
                }
            ]
        },
        {
            path: '/admin/change',
            component: change,
        },
        {
            path: '*',
            redirect: '/news',
        }
    ],
});
