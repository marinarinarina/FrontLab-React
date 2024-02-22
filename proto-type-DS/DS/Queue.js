const Collection = require('./Collection.js');

module.exports = function Queue(...args) {
	Collection.call(this, ...args);

	this.enqueue = function (val) {
		this.arr.push(val);
	};

	this.dequeue = function () {
		return this.arr.shift();
	};
};
