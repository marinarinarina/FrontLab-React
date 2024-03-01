// input data
const orders = [
	{type: '배달', totalPrice: 28000},
	{type: '포장', totalPrice: 16000},
	{type: '배달', totalPrice: 43000},
	{type: '포장', totalPrice: 18000},
	{type: '포장', totalPrice: 23000},
	{type: '홀', totalPrice: 30000},
];

// strategy and algorithms
const getTotalPrice = (pricingStrategy, orderPrice) => { // strategy interface
	return pricingStrategy(orderPrice);
}

const deliverInPricing = (orderPrice) => {
	return orderPrice + 3000;
}

const takeoutInPricing = (orderPrice) => {
	return orderPrice * 0.9;
}

const hallInPricing = (orderPrice) => {
	return orderPrice * 0.8;
}

// context
function calcurateTotalPrice(order) {
	let pricing;
	switch(order.type) {
		case '배달':
			pricing = deliverInPricing;
			break;
		case '포장':
			pricing = takeoutInPricing;
			break;
		case '홀':
			pricing = hallInPricing;
			break;	
		default:
			throw new Error('올바른 주문 유형이 아님');
	}
	return getTotalPrice(pricing, order.totalPrice);
}

const result1 = orders.map(order => calcurateTotalPrice(order));
console.log(result1); // [31000, 14400, 46000, 16200, 20700, 24000]
