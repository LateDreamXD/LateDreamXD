<script lang="ts" setup>
import {ref, onBeforeMount} from 'vue';

const socials = ref([]);
onBeforeMount(async() => {
	const res = await fetch('/static/social.json');
	socials.value = await res.json();
});
function minimize() {
	(document.querySelector('#main') as HTMLElement).classList.toggle('minimized');
}
</script>

<script lang="ts">
export default {
	name: 'Main',
	data() {
		return {
			version: __APP_VERSION__,
			dev: import.meta.env.DEV,
		}
	}
}
</script>

<template>
	<div id="main">
		<div class="card-header">
			<img src="../assets/avatar.webp" alt="icon" class="icon avatar" draggable="false" />
			<span class="card-title">about LateDream *{{version}} <span v-show="dev" class="dev">Debug</span></span>
			<div class="actions">
				<a class href="#minimize" @click.prevent="minimize()" data-no-link>
					<svg class="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m3.5 8c-0.0684 0-0.133-0.013-0.195-0.0391-0.0586-0.026-0.111-0.0618-0.156-0.107-0.0456-0.0456-0.0814-0.0977-0.107-0.156-0.026-0.0618-0.0391-0.127-0.0391-0.195s0.013-0.132 0.0391-0.19c0.026-0.0618 0.0618-0.116 0.107-0.161 0.0456-0.0488 0.0977-0.0863 0.156-0.112 0.0618-0.026 0.127-0.0391 0.195-0.0391h9c0.0683 0 0.132 0.013 0.19 0.0391 0.0618 0.026 0.116 0.0635 0.161 0.112 0.0456 0.0456 0.0814 0.0993 0.107 0.161 0.0261 0.0586 0.0391 0.122 0.0391 0.19s-0.013 0.133-0.0391 0.195c-0.026 0.0586-0.0618 0.111-0.107 0.156-0.0456 0.0456-0.0993 0.0814-0.161 0.107-0.0586 0.026-0.122 0.0391-0.19 0.0391h-9z" fill="currentColor" transform="translate(0 4)"></path></svg>
				</a>
				<a class="not-allowed" href="#maximize" @click.prevent data-no-link>
					<svg class="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m9.8 4h-3.6c-0.577 0-0.949 7.8e-4 -1.23 0.0239-0.272 0.0222-0.372 0.0599-0.422 0.0851-0.188 0.0959-0.341 0.249-0.437 0.437-0.0252 0.0494-0.0629 0.15-0.0851 0.422-0.0232 0.283-0.0239 0.656-0.0239 1.23v3.6c0 0.577 7.8e-4 0.949 0.0239 1.23 0.0222 0.272 0.0599 0.372 0.0851 0.422 0.0959 0.188 0.249 0.341 0.437 0.437 0.0494 0.0252 0.15 0.0629 0.422 0.0851 0.283 0.0231 0.656 0.0239 1.23 0.0239h3.6c0.577 0 0.949-8e-4 1.23-0.0239 0.272-0.0222 0.372-0.0599 0.422-0.0851 0.188-0.0959 0.341-0.249 0.437-0.437 0.0252-0.0495 0.0629-0.15 0.0851-0.422 0.0231-0.283 0.0239-0.656 0.0239-1.23v-3.6c0-0.577-8e-4 -0.949-0.0239-1.23-0.0222-0.272-0.0599-0.372-0.0851-0.422-0.0959-0.188-0.249-0.341-0.437-0.437-0.0495-0.0252-0.15-0.0629-0.422-0.0851-0.283-0.0232-0.656-0.0239-1.23-0.0239zm-6.58 0.092c-0.218 0.428-0.218 0.988-0.218 2.11v3.6c0 1.12 0 1.68 0.218 2.11 0.192 0.376 0.498 0.682 0.874 0.874 0.428 0.218 0.988 0.218 2.11 0.218h3.6c1.12 0 1.68 0 2.11-0.218 0.376-0.192 0.682-0.498 0.874-0.874 0.218-0.428 0.218-0.988 0.218-2.11v-3.6c0-1.12 0-1.68-0.218-2.11-0.192-0.376-0.498-0.682-0.874-0.874-0.428-0.218-0.988-0.218-2.11-0.218h-3.6c-1.12 0-1.68 0-2.11 0.218-0.376 0.192-0.682 0.498-0.874 0.874z" clip-rule="evenodd" fill="currentColor" fill-rule="evenodd"></path></svg>
				</a>
				<a class="not-allowed" data-no-link href="#close" @click.prevent>
					<svg class="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 8.71-4.15 4.15c-0.0976 0.0977-0.215 0.146-0.352 0.146-0.143 0-0.264-0.0472-0.361-0.142-0.0944-0.0977-0.142-0.218-0.142-0.361 0-0.137 0.0488-0.254 0.146-0.352l4.15-4.15-4.15-4.15c-0.0976-0.0976-0.146-0.216-0.146-0.356 0-0.0684 0.013-0.133 0.0391-0.195 0.026-0.0618 0.0618-0.114 0.107-0.156 0.0456-0.0456 0.0993-0.0814 0.161-0.107s0.127-0.0391 0.195-0.0391c0.137 0 0.254 0.0488 0.352 0.146l4.15 4.15 4.15-4.15c0.0977-0.0976 0.216-0.146 0.356-0.146 0.0683 0 0.132 0.013 0.19 0.0391 0.0618 0.026 0.116 0.0618 0.161 0.107 0.0456 0.0456 0.0814 0.0993 0.107 0.161 0.0261 0.0586 0.0391 0.122 0.0391 0.19 0 0.14-0.0488 0.259-0.146 0.356l-4.15 4.15 4.15 4.15c0.0977 0.0977 0.146 0.215 0.146 0.352 0 0.0683-0.013 0.133-0.0391 0.195-0.026 0.0618-0.0618 0.116-0.107 0.161-0.0423 0.0456-0.0944 0.0814-0.156 0.107-0.0619 0.0261-0.127 0.0391-0.195 0.0391-0.14 0-0.259-0.0488-0.356-0.146l-4.15-4.15z" fill="currentColor"></path></svg>
				</a>
			</div>
		</div>
		<div class="card">
			<img class="avatar" alt="LateDream" title="LateDream" src="../assets/avatar.webp" />
			<div class="name">晚梦<span class="aka">LateDream</span></div>
			<div class="socials">
				<a data-no-link v-for="item in socials" v-show="item._show === undefined || item._show" :id="item.platform" :title="item.username" :href="item.url" target="_blank" rel="noopener noreferrer">
					<img v-show="item.icontype === 'img'" :src="item.icon" class="platform" alt="icon">
					<i v-show="item.icontype !== 'img'" :class="`icon ${item.icontype} fa-${item.icon}`"></i>
				</a>
			</div>
			<div class="sign">
				<p class="content">来之不易的 一定要好好珍惜</p>
				<p class="tags">#晚梦 #LateDream</p>
			</div>
			<div class="footer">
				<p class="content">
					<span><a href="https://icp.gov.moe/?keyword=20241144" target="_blank" rel="noopener noreferrer">萌ICP备20241144号</a></span>
					<span>Copyright (c) 2025 LateDream</span><span>Theme designed by MySelf</span>
					<span>This site is not affiliated with Mojang or Minecraft and Yostar or BlueArchive.</span>
					<span class="visible-on-mobile">version: v{{version}} <span v-show="dev" class="dev">Debug</span></span>
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.dev {
	animation: rainbow 5s linear infinite;
}
.platform {
	width: 24px;
	height: 24px;
}
.socials {
	grid-area: socials;
	height: fit-content;
	display: flex;
	justify-content: space-between;
	& a {
		text-shadow: 0 0 2px #000;
		transition: transform 0.8s ease;
		&:hover {
			transform: rotate(360deg);
		}
	}
}
.footer {
	grid-area: footer;
	font-size: 75%;
	& .content {
		display: flex;
		flex-direction: column;
	}
}
.icon {
	width: 24px;
	height: 24px;
	font-size: 24px;
}
.visible-on-mobile {
	display: none;
}
#rss {
	color: #fff;
}
#github {
	color: #000;
}
#steam {
	color: #000;
}
#xboxlive {
	color: #107c10;
}
#discord {
	color: #7289da;
}
#bilibili {
	color: #ff69b4;
}
#qq {
	color: #00bfff;
}
#email {
	color: #fff;
}
</style>