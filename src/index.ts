import './injectcss';

import Aplayer from 'aplayer';
import {createApp} from 'vue';
import Toast, { POSITION } from 'vue-toastification';
import type {PluginOptions} from 'vue-toastification';

import App from './app';

declare const window: Window & {
	LateDreamXD: {
		aplayer: typeof Aplayer;
		showSanks: boolean;
	};
};

window.LateDreamXD = {
	aplayer: typeof Aplayer,
	showSanks: false
}

const options: PluginOptions = {
	position: POSITION.BOTTOM_RIGHT,
	timeout: 3000,
	closeOnClick: true,
	draggable: true,
	draggablePercent: 0.7,
	pauseOnFocusLoss: true,
	pauseOnHover: true,
	icon: true,
	showCloseButtonOnHover: true,
	maxToasts: 4
}

createApp(App).use(Toast, options).mount('#app');

// after app mount
document.documentElement.lang = 'zh-Hans-CN';
(document.querySelector('title') as HTMLTitleElement).text = '晚梦的个人页~ (。・ω・。)';


console.log(`\n %c LateDream's Personal Page v${__APP_VERSION__} %c https://latedream.us.kg/about/ \n`,
	'color: #ff1493; background: #030307; padding:5px 0;',
	'background: #ff1493; padding:5px 0;');