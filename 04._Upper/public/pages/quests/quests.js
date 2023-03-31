
function fetchQuest(activityQueryString=""){
    console.log(activityQueryString)
    fetch("https://www.boredapi.com/api/activity/"+activityQueryString
    )
    .then(response => response.json())
    .then(result => {
        document.getElementById("quest").innerText = result.activity;
    });
}
//fetchQuest(); //udkommenteret for ikke at belaste api

function getNewQuest() {
    const dropdown = document.getElementById("activity-dropdown")
    fetchQuest(`?type=${dropdown.value}`)
    console.log(dropdown.value);
}

document.getElementById("fetch-new-quest-btn").addEventListener("click", getNewQuest) //function reference means function gets executed when button is clicked