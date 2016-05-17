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

export default class Container extends Component {
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
			onMoveShouldSetPanResponder: this._moveShouldSetResonder,
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
		console.log(this.grid.cells);
		if(canMove) {
			this.moveTile();
		}
	}
	initializeGame() {
		this.grid = new Grid();
		this.grid.initialize();
		var tile_1 = this.createTile();
		this.insertTile(tile_1);
		this.grid.addData(tile_1);
		var tile_2 = this.createTile();
		this.insertTile(tile_2);
		this.grid.addData(tile_2);
	}

	createTile() {
		var value = Math.random() > 0.8 ? 4 : 2;
		var position = this.grid.randomCreate();
		var tile = new Tile(position, value);
		return tile;
	}

	insertTile(tile) {
		var tiles = this.state.tiles;
		tile.x = 0; tile.y = 0;
		tiles.push(tile);
		this.setState({
			tiles: tiles
		})
	}


	moveTile() {
		var cells = this.grid.cells;
		
	//	console.log(cells);
	//	console.log(cells);
	//	console.log(this.grid.getAvailbleCell());




		
		for(var i = 0; i < 1; i++) {
			var previousAvailableTile = null;
			var previousBlankTile = [];
			console.log(cells);
			for(var j = 3; j >= 0; j--) {
			//	console.log(previousAvailableTile);
			//	console.log(previousBlankTile);
				if(!cells[i][j]) {
				//	if(previousBlankTile) {
				//		continue;
				//	} else {
						var obj = {};
						obj.x = j;
						obj.y = i;
						previousBlankTile.push(obj);
						console.log(previousBlankTile);
					//	this.grid.deleteData(previousTile);
					//	previousTile.x = j;
					//	previousTile.y = i;
					//	this.grid.addData(previousTile);
				//	}
				}else {

					if( previousAvailableTile && previousAvailableTile.value == cells[i][j]) {
						console.log('1111');
							var deleteTile = {};
							deleteTile.x = j;
							deleteTile.y = i;
							deleteTile.value = null;
						//	this.grid.deleteData(deleteTile);

							var blankTile = {};
							blankTile.x = j;
							blankTile.y = i;
							previousBlankTile.push(blankTile);

							var addTile = {};
							addTile.x = previousAvailableTile.x;
							addTile.y = previousAvailableTile.y;
							addTile.value = Number(previousAvailableTile.value) * 2;
							console.log(addTile.value);
							this.grid.addData(addTile);							

							previousAvailableTile = null;

					} else {
						if(previousBlankTile.length > 0) {
						
							var position = previousBlankTile.shift();
							//console.log(position);
							
							var deleteTile = {};
							deleteTile.x = j;
							deleteTile.y = i;
							deleteTile.value = null;
						//	this.grid.addData(deleteTile);
							
							var blankTile = {};
							blankTile.x = j;
							blankTile.y = i;
							previousBlankTile.push(blankTile);
							
							var addTile = {};
							addTile.x = position.x;
							addTile.y = position.y;
							addTile.value = cells[i][j];
							this.grid.addData(addTile);
					//		console.log(addTile);
					//		console.log(this.grid.cells);
							var previousAvailableTile = {};
							previousAvailableTile.x = position.x;
							previousAvailableTile.y = position.y;
							previousAvailableTile.value = cells[i][j];
							

						} else {
							var previousAvailableTile = {};
							previousAvailableTile.x = j;
							previousAvailableTile.y = i;
							previousAvailableTile.value = cells[i][j];
							console.log(previousAvailableTile);
						}
					}
				}
			}
		}
	

	//	console.log(this.grid.cells);
	//	console.log(this.grid.getAvailbleCell());

		this.changeTile();

	}


	changeTile() {
		var tiles = this.grid.getAvailbleCell();
	//	console.log(tiles);
		this.setState({
			tiles: tiles
		});
	}

	render() {
		var x  = this.state.x;
		var y = this.state.y;
		return (
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