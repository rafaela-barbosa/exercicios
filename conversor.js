document.getElementById('converter').onclick = function() {
    var celsiusValue = document.getElementById('inputCelsius').value;
    var fahrenheitValue = document.getElementById('inputFahrenheit').value;

    if (celsiusValue !== "") {
        var celsius = parseFloat(celsiusValue);
        if (!isNaN(celsius)) {
            var fahrenheit = (celsius * 9 / 5) + 32;
            document.getElementById('inputFahrenheit').value = fahrenheit.toFixed(2);
        } else {
            document.getElementById('inputFahrenheit').value = 'Digite apenas número';
        }
    }
    
    
    if (fahrenheitValue !== "") {
        var fahrenheit = parseFloat(fahrenheitValue);
        if (!isNaN(fahrenheit)) {
            var celsius = (fahrenheit - 32) * 5 / 9;
            document.getElementById('inputCelsius').value = celsius.toFixed(2);
        } else {
            document.getElementById('inputCelsius').value = 'Digite apenas número';
        }
    }
}
