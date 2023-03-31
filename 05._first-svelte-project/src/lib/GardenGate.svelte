<script>
    let door = "🚪";
    function openDoor(){
        if (door === "🚪"){
            door = "⛩"
        }else {
            door = "🚪";
        }
    }
</script>

<h1 on:click={openDoor} on:keydown={openDoor}>{door}</h1>

<style>
    h1 {
        user-select: none;
    }
</style>