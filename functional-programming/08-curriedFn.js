const pipe =
	(...fns) =>
	(...args) => {
		return fns.reverse().reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
	};

const curriedFn = (fn) => {
	const arity = fn.length; // (함수의) 항의 수. ex. fn(2, 4)는 항이 2개

	return function createSubFn(...curriedArgs) {
		console.log(curriedArgs);
		if (curriedArgs.length < arity) {
			return createSubFn.bind(null, ...curriedArgs); // bind: 원본 함수의 복제본을 반환
		}
		return fn.call(null, ...curriedArgs); // 원본 함수를 실행시킨 반환값을 반환
	};
};

const dissoc = curriedFn((dissocKey, obj) => {
	return Object.keys(obj).reduce((acc, key) => {
		if (key === dissocKey) return acc;
		acc[key] = obj[key];
		return acc;
	}, {});
});

const rename = curriedFn((keysMap, obj) => {
	return Object.keys(obj).reduce((acc, key) => {
		acc[keysMap[key] || key] = obj[key];
		return acc;
	}, {});
});

const person = {
	name: 'nakta',
	age: 10,
	work: 'developer',
};

console.log(dissoc); // [Function: createSubFn]
console.log(dissoc('age')); // [ 'age' ], [Function: bound createSubFn]
console.log(dissoc('age', person)); // [ 'age', { name: 'nakta', age: 10, work: 'developer' } ], { name: 'nakta', work: 'developer' }

const result = pipe(dissoc('age'), rename({ work: 'job' }))(person);

console.log(result); // [ 'age', { name: 'nakta', age: 10, work: 'developer' } ], { name: 'nakta', job: 'developer' }
