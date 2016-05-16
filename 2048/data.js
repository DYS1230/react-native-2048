import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions

} from 'react-native';

import DataRow from './dataRow';

export default class Data extends Component {
	componentWillMount() {
	
	}
	render() {
		var tiles = this.props.tiles;
		return (
			<View style={styles.data}>
				{tiles.map( (item) => { return <DataRow x={item.x} y={item.y} value={item.value} ></DataRow> } )}
			</View>
		)
	}
}

var styles= StyleSheet.create({
	data: {

	}
})