var Grid = function() {
	this.cells = this.initialize();
	this.blankCell = this.getBlankCell();
}

Grid.prototype.initialize = function() {
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

Grid.prototype.addData = function(tile) {
	var x = tile.x;
	var y = tile.y;
	var value = tile.value;
	this.cells[y][x] = value; 
} 

Grid.prototype.deleteData = function(tile) {
	var x = tile.x;
	var y = tile.y;
	this.cells[y][x] = null;
}



Grid.prototype.compareData = function(tile_1, tile_2) {
	if(tile_1.value == tile_2.data) {
		deleteData(tile_1);
		addData(tile_2);
		return true;
	}else {
		return false;
	}
}

Grid.prototype.getBlankCell = function() {
	var blankCell = [];
	for(var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++) {
			if( !this.cells[i][j] ) {
				var obj = {};
				obj.x = j;
				obj.y = i;
				blankCell.push(obj);
			}
		}
	}
	return blankCell;
}

Grid.prototype.getAvailbleCell = function() {
	var availableCell = [];
	for(var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++) {
			if( this.cells[i][j] ) {
				var obj = {};
				obj.x = j;
				obj.y = i;
				obj.value = this.cells[i][j];
				availableCell.push(obj);
			}
		}
	}
	return availableCell;
}

//  ??????

Grid.prototype.getRowBlankCell = function(rowNumber) {
	var rowBlankCell = [];
	for(var i = 0; i < 4; i++) {
		if( !this.cells[rowNumber][i] ) {
			var obj = {};
			obj.x = i;

		}
	}
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

Grid.prototype.randomCreate = function() {
	var blankCell = this.getBlankCell();
	var randomNumber = Math.random() * blankCell.length;
	var accurateNumber = Math.floor(randomNumber);
	return blankCell[accurateNumber];
}



export default Grid;