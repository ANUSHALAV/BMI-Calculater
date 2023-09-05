"use strict"



document.querySelector('#btn').addEventListener("click", (event) => {

    event.preventDefault();
    let height = parseInt(document.getElementById('heightfield').value);
    let weight = parseInt(document.getElementById('weightfield').value);

    
    height = height / 100;
    let bmi = (weight / (Math.pow(height, 2)));
    bmi = (Math.round(bmi));
    document.getElementById('result').value = bmi;

    document.getElementById('heightfield').value = "";
    document.getElementById('weightfield').value = "";

    if (bmi > 0 && bmi <= 18) {
        document.getElementById('totalbmi').innerHTML = "UnderWeight";
    }
    else if (bmi >= 18 && bmi <= 25) {
        document.getElementById('totalbmi').innerHTML = "Normal... YOU ARE HEALTY";
    }
    else if (bmi > 25) {
        document.getElementById('totalbmi').innerHTML = "OverWeight";
    }
});
