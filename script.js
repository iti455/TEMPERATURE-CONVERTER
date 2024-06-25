function convertTemperature() {
    const inputValue = document.getElementById('inputValue').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputValue = document.getElementById('outputValue');

    if (inputValue === "") {
        outputValue.innerHTML = "Please enter a temperature value.";
        return;
    }

    let celsius;

    switch (inputUnit) {
        case 'celsius':
            celsius = parseFloat(inputValue);
            break;
        case 'fahrenheit':
            celsius = (parseFloat(inputValue) - 32) * 5 / 9;
            break;
        case 'kelvin':
            celsius = parseFloat(inputValue) - 273.15;
            break;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    outputValue.innerHTML = `
        ${celsius.toFixed(2)}° Celsius = ${fahrenheit.toFixed(2)}° Fahrenheit = ${kelvin.toFixed(2)} Kelvin
    `;
}
