<script>

import { onMount } from 'svelte';


let photos = [];

onMount(async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
	photos = await res.json();
	console.log(photos);
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



</style>



<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="wrapper">
	{#each photos as pic}
		<img src="{pic.url}" alt="{pic.title}">
	{/each}
</div>






