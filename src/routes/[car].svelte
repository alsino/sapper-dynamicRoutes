<script context="module">
  export function preload(page){
    return {car: page.params.car };
  }
</script>


<script>
  import { beforeUpdate } from 'svelte';
  import { cars }  from "../store/index.js";
  export let car;

  let carDescription;
  let carThumb;

  
 beforeUpdate(() => {  
  let carPos = $cars.map(function(e) { return e.name; }).indexOf(car);
  carDescription = $cars[carPos].descr;
  carThumb =$cars[carPos].url;
	});

</script>

<style>

img {
  width: 600px;
}

</style>


<svelte:head>
	<title>{car}</title>
</svelte:head>


<h1>{car}</h1>
<p>{carDescription}</p>
<img src="{carThumb}" alt="{carDescription}">




