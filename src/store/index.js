import { writable } from "svelte/store";

export const name = writable(undefined);
name.set("cars");

export const cars = writable([]);


cars.set([{
  "name": "BMW",
  "descr": "Ein tolles Auto",
  "url": "https://bioage.typepad.com/.a/6a00d8341c4fbe53ef025d9b389502200c-800wi"
},
{
  "name": "Mercedes",
  "descr": "Maga Karre!",
  "url": "https://www.mercedes-benz.de/passengercars/mercedes-benz-cars/models/a-class/hatchback-w177/explore/highlights/_jcr_content/contentgallerycontainer/par/contentgallery_8dd5/par/contentgallerytile_b/image.MQ4.8.2x.20200117101534.jpeg"

},
{
  "name": "Volkswagen",
  "descr": "Sehr verlässlich",
  "url": "https://www.automobil-produktion.de/assets/images/9/vw-arteon-2020-bild-volkswagen-ag-290f23b9.jpg"
},
])