import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	PanResponder,

} from 'react-native';

const {height, width} = Dimensions.get('window')




export default class DataRow extends Component {
	componentWillMount() {
		//console.log(this.props.x, this.props.y, this.props.value);
	}


	render() {
		var tilePostion = {
			top: 5 + (MARGIN_WIDTH + ITEM_WIDTH + 2) * this.props.y,
			left: 5 + (MARGIN_WIDTH + 1.5 + ITEM_WIDTH) * this.props.x,
		}
		var tileColor = this.props.value > 2048 ? styles['tilesuper'] : styles['tile' + this.props.value];
		var fontStyle = this.props.value > 2048 ? styles['tilesuperText'] : styles['tile' + this.props.value + 'Text'];
		return (
			<View style={[styles.tile, tilePostion, tileColor]}>
				<Text style={fontStyle}>{this.props.value}</Text>
			</View>
		)
	}
}


var ITEM_WIDTH = (width - 40 -40) / 4;

var MARGIN_WIDTH = 8;

var styles = StyleSheet.create({
	tile: {
		position: 'absolute',
		borderRadius: 4,
		width: ITEM_WIDTH + 1.5,
		height: ITEM_WIDTH,
		justifyContent: 'center',
		alignItems: 'center',
	},
	font_1: {
		fontSize: 40,
	},
	font_3: {
		fontSize: 30,
	},
	font_5: {
		fontSize: 20,
	},
	tile2: {
    		backgroundColor: '#eee4da',
  	},
  	tile2Text: {
  		fontSize: 40,
  	},
  	tile4: {
    		backgroundColor: '#eee1c9',
  	},
    	tile4Text: {
    		fontSize: 40,
  	},
  	tile8: {
    		backgroundColor: '#f3b27a',
  	},
  	tile8Text: {
    		color: '#f9f6f2',
    		fontSize: 40,
 	},
  	tile16: {
    		backgroundColor: '#f69664',
  	},
  	tile16Text: {
    		color: '#f9f6f2',
    		fontSize: 40,
  	},
  	tile32: {
    		backgroundColor: '#f77c5f',
  	},
  	tile32Text: {
    		color: '#f9f6f2',
    		fontSize: 40,
  	},
  	tile64: {
    		backgroundColor: '#f75f3b',
  	},
  	tile64Text: {
    		color: '#f9f6f2',
    		fontSize: 40,
  	},
  	tile128: {
    		backgroundColor: '#edd073',
  	},
  	tile128Text: {
    		color: '#f9f6f2',
    		fontSize: 30,
  	},
  	tile256: {
    		backgroundColor: '#edcc62',
  	},
  	tile256Text: {
    		color: '#f9f6f2',
    		fontSize: 30,
  	},
  	tile512: {
    		backgroundColor: '#edc950',
  	},
  	tile512Text: {
    		color: '#f9f6f2',
    		fontSize: 30,
  	},
  	tile1024: {
    		backgroundColor: '#edc53f',
  	},
  	tile1024Text: {
    		color: '#f9f6f2',
    		fontSize: 30,
  	},
  	tile2048: {
    		backgroundColor: '#edc22e',
  	},
	tile2048Text: {
		color: '#f9f6f2',
		fontSize: 30,
	},
  	tilesuper: {
		backgroundColor: '#3c3a33',
	},
	tilesuperText: {
		color: '#f9f6f2',
		fontSize: 20,
	},
})