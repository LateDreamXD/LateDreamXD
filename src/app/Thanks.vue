<template>
	<div id="main">
		<div class="card-header">
			<span class="card-title">感谢</span>
			<div class="actions">
				<a class="danger" data-no-link href="#close" @click.prevent="changeShowSanks()">
					<svg class="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 8.71-4.15 4.15c-0.0976 0.0977-0.215 0.146-0.352 0.146-0.143 0-0.264-0.0472-0.361-0.142-0.0944-0.0977-0.142-0.218-0.142-0.361 0-0.137 0.0488-0.254 0.146-0.352l4.15-4.15-4.15-4.15c-0.0976-0.0976-0.146-0.216-0.146-0.356 0-0.0684 0.013-0.133 0.0391-0.195 0.026-0.0618 0.0618-0.114 0.107-0.156 0.0456-0.0456 0.0993-0.0814 0.161-0.107s0.127-0.0391 0.195-0.0391c0.137 0 0.254 0.0488 0.352 0.146l4.15 4.15 4.15-4.15c0.0977-0.0976 0.216-0.146 0.356-0.146 0.0683 0 0.132 0.013 0.19 0.0391 0.0618 0.026 0.116 0.0618 0.161 0.107 0.0456 0.0456 0.0814 0.0993 0.107 0.161 0.0261 0.0586 0.0391 0.122 0.0391 0.19 0 0.14-0.0488 0.259-0.146 0.356l-4.15 4.15 4.15 4.15c0.0977 0.0977 0.146 0.215 0.146 0.352 0 0.0683-0.013 0.133-0.0391 0.195-0.026 0.0618-0.0618 0.116-0.107 0.161-0.0423 0.0456-0.0944 0.0814-0.156 0.107-0.0619 0.0261-0.127 0.0391-0.195 0.0391-0.14 0-0.259-0.0488-0.356-0.146l-4.15-4.15z" fill="currentColor"></path></svg>
				</a>
			</div>
		</div>

		<div class="card">
			<div class="content">
				<p>该页面使用了如下开源项目(按字母顺序排列)：</p>
				<ul>
					<li><a href="https://github.com/DIYgod/aplayer" target="_blank" referrerpolicy="noopenner,noreferrer">APlayer</a></li>
					<li><a href="https://github.com/FortAwesome/font-awesome" target="_blank" referrerpolicy="noopenner,noreferrer">Font Awesome</a></li>
					<li><a href="https://github.com/oclero/qlementine-icons" target="_blank" referrerpolicy="noopenner,noreferrer">Qlementine Icons</a></li>
					<li><a href="https://github.com/sass/embedded-host-node" target="_blank" referrerpolicy="noopenner,noreferrer">sass-embedded</a></li>
					<li><a href="https://github.com/Microsoft/TypeScript" target="_blank" referrerpolicy="noopenner,noreferrer">TypeScript</a></li>
					<li><a href="https://github.com/vuejs/vue" target="_blank" referrerpolicy="noopenner,noreferrer">Vue.js</a></li>
					<li><a href="https://github.com/Maronato/vue-toastification" target="_blank" referrerpolicy="noopenner,noreferrer">vue-toastification</a></li>
					<li><a href="https://github.com/vitejs/vite" target="_blank" referrerpolicy="noopenner,noreferrer">Vite</a></li>
				</ul>
				<p>该页面使用了如下字体和其他资源(按字母顺序排列)：</p>
				<ul>
					<li><a href="https://kivo.wiki/music/70" target="_blank" referrerpolicy="noopenner,noreferrer">RE Aoharu (Title) - Nor (Kivo Wiki)</a></li>
					<li><a href="https://github.com/multitheftauto/unifont" target="_blank" referrerpolicy="noopenner,noreferrer">Unifont</a></li>
					<li><a href="https://archive.org/download/official-minecraft-fonts" target="_blank" referrerpolicy="noopenner,noreferrer">Minecraft Seven v2</a></li>
					<li>Minecraft时钟贴图(拆包获取)</li>
					<li>蔚蓝档案4th标题pv(拆包获取)</li>
					<li><a href="https://www.zcool.com.cn/assets/ZNTY0MA==" target="_blank" referrerpolicy="noopenner,noreferrer">站酷快乐体</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Thanks',
	props: {
		changeShowSanks: {
			type: Function,
			required: true
		}
	},
	data() {
		return {}
	}
}
</script>

<style scoped>
#main {
	top: 20%;
}
.card {
	display: block;
}
li::marker {
	display: none;
	font-size: 0;
}
@media screen and (max-width: 768px) {
	.content {
		font-size: 80%;
	}
}
</style>