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
	//	console.log(this.grid.cells);
	//	if(canMove) {
			this.moveTile();
	//	}
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
	
		tiles.push(tile);
		this.setState({
			tiles: tiles
		})
	}

	getType(array) {
			return (Object.prototype.toString.call(array).slice(8, -1).toLowerCase());
	};

	cloneArray(source) {
		var destination = [];
			for(var i in source) {
				if ( this.getType(source[i]) == 'array' ) {
					destination[i] = this.cloneArray(source[i]);		
				} else {
					destination[i] = source[i];
				}
		}
		return destination;
	}

	moveTile() {
		//var cells = this.grid.cells;   
		//注意　grid也像state一样，是动态变化的，如果先deleteData，再addData，会先把数据删除，再也得不到data了
		//fuck，一直没注意，这里是引用，而不是复制
		console.log(this.grid.cells);
		var cells = this.cloneArray(this.grid.cells);
	//	console.log(this.grid.cells);
	//	console.log(cells);
	//	console.log(cells);
	//	console.log(this.grid.getAvailbleCell());

		console.log(cells);


		
		for(var i = 0; i < 4; i++) {
			var previousAvailableTile = null;
			var previousBlankTile = [];
			
			for(var j = 3; j >= 0; j--) {

			//	console.log(j,i,previousBlankTile);
				if(!cells[i][j]) {

					var obj = {};
					obj.x = j;
					obj.y = i;
					previousBlankTile.push(obj);
			
				}else {
					
					if( previousAvailableTile && previousAvailableTile.value == cells[i][j]) {
	
						var x = previousAvailableTile.x;
						var y = previousAvailableTile.y;
						cells[y][x] = Number(cells[i][j]) * 2;

						cells[i][j] = null;

						var blankTile = {};
						blankTile.x = j;
						blankTile.y = i;
						previousBlankTile.push(blankTile);						

						previousAvailableTile = null;

					} else {
						if(previousBlankTile.length > 0) {
						
							var position = previousBlankTile.shift();

							var x= position.x;
							var y = position.y;
							
							cells[x][y] = cells[i][j];
							cells[i][j] = null;

							var previousAvailableTile = {};
							previousAvailableTile.x = position.x;
							previousAvailableTile.y = position.y;
							previousAvailableTile.value = cells[i][j];	

							var blankTile = {};
							blankTile.x = j;
							blankTile.y = i;
							previousBlankTile.push(blankTile);

						} else {
							var previousAvailableTile = {};
							previousAvailableTile.x = j;
							previousAvailableTile.y = i;
							previousAvailableTile.value = cells[i][j];
		
						}
					}
				}
			}
		}
	

	//	console.log(this.grid.cells);
	//	console.log(this.grid.getAvailbleCell());

		var blankCell = [];
		for(var i = 0; i < 4; i++) {
			for(var j = 0; j < 4; j++) {
				if( !cells[i][j] ) {
					var obj = {};
					obj.x = j;
					obj.y = i;
					blankCell.push(obj);
				}
			}
		}
		var value = Math.random() > 0.8 ? 4 : 2;
		var randomNumber = Math.random() * blankCell.length;
		var accurateNumber = Math.floor(randomNumber);
		var tempX = blankCell[accurateNumber].x;
		var tempY = blankCell[accurateNumber].y;
		cells[tempY][tempX] = value;
			

		this.grid.cells = cells;
		this.changeTile();
	}


	changeTile() {
		var tiles = this.grid.getAvailbleCell();
	//	var newTile = this.createTile();
	//	tiles.push(newTile);
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