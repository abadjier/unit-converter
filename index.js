/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const numberInput = document.getElementById("number-input")
const lengthOutput = document.getElementById("length")
const volumeOutput = document.getElementById("volume")
const massOutput = document.getElementById("mass")

let inputVal = ""


function metricToImperial(unit, val) {
    if (unit === "meter") {
        // meter to feet
        return (val * 3.2808399).toFixed(3)
    } else if (unit === "liters") {
        // liters to gallons
        return (val * 0.26417205).toFixed(3)
    } else if (unit === "kilograms") {
        // kilograms to pounds
        return (val * 2.20462).toFixed(3)
    }
    
    return null
}

function imperialToMetric(unit, val) {
    if (unit === "feet") {
        // feet to meters
         return (val / 3.2808399).toFixed(3)
    } else if ( unit === "gallons") {
        // gallons to liters
        return (val / 0.26417205).toFixed(3)
    } else if (unit === "pounds") {
        // pounds to kilograms
        return (val / 2.20462).toFixed(3)
    }
    
    return null
}



convertBtn.addEventListener("click", function() {
    inputVal = Number(numberInput.value)
    
    
    lengthOutput.textContent = `
    ${inputVal} meters = ${metricToImperial("meter", inputVal)} feet | 
    ${inputVal} feet = ${imperialToMetric("feet", inputVal)} meters`
    
    volumeOutput.textContent = `
    ${inputVal} liters = ${metricToImperial("liters", inputVal)} gallons | 
    ${inputVal} gallons = ${imperialToMetric("gallons", inputVal)} liters`
    
    massOutput.textContent = `
    ${inputVal} kilos = ${metricToImperial("kilograms", inputVal)} pounds | 
    ${inputVal} pounds = ${imperialToMetric("pounds", inputVal)} kilos`
})