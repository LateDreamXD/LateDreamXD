<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
document.addEventListener('wheel', (e: any) => {
	if(!!e.wheelDelta) {
		if(e.wheelDelta > 0) { // 上滚
			(document.querySelector('#header') as HTMLElement).classList.add('scrolled');
		} else { // 下滚
			(document.querySelector('#header') as HTMLElement).classList.remove('scrolled');
		}
	}
});
</script>

<template>
	<video id="bg-video" loop autoplay muted src="https://webcnstatic.yostar.net/ba_cn_web/prod/web/assets/home2.4f8bd50e.mp4" />

	<div id="header">
		<RouterLink data-no-link to="/" style="display: inline-flex;">
			<img class="logo" src="../assets/logo.png" alt="logo">
		</RouterLink>
		<span id="clock">
			{{time}}
		</span>
	</div>

	<RouterView />
</template>

<style lang="scss" scoped>
.logo {
	width: 177px;
	height: 72px;
	filter: drop-shadow(0 1px 6px #000);
}
#bg-video {
	position: fixed;
	top: 0;
	left: 0;
	object-fit: cover;
	z-index: -1;
}
#clock {
	font-family: Minecraft;
	text-shadow: 1px 2px 4px #ffd700;
	&:hover::before {
		transform: rotate3d(0,2,0,180deg);
	}
	&::before {
		content: '';
		display: inline-block;
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
		left: -90%;
	}
}
</style>

<script lang="ts">
export default {
	name: 'App',
	data() {
		return {
			time: 'Loading...',
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
