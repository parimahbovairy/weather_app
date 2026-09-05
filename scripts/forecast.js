const key = '6484dfeff6d6e8629274f39505fb8d72';

// get city / coordinates information
const getCity = async (city) => {
  const base = 'https://api.openweathermap.org/geo/1.0/direct';
  const query = `?q=${encodeURIComponent(city)}&limit=1&appid=${key}`;

  const response = await fetch(base + query);
  if (!response.ok) throw new Error('Could not find that city.');

  const data = await response.json();
  if (!data.length) throw new Error('City not found.');

  return data[0]; // { name, lat, lon, country, state }
};

// get current weather using lat/lon
const getWeather = async (lat, lon) => {
  const base = 'https://api.openweathermap.org/data/2.5/weather';
  const query = `?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

  const response = await fetch(base + query);
  if (!response.ok) throw new Error('Could not fetch weather.');

  return await response.json(); // single object, not an array
};
