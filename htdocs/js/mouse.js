(function define_horde_Mouse () {

horde.Mouse = function (canvas) {
	this.buttonStates = {};
	this.mouseX = 0;
	this.mouseY = 0;
	this.canvas = canvas;
	horde.on("mousemove", this.handleMouseMove, window, this);
	horde.on("mousedown", this.handleMouseDown, window, this);
	horde.on("mouseup", this.handleMouseUp, window, this);
};

var Mouse = horde.Mouse;
var proto = Mouse.prototype;

Mouse.Buttons = {
	LEFT: 0,
	RIGHT: 2
};

proto.handleMouseMove = function (e) {
	this.mouseX = e.clientX - this.canvas.offsetLeft;
	this.mouseY = e.clientY - this.canvas.offsetTop;
};

proto.handleMouseDown = function (e) {
	this.buttonStates[e.button] = true;
	horde.stopEvent(e);
};

proto.handleMouseUp = function (e) {
	this.buttonStates[e.button] = false;
};

proto.isButtonDown = function (button) {
	return this.buttonStates[button];
};

}());
