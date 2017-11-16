import React, { Component } from 'react';

export default class GoogleMap extends Component {
	componentDidMount() {
		new google.maps.Map(this.refs.map, { zoom: 12, center: { lat: this.props.lat, lng: this.props.lon } });
	}
	render() {
		// this.refs.map gives a reference to the ref created below
		return <div ref={`map`} />;
	}
}
