import axios from 'axios';

const API_KEY = '45b52714817a2a57145a20af5407037e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
// action creator for action FETCH_WEATHER
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},fr`;
	const request = axios.get(url);
	// axios returns a promise;

	console.log('Actions#Request:', request);
	// payload is the data for the action
	// we return the promise as the payload
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
// redux-promise is a middleware receives a promise
// it stops the action waits until the promise resolves
// and then sends the answer received from the server as a payload to the reducer
