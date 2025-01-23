<script lang="ts" setup>
import {onMounted} from 'vue';
import {useToast} from 'vue-toastification';
import Aplayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';
import Main from './Main.vue';
const toast = useToast();
document.addEventListener('wheel', (e: any) => {
	if(!!e.wheelDelta) {
		if(e.wheelDelta > 0) { // 上滚
			(document.querySelector('#header') as HTMLElement).classList.add('scrolled');
		} else { // 下滚
			(document.querySelector('#header') as HTMLElement).classList.remove('scrolled');
		}
	}
});
onMounted(() => {
	LateDreamXD.aplayer = new Aplayer({
		autoplay: true,
		container: document.getElementById('aplayer'),
		fixed: true,
		loop: 'one',
		volume: 0.4,
		audio: [{
			name: 'RE Aoharu (Title)',
			artist: 'Nor',
			url: '/assets/Theme_59_Title.ogg',
			cover: '/assets/Theme_59_Cover.png',
			lrc: null,
			theme: '#8c74ab'
		}]
	});
	LateDreamXD.aplayer.notice = toast.info;
	LateDreamXD.aplayer.on('play', () => {
		const playing = LateDreamXD.aplayer.list.audios[LateDreamXD.aplayer.list.index];
		toast.info(`Now playing: ${playing.name} - ${playing.artist}`);
	});
});
</script>

<template>
	<video id="bg-video" loop autoplay muted src="../assets/title_4nd_2.mp4" />
	<div id="aplayer"></div>

	<div id="header">
		<a href="." class="logo"></a>
		<span id="clock">{{time}}</span>
	</div>

	<Main />
</template>

<style lang="scss" scoped>
.logo::before {
	display: inline-block;
	content: '';
	background: url('../assets/logo.png') no-repeat;
	background-size: contain;
	width: 177px;
	height: 72px;
	filter: drop-shadow(0 1px 6px #000);
}
#bg-video {
	position: fixed;
	top: 0;
	left: 0;
	object-fit: fill;
	width: 100%;
	height: 100%;
	z-index: -1;
}
#clock {
	color: #fff;
	display: inline-flex;
	align-items: center;
	font-family: Minecraft;
	&:hover::before {
		transform: rotate3d(0,2,0,180deg);
	}
	&::before {
		content: '';
		width: 32px;
		height: 32px;
		background: url('../assets/clock.png');
		transition: transform 0.5s ease;
	}
}
#debug {
	position: fixed;
	top: 0;
	right: 0;
	margin: 0.4em;
	font-size: 16px;
	font-style: normal;
	animation: rainbow 10s infinite;
	user-select: none;
	pointer-events: none;
}
#header {
	display: grid;
	width: 100%;
	height: 10vh;
	align-items: center;
	background-color: var(--nav-bg-color);
	grid-template-columns: 1fr 6em;
	transition: opacity 0.5s ease;
	&.scrolled {
		pointer-events: none;
		opacity: 0;
	}
}
@media screen and (max-width: 768px) {
	#bg-video {
		left: -240%;
		width: initial;
	}
}
</style>

<script lang="ts">
export default {
	name: 'App',
	data() {
		return {
			time: 'Loading...'
		};
	},
	mounted() {
		setInterval(() => {
			const now = new Date();
			const hour = now.getHours() < 10? `0${now.getHours()}` : now.getHours();
			const minute = now.getMinutes() < 10? `0${now.getMinutes()}` : now.getMinutes();
			const second = now.getSeconds() < 10? `0${now.getSeconds()}` : now.getSeconds();
			this.time = `${hour}:${minute}:${second}`;
		}, 1000);
	}
}
</script>
