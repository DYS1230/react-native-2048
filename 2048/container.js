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
		this.changeTile();
	}

	changeTile() {
		var tiles = this.grid.getAvailbleWholeCell();
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

	getBlankRowCell(cells) {
		var blankRowCell = [];
		for(var i = 0; i < 4; i++) {
			var row = [];
			for(var j = 0; j < 4; j++) {
				if( !cells[i][j] ) {
					var obj = {};
					obj.x = j;
					obj.y = i;
					row.push(obj);
				}
			}
			blankRowCell.push(row);
		}
		return blankRowCell;		
	}

	moveTile() {

		//var cells = this.grid.cells;   
		//注意　grid也像state一样，是动态变化的，如果先deleteData，再addData，会先把数据删除，再也得不到data了
		//fuck，一直没注意，这里是引用，而不是复制
		console.log('1');
		var cells = this.cloneArray(this.grid.cells);
	//	var blankRow = this.grid.getBlankRowCell(); //可能有问题，确实不合格，验证了grid的动态变化
	//	var blankRow = this.getBlankRowCell(cells); //这也不行，他是拖后的显示
		var blankRow = [];
		for(var i = 0; i < 4; i++) {
			var row = [];
			for(var j = 0; j < 4; j++) {
				if( !cells[i][j] ) {
					row.push(j);
				}
			}
			blankRow.push(row);
		}


	//	console.log(this.grid.cells);
	//	console.log(cells);
	//	console.log(blankRow);
		for(var i = 0; i < 4; i++) {
			var previousAvailableTile = null;
		//	console.log(blankRow[i]);
			var previousBlankTile = blankRow[i].concat();　　//这里出现问题
		//	console.log(previousBlankTile);
			for(var j = 3; j >= 0; j--) {

				if(!cells[i][j]) {

					
			
				}else {
				//	console.log(!!previousAvailableTile);
				//	if(!!previousAvailableTile) {
				//		console.log(previousAvailableTile.value);
				//		console.log(cells[i][j]);
				//		console.log(Number(previousAvailableTile.value) == Number(cells[i][j]));
				//	}
				//	console.log(cells[i][j]);

					if( !!previousAvailableTile && Number(previousAvailableTile.value) == Number(cells[i][j]) )  {
						console.log('有相等')
						var x = previousAvailableTile.x;
						var y = previousAvailableTile.y;
						this.grid.insertTile({x: x, y: y, value: Number(cells[i][j]) * 2});
						cells[y][x] = Number(cells[i][j]) * 2;

						this.grid.deleteTile({x: j, y: i});
						cells[i][j] = null;

						var blankTileX = j;
						previousBlankTile.push(blankTileX);						

						previousAvailableTile = null;

					} else {
						if(previousBlankTile.length > 0 && Math.max.apply(null, previousBlankTile) > j) {
							if(cells[i][j] == 2) {
								console.log('值为２');
								console.log(previousBlankTile);
							}


							var positionX = Math.max.apply(null, previousBlankTile);

							previousBlankTile.splice(previousBlankTile.indexOf(positionX), 1);
						
							previousBlankTile.push(j);

							var tile = {};
							tile.x = positionX;
							tile.y = i;
							tile.value = cells[i][j];
							this.grid.insertTile(tile);
							this.grid.deleteTile({x: j, y: i});

							var previousAvailableTile = {};
							previousAvailableTile.x = positionX;
							previousAvailableTile.y = i;
							previousAvailableTile.value = cells[i][j];	


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
		this.grid.randomCreateTile();
		this.changeTile();
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