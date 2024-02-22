const Collection = require('./Collection.js');

module.exports = function Stack(...args) {
	Collection.call(this, ...args);

	this.push = function (val) {
		this.arr.push(val);
	};

	this.pop = function () {
		return this.arr.pop();
	};
};
