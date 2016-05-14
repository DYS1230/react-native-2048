import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions

} from 'react-native';

import Cell from './cell'

export default class Box extends Component{
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return(
			<View style={styles.row}>
				<Cell></Cell>
				<Cell></Cell>
				<Cell></Cell>
				<Cell></Cell>
			</View>
		)
	}
}

const {height, width} = Dimensions.get('window');

var styles = StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 4,
		paddingRight: 4,
	},
	cell: {
		flex: 1,
		borderRadius: 4,
		width: (width - 200)/4,
		margin: 4,
		backgroundColor: 'rgba(238, 228, 218, 0.5)',
	}
})