import React, {ReactDOM, Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	

} from 'react-native';

import Cell from './cell'

export default class Box extends Component{
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	componentDidMount() {
		
		
	}
	render() {
		return (
			<View style={styles.row}>
				<Cell ref={(circle) => { this.circle = circle; }}></Cell>
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
		padding: 1,
	},
})