fetch("/api/tanks")
.then(response => response.json())
.then((result) => {
    const tanksWrapperDiv = document.getElementById("tanks-wrapper");
    
    console.log(result)
    //avoid XSS!
    result.data.forEach(tank => {
        const tankDiv = document.createElement("div");
        
        const tankName = document.createElement("p");
        tankName.innerText = tank.name || "No name";
       tankDiv.appendChild(tankName);

        const tankNationality = document.createElement("p");
        tankNationality.innerText = tank.nationality || "No nationality";
        tankDiv.appendChild(tankNationality);

        const breakBr = document.createElement("br")

        tankDiv.appendChild(breakBr);
        tanksWrapperDiv.appendChild(tankDiv);
    });
});