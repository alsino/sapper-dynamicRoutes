<script>

	import { cars }  from "../store/index.js";
	export let segment;

	


import { onMount } from 'svelte';

onMount(async () => {
	// console.log($cars);
});



</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>Overview</a></li>

		{#each $cars as car}
			 <li><a aria-current='{segment === car.name ? "page" : undefined}' href={car.name}>{car.name}</a></li>
		{/each}
	</ul>
</nav>
