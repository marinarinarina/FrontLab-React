// 최상위 클래스 Collection
module.exports = function Collection(...args) {
	this.arr = args[0];

	this.size = function () {
		return this.arr.length;
	};

	this.clear = function () {
		this.arr.length = 0;
	};

	this.print = function () {
		console.log(this.arr);
	};

	this.peek = function () {
		if (this.constructor.name === 'Stack') {
			return this.arr[this.size() - 1];
		} else if (this.constructor.name === 'Queue') {
			return this.arr[0];
		}
	};

	this.isEmpty = function () {
		return this.arr.length === 0 ? true : false;
	};

	this.toArray = function () {
		return [...this.arr];
	};
};
