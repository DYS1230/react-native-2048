import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions

} from 'react-native';

import Row from './row.js';

export default class Box extends Component{
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return(
			<View style={styles.box}>
				<Row></Row>
				<Row></Row>
				<Row></Row>
				<Row></Row>
			</View>
		)
	}
}

const {height, width} = Dimensions.get('window');

var styles = StyleSheet.create({
	box: {
		height: width - 40,
		width: width - 40,
		backgroundColor: '#bbada0',
		borderRadius: 4,
		marginTop: 30,
		marginLeft: 20,
	},
})