<script>
import Bird from "./Bird.svelte";

    const birds = ["Pigeon", "Eagle", "Owl", "Parrot", "Turkey"]
    const birdEmoji = ["🐦", "🦅", "🦉", "🦜", "🦃"]

    let birdIndex = 0;
    let favoriteBird = birds[birdIndex]
    let favoriteBirdEmoji = birdEmoji[birdIndex]

    function changeFavoriteBird(){
    birdIndex = (birdIndex + 1) % birds.length;
    favoriteBird = birds[birdIndex]
    favoriteBirdEmoji = birdEmoji[birdIndex]

    }

</script>

<h2>Favorite Bird</h2>
<div on:click={changeFavoriteBird} on:keydown={changeFavoriteBird}>
<Bird
    name={birds[birdIndex]}
    emoji={birdEmoji[birdIndex]}/>
</div>

<h2>All birds that I know of</h2>
{#each birds as bird}
    <Bird name={bird} />
{/each}
<style>
    h2 {
        user-select: none;
    }
</style>