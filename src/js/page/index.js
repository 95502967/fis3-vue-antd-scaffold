import Vue from  'vue';
import VueRouter from 'vue-router';
//import atui from 'atui';
import Button from 'atui/src/components/button'
import 'atui/dist/greater-blue.css';

import Index from '../../component/index';
import Home from '../../component/home';
import componentA from '../../component/a';
import componentB from '../../component/b';
import componentNav from '../../component/nav';

Vue.use(VueRouter);

require(["./xx.js"], function(a){
  console.log("async done", a);
});

const routes = [
  {path:"/home", component: Home,
    children: [
      {path: "a", component: componentA },
      {path: "b", component: componentB }
    ]
  },
  {path:"/index", component: Index},
  {path:"*", redirect: "/home"}
];
const router = new VueRouter({routes});
//const {Button} = atui;

var app = new Vue({
  el: '#app',
  router,
  methods: {

  },
  components:{
    componentNav, 
    vButton: Button
  },
  created() {
    console.log('created');
  },
  render(h) {
    return (
      <div>
        <v-button>我是按钮</v-button>
        <component-nav></component-nav>
        <router-view></router-view>

      </div>
    );
  }
});

/**
 * @require '../../less/index.less'
 */
