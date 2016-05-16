import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	PanResponder,

} from 'react-native';

import Heading from './heading';
import Nav from './nav';
import Box from './box';

import Tile from './tile';
import Grid from './grid';

export default class Container extends Component{
	constructor(props) {
		super(props);
		this.state = {
			x: 0,
			y: 0,
			value: 0,
			tiles: [],
		}
	}
	componentWillMount() {
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: this._startShouldSetResponder,
			onStartShouldSetResponderCapture: this._startShouldSetResponderCapture,
			onMoveShouldSetPanResponder: this._moveShouldSetResonder,
			onResponderTerminationRequest: this._responderTerminationRequest,
			onMoveShouldSetPanResponderCapture: this._moveShouldSetResonderCapture,
			onPanResponderGrant: this._panResponderGrant,
			onPanResponderMove: this._panResponderMove,
			onPanResponderRelease: this._panResponderRelease.bind(this),
		})
		this.moving = false;
		this.initializeGame();
	
	}
	_startShouldSetResponder(e: Object, gestureState: Object): boolean {
		return true;
	}
	_moveShouldSetResonder(e: Object, gestureState: Object): boolean {
		return true;
	}
	_startShouldSetResponderCapture(e: Object, gestureState: Object): boolean {
		return true;
	}
	_responderTerminationRequest(e: Object, gestureState: Object): boolean {
		return true;
	}	
	_moveShouldSetResonderCapture(e: Object, gestureState: Object): boolean {
		return true;
	}
	_panResponderGrant(e: Object, gestureState: Object) {
		this.moving = true;
	}

	_panResponderMove(e: Object, gestureState: Object) {

	}
	_panResponderRelease(e: Object, gestureState: Object) {
		var dx = gestureState.dx;
		var dy = gestureState.dy;
		var absDx = dx > 0 ? dx : -dx;
		var absDy = dy > 0 ? dy : -dy;
		//上１　左２　下３　右４
		var direction = absDx > absDy ? (dx > 0 ? 2 : 4) : (dy > 0 ? 3 : 1);
		var canMove = dx > 10 || dy > 10;
		this.setState({
			x: dx,
			y: dy,
		});
		console.log('container');
	}
	initializeGame() {
		this.grid = new Grid();
		var tile_1 = this.createTile();
		this.insertTile(tile_1);
		this.grid.pushData(tile_1);
		var tile_2 = this.createTile();
		this.insertTile(tile_2);
		this.grid.pushData(tile_2);

	}

	createTile() {
		var value = Math.random() > 0.8 ? 4 : 2;
		var position = this.grid.randomCreate();
		var tile = new Tile(position, value);
		return tile;
	}

	insertTile(tile) {
		var tiles = this.state.tiles;
		tiles.push(tile);
		this.setState({
			tiles: tiles
		})
	}




	render() {
		var x  = this.state.x;
		var y = this.state.y;
		return(
			<View {...this._panResponder.panHandlers} style={[styles.flex, styles.container]}>
				<Text>{x}</Text><Text>{y}</Text>
				<Heading></Heading>
				<Nav></Nav>
				<Box tiles={this.state.tiles}></Box>
			</View>
		)
	}
}

const {height, width} = Dimensions.get('window');

var styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	container: {
		backgroundColor: '#faf8ef',
	},
});