// 비트와이즈 연산자를 활용해서 객체 안에 있는 3개의 독립적인 true/false 변수의 유무를 체크하고 저장하기

const validationErrorObj = {
  departmentValidationMessage: true,
  messageValidationMessage: true,
  agreedToTermsValidationMessage: false,
};

const HAS_DVM = 1;      // 001
const HAS_MVM = 1 << 1; // 010
const HAS_AVM = 1 << 2; // 100

let bitNumber = 0; // 000

if (validationErrorObj['departmentValidationMessage'] === true) {
  bitNumber = bitNumber | HAS_DVM; // 각 비트에 대하여 or 연산
}

if (validationErrorObj['agreedToTermsValidationMessage'] === true) {
  bitNumber = bitNumber | HAS_MVM;
}

if (validationErrorObj['departmentValidationMessage'] === true) {
  bitNumber = bitNumber | HAS_AVM;
}

console.log(bitNumber.toString(2)); // 101
