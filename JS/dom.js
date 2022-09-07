const form = document.querySelector('.location-form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.timeImg');
const icon = document.querySelector('.icon img')

const updateUI = (data) => {
    const {cityObj, weatherObj} = data;

    details.innerHTML = `
    <h4 class="my-3">${cityObj.EnglishName}</h4>
    <div class="my-3">${weatherObj.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weatherObj.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;

    if(card.classList.contains('d-none')) card.classList.remove('d-none');

    if(weatherObj.IsDayTime) time.setAttribute('src', 'Images/day.png');
    else time.setAttribute('src', 'Images/night.svg');

    const iconImg = `Images/Icons/${weatherObj.WeatherIcon}.svg`;
    icon.setAttribute('src', iconImg);
};

const getApp = async (cityName) => {
    const cityObj = await getCityCode(cityName);
    const weatherObj = await getWeather(cityObj.Key);
    return {
        cityObj: cityObj,
        weatherObj: weatherObj
    };
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = form.city.value.trim();
    form.reset();
    getApp(cityName)
    .then(data => {
        updateUI(data);
    })
    .catch(err =>{
        console.log(err);
    });

});