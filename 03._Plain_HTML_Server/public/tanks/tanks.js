const { response } = require("express");

fetch('/api/tanks').then(response.json()).then(result => {
    const tanksWrapperDiv = document.getElementById('tanks-wrapper');
    
    //avoid XSS!
    result.data.array.forEach(element => {
        const tankDiv = document.createElement('div');
        const tankName = document.createElement('p');
        const tankNationality = document.createElement('p');
        const breakBr = document.createElement('br')

        tankName.innerText = tank.name || 'No name';
        tankNationality.innerText = tankNationality || 'No nationality';
        tankDiv.appendChild(tankName);
        tankDiv.appendChild(tankNationality);
        tankDiv.appendChild(breakBr);
        tanksWrapperDiv.appendChild(tankDiv);
    });
})