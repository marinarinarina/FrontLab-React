// 빌더 패턴: 객체의 표현과 생성과정을 분리

function house(name, address) {
	console.log(`I'm ${name} house and live in ${address}!`);
	return { name, address };
}

function houseBuilder() {
	let _name;
	let _address;

	return {
		setName: (name) => {
			_name = name;
		},
		setAddress: (address) => {
			_address = address;
		},
		build: () => house(_name, _address),
	};
}

const myHouseBuilder = houseBuilder();

myHouseBuilder.setName('wood');
myHouseBuilder.setAddress('south korea, Seoul');

const woodHouse = myHouseBuilder.build(); // I'm wood house and live in south korea, Seoul!
