// a reducer returns a piece of a state, it receives an action from the action creator
export default function(state = null, action) {
	console.log('WeatherReducer#Action received', action);
	return state;
}
