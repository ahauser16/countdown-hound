import axios from "axios";

//http://api.openweathermap.org/data/2.5/onecall?lat=40.6405&lon=-73.9628&exclude=hourly,minutely&appid=166a433c57516f51dfab1f7edaed8413&units=imperial

const baseUrl = "http://api.openweathermap.org/data/2.5/onecall?";
const API_KEY = "166a433c57516f51dfab1f7edaed8413";

const getWeatherData = async (latitude, longitude) => {
  try {
    const weatherData = await axios.get(
      baseUrl +
        `lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${API_KEY}`
    );
    return { weatherData };
  } catch (error) {
    throw error;
  }
};

export default getWeatherData;
