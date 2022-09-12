const accuWeatherKey = 'cwyxsWoumICAxMqgiEUH4lv6PZknc6PA';

const getWeather = async (cityCode) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const addition = `${cityCode}?apikey=${accuWeatherKey}`;

    const res = await fetch(base + addition);
    const data = await res.json();
    return data[0];
}

const getCityCode = async (cityStr) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const addition = `?apikey=${accuWeatherKey}&q=${cityStr}`;

    const res = await fetch(base + addition);
    const data = await res.json();
    return data[0];
}