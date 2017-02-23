<template>
	<div class="home">
		<p>home pages aha</p>
		<p><router-link to="/home/a">a</router-link> <router-link to="/home/b">b</router-link></p>
		<component-jade></component-jade>
		<router-view></router-view>
	</div>
</template>
<script>
	import ComponentJade from "./jade";

	export default {
		components: {
			ComponentJade
		}
	}
</script>