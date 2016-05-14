import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions

} from 'react-native';


export default class Cell extends Component{
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return(
			<View style={styles.cell}>
			</View>
		)
	}
}

const {height, width} = Dimensions.get('window');

var styles = StyleSheet.create({
	cell: {
		flex: 1,
		borderRadius: 4,
		width: (width - 200)/4,
		margin: 4,
		backgroundColor: 'rgba(238, 228, 218, 0.5)',
	}
})