# weather_app 
# Weather Forecast App 🌡☁

A simple, responsive web app that lets users type in a city name and instantly see the current weather for that location — temperature, conditions, and a matching icon.

## What It Does

- User enters a city name in the search form.
- The app looks up the city's coordinates using a geocoding API.
- It then fetches the current weather for those coordinates.
- The UI updates with the city name, weather description, temperature (°C), and a day/night + condition icon — no page reload required.

## Technologies Used

- **HTML5** – page structure and layout
- **CSS3** – custom styling, including custom `@font-face` declarations (Lobster, Caveat, Josefin Sans)
- **Bootstrap 4.3.1** – base grid, card, and form styling
- **Vanilla JavaScript (ES6+)** – DOM manipulation, `async/await`, and `fetch` for API calls
- **OpenWeatherMap API**
  - Geocoding endpoint (`/geo/1.0/direct`) to convert a city name into latitude/longitude
  - Current Weather endpoint (`/data/2.5/weather`) to retrieve live weather data

## How It Was Built

1. **Structured the page** with a form for city input and a hidden weather card (`d-none`) that reveals itself once data loads.
2. **Styled the UI** with Bootstrap for layout/components and custom CSS for fonts, colors, and the overlapping weather icon effect.
3. **Wrote `forecast.js`** to handle all API communication:
   - `getCity(city)` — calls the geocoding API and returns the first matching location's coordinates.
   - `getWeather(lat, lon)` — calls the current weather API using those coordinates and returns the weather data.
4. **Wrote `app.js`** to tie the UI to the API layer:
   - Listens for form submission and prevents the default page reload.
   - Calls `getCity` then `getWeather` in sequence (`updateCity`), passing the result into `updateUI`.
   - `updateUI` injects the city name, condition, and temperature into the DOM, swaps in the correct weather icon, and reveals the card.
5. **Debugged API integration issues**, including fixing the query parameter name (`appid` vs `apikey`), correcting the response shapes expected from each endpoint, and aligning the icon URL format with OpenWeatherMap's icon codes.

## Setup

1. Clone the repo.
2. Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api) and replace the placeholder key in `forecast.js`.
3. Open `index.html` in a browser (or serve it locally) and search for a city.

## Possible Improvements

- Move the API key out of the source code (e.g., environment variable + backend proxy) before deploying publicly.
- Add error handling/UI feedback for invalid city names.
- Support unit toggling (°C / °F).
