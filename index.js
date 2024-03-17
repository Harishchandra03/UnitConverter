
// Weight Converter
// let btn = document.getElementById("converter")
// btn.addEventListener("click", weightCn)

function weightCn() {
    const inputValue = document.getElementById("inputValue").value;
    const conversion = document.getElementById("conversion").value;
    let result;
    // Gram to Kg
    if (conversion === "gTokg") {
        result = inputValue / 1000;
    }
    //Kg to Gram
    else if (conversion === "kgTog") {
        result = inputValue * 1000;
    }
    //Gram To MilliGram
    else if (conversion === "gToM") {
        result = inputValue * 1000
    }
    //KiloGram To MilliGram
    else if (conversion === "KgToM") {
        result = inputValue * 1000000
    }
    const c = document.getElementById("result")
    c.textContent = `Result:${result}`;
}

//Length Converter

let btn = document.getElementById("Converter")
btn.addEventListener("click", lengthCn)

function lengthCn() {
    const InputValue = document.getElementById("InputValue").value;
    const conversiontype = document.getElementById("conversiontype").value;

    let result;
    if (conversiontype === "CmToM") {
        //CentiMeter To Meter
        result = InputValue / 100
    } else if (conversiontype === "MToCm") {
        //Meter To CentiMeter
        result = InputValue * 100
    }
    //Mter To Kilometer
    else if (conversiontype === "MToKm") {
        result = InputValue / 1000
    } else if (conversiontype === "CmtoKm") {
        //Centimeter to Kilometer
        result = InputValue / 100000
    } else if (conversiontype === "kmtocm") {
        //Kilometer to centimeter
        result = InputValue * 100000
    }
    const d = document.getElementById("Result")
    d.textContent = `Result:${result}`;
}

// Time Converter

let btnn = document.getElementById("Tconverter")
btnn.addEventListener("click", TimeCn)
function TimeCn() {
    const Inputvalue = document.getElementById("Inputvalue").value;
    const Conversiontype = document.getElementById("Conversiontype").value;

    let result;
    if (Conversiontype === "StoM") {
        //Seconds to Minutes
        result = Inputvalue / 60
    } else if (Conversiontype === "MtoS") {
        // Minutes To seconds
        result = Inputvalue * 60
    } else if (Conversiontype === "StoH") {
        // Seconds To Hours
        result = Inputvalue / 3600
    } else if (Conversiontype === "HtoS") {
        //Hours to Seconds
        result = Inputvalue * 3600
    } else if (Conversiontype === "StoMs") {
        //Seconds to milli seconds
        result = Inputvalue * 1000
    } else if (Conversiontype === "MstoS") {
        //Milli seconds to Seconds
        result = Inputvalue / 1000
    }
    let p = document.getElementById("ResulT")
    p.textContent = `Result:${result}`
}


