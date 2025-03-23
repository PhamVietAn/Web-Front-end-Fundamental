const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 75,
        windSpeed: 5,
        description: "Có mây",
        icon: "🌥️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 6, 
        description: "Mát mẻ",
        icon: "🌤️"
    }
};

function searchWeather() {
    let cityInput = document.getElementById("cityInput").value.trim();
    let weatherResult = document.getElementById("weatherResult");

    if (weatherData[cityInput]) {
        let data = weatherData[cityInput];
        weatherResult.innerHTML = `
            <h3 class="local">${cityInput}</h3>
            <div class = boxWeather>
                <p class = "temperature">${data.icon} ${data.temperature}°C</p>
                <div class = "weatherText">
                    <p>${data.description}</p>
                    <p>Độ ẩm: ${data.humidity}%</p>
                    <p>Tốc độ gió: ${data.windSpeed} km/h</p>
                </div>
            </div>
        `;
        weatherResult.style.display = "block";
    } else {
        weatherResult.innerHTML = `<p>Không tìm thấy dữ liệu cho thành phố này!</p>`;
        weatherResult.style.display = "block";
    }
}
