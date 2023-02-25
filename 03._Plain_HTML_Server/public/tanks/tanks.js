fetch("/api/tanks")
.then(response => response.json())
.then((result) => {
    const tanksWrapperDiv = document.getElementById("tanks-wrapper");
    
    console.log(result)
    //avoid XSS!
    result.data.forEach(tank => {
        const tankDiv = document.createElement("div");
        const tankName = document.createElement("p");
        const tankNationality = document.createElement("p");
        const breakBr = document.createElement("br")

        tankName.innerText = tank.name || "No name";
        tankNationality.innerText = tank.nationality || "No nationality";
        tankDiv.appendChild(tankName);
        tankDiv.appendChild(tankNationality);
        tankDiv.appendChild(breakBr);
        tanksWrapperDiv.appendChild(tankDiv);
    });
});