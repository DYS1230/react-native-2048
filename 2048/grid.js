var Grid = function() {
	this.cells = this.initializeGrid();
}

Grid.prototype.initializeGrid = function() {
	var cell = [];
	for(var i = 0; i< 4; i++) {
		var row = [];
		for(var j=0; j< 4; j++) {
			row.push(null)
		}
		cell.push(row);
	}
	return cell;
}

Grid.prototype.initialize = function() {
	this.randomCreateTile();
	this.randomCreateTile();
/*
 	var tile_1 = {};
 	tile_1.x = 0;
 	tile_1.y = 0;
 	tile_1.value = 2;
 	this.insertTile(tile_1); 	
 	var tile_2 = {};
 	tile_2.x = 1;
 	tile_2.y = 0;
 	tile_2.value = 2;
 	this.insertTile(tile_2);
 */
}


Grid.prototype.getBlankRowCell = function() {
	var blankRowCell = [];
	for(var i = 0; i < 4; i++) {
		var row = [];
		for(var j = 0; j < 4; j++) {
			if( !this.cells[i][j] ) {
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

Grid.prototype.getBlankWholeCell = function() {
	var cell = this.getBlankRowCell();
	var blankWholeCell = [];
	for(var i = 0; i < cell.length; i++) {
		if(cell[i].length > 0) {
			// null 不能这么做　blankWholeCell = blankWholeCell.concat( cell[i].join('.').split('.') );
			blankWholeCell = blankWholeCell.concat( cell[i] );
		}
	}
	return blankWholeCell;
}

Grid.prototype.getAvailbleRowCell = function() {
	var availableRowCell = [];
	for(var i = 0; i < 4; i++) {
		var row = [];
		for(var j = 0; j < 4; j++) {
			if( this.cells[i][j] ) {
				var obj = {};
				obj.x = j;
				obj.y = i;
				obj.value = this.cells[i][j];
				row.push(obj);
			}
		}
		availableRowCell.push(row);
	}
	return availableRowCell;
}

Grid.prototype.getAvailbleWholeCell = function() {
	var cell = this.getAvailbleRowCell();
	var availbleWholeCell = [];
	for(var i = 0; i < 4; i++) {
		if(cell[i].length > 0) {
			availbleWholeCell = availbleWholeCell.concat( cell[i] );
		}
	}
	return availbleWholeCell;
}

Grid.prototype.available = function() {

	if(this.cells[0][0] == this.cells[0][1] || this.cells[0][0] == this.cells[1][0]) return true;

	if(this.cells[0][2] == this.cells[0][1] || this.cells[0][2] == this.cells[0][3] || this.cells[0][2] == this.cells[1][2]) return true;

	if(this.cells[2][0] == this.cells[2][1] || this.cells[2][0] == this.cells[1][0] || this.cells[2][0] == this.cells[3][0]) return true;

	if(this.cells[2][2] == this.cells[2][1] || this.cells[2][2] == this.cells[2][3] || this.cells[2][2] == this.cells[1][2] || this.cells[2][2] == this.cells[3][2]) return true;

	for(var i = 1; i < 4; i += 2 ) {
		var j = 1;
		if(this.cells[i][j] == this.cells[i-1][j] || this.cells[i][j] == this.cells[i+1][j] || this.cells[i][j] == this.cells[i][j-1] || this.cells[i][j] == this.cells[i][j+1]) return true;
	}

	return false;
}


Grid.prototype.randomCreateTile = function() {
	var blankCell = this.getBlankWholeCell();
	var randomNumber = Math.random() * blankCell.length;
	var accurateNumber = Math.floor(randomNumber);
	var tile = blankCell[accurateNumber];

	tile.value = Math.random() > 0.6 ? 4 : 2;
	this.insertTile(tile);
}

Grid.prototype.insertTile = function(tile) {
	var x = tile.x;
	var y = tile.y;
	this.cells[y][x] = tile.value;
}

Grid.prototype.deleteTile = function(tile) {
	var x = tile.x;
	var y = tile.y;
	this.cells[y][x] = null;
}

export default Grid;