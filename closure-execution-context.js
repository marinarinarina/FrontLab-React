function applePrice() {
	var fruit = 'apple';
	let price = 10;
	let discount = 0.05;

	var util = {
		getPrice: function() {
			console.log(fruit);
			debugger; // 개발자도구 > source> scope에서 클로저 fruit, apple 확인 가능
			return price;
		},
		setPrice: function(newPrice) {
			price = newPrice;
		},
	};

	return util;
}

var price = applePrice();

price.setPrice(20);

console.log(price.getPrice()); 
// 20
