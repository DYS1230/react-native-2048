var Tile = function(position, value) {
	this.x = position.x;
	this.y = position.y;
	this.value = value;
	this.previousX = 0;
	this.previousY = 0;
	this.previousData = 0;
}

Tile.prototype.saveData = function(tile) {
	this.previousX = tile.x;
	this.previousY = tile.y;
	this.previousData = tile.value;
}

export default Tile;