<script>

    
    import { fridgeMessages } from "../../Store/fridgeMessages.js";

    let fridgeMessage = "";
   
    function handleWriteFridgeMessage() {
        console.log(fridgeMessage);
        $fridgeMessage.push(fridgeMessage);
        fridgeMessage.set($fridgeMessages);
        fridgeMessages.update((currentFridgeMessages) => {
            
        })
        fridgeMessage = "";
    }
</script>

<p>There are ${fridgeMessages.length} messages on the fridge.</p>

<input bind >
<button>on:click()Write a message on the fridge</button>