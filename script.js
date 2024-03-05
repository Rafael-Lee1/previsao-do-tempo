async function getWeather() {
    let location = document.getElementById('location').value;
    const apiKey = 'YOUR_API_KEY'; // Insira sua chave de API gratuita aqui

    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;

        document.getElementById('result').textContent = `Previsão do Tempo em ${location}: ${weatherDescription}, Temperatura: ${temperature}°C`;
    } catch (error) {
        console.error('Erro ao obter dados do clima:', error);
        document.getElementById('result').textContent = 'Erro ao obter dados do clima. Verifique se o nome da cidade está correto.';
    }
}
