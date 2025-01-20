import './main.scss';

import { createApp } from 'vue';

import App from './app';
import router from './router';

createApp(App).use(router).mount('#app');

import {} from './css';


// after app mount
document.documentElement.lang = 'zh-Hans-CN';
(document.querySelector('title') as HTMLTitleElement).text = '晚梦的个人页~ (。・ω・。)';
