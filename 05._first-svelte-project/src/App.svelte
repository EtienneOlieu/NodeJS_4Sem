<script>
  import FavoriteBirds from "./lib/FavoriteBirds.svelte";
    import Garden from "./lib/Garden.svelte";
    import GardenGate from "./lib/GardenGate.svelte";
import Greeter from "./lib/Greeter.svelte";
</script>

<Greeter />
<Greeter name="Bro" greeting="Goodbye"/>
<Greeter name="Frederik"/>

<img src="../src/assets/svelte.svg" alt="logo">

<FavoriteBirds />
<GardenGate />
<Garden />