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
			tile: new Tile(),
			grid: new Grid(),
		}
	}
	componentWillMount() {
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: this._startShouldSetResponder,
			onMoveShouldSetPanResponder: this._moveShouldSetResonder,
			onPanResponderGrant: this._panResponderGrant,
			onPanResponderMove: this._panResponderMove,
			onPanResponderRelease: this._panResponderRelease.bind(this),
		})
		this.moving = false;
	}
	_startShouldSetResponder(e: Object, gestureState: Object): boolean {
		return true;
	}
	_moveShouldSetResponder(e: Object, gestureState: Object): boolean {
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
	}

	render() {
		var x  = this.state.x;
		var y = this.state.y;
		return(
			<View {...this._panResponder.panHandlers} style={[styles.flex, styles.container]}>
				<Text>{x}</Text><Text>{y}</Text>
				<Heading></Heading>
				<Nav></Nav>
				<Box></Box>
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