<script>

import { onMount } from 'svelte';
import { cars } from '../store/index.js';

export let segment;



onMount(async () => {
	
});



</script>


<style>

.wrapper {
		display: flex;
		flex-flow: wrap;
		margin: 3rem;
	}

img {
	width: 200px;
}

ul {
	list-style: none;
}



</style>



<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="wrapper">

<ul>
<!-- {#each $cars as car}
	 <li>{car.name}</li>
{/each} -->

{#each $cars as car}
	<li><a aria-current='{segment === car.name ? "page" : undefined}' href={car.name}>{car.name}</a></li>
{/each}
</ul>

</div>






