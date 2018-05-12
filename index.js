// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => {
	return(
		<Text>Some text Some text Some text</Text>
	);
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);