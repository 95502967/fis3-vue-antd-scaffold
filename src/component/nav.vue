<style>
	.router-link-active{color:red;}
</style>
<template>
	<div>
		
		<router-link to="/home">Home</router-link>
		<router-link to="/index">Index</router-link>


		<v-menu mode="horizontal">

		      <v-menu-item><router-link to="/home">Home</router-link></v-menu-item>
		      <v-menu-item><router-link to="/index">Index</router-link></v-menu-item>

		</v-menu>

	</div>



</template>
<script>
	import {Menu} from "atui";
	export default {
		components: {
			vMenu: Menu, vMenuItem: Menu.MenuItem
		}
	}
</script>