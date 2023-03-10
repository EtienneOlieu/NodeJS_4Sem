const sourceUrl = "https://www.boredapi.com/api/activity/"

fetch(sourceUrl)
.then(response => response.json())
.then(result => {
    document.getElementById("quest").innerText = result.activity;
});

