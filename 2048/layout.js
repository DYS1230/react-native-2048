import React, {Component} from 'react';

import {
	StyleSheet,
	Text,
	View,
	Dimensions

} from 'react-native';

import Row from './row.js';

export default class Layout extends Component{
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return(
			<View style={styles.layout}>
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
	layout: {
		height: width - 40,
		width: width - 40,
	},
})