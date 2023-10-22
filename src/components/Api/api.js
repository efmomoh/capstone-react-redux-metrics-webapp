import axios from 'axios';

const apiUniqueKey = '625e320da1dff73739d188728d972a31';

const getCityData = async (city) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiUniqueKey}`,
    );
    return data;
  } catch (error) {
    return [];
  }
};

const getAirPollutionData = async (lat, lon) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiUniqueKey}`,
    );
    return data;
  } catch (error) {
    return {};
  }
};

export { getCityData, getAirPollutionData };
