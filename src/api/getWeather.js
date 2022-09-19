import axios from "axios";


const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?";
const API_KEY = "166a433c57516f51dfab1f7edaed8413";

const getWeatherData = async (latitude, longitude) => {
  try {
    const weatherData = await axios.get(
      baseUrl + `lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`
    );
    return {weatherData};
  } catch (error) {
    throw error;
  }
};

export default getWeatherData;
