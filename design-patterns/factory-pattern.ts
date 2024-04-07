// input data
type Id = string;
type Contact = string;

const Users = new Map<Id, Contact>([
	['Jason', 'email'],
	['Marina', 'kakao'],
	['Lucas', 'sms'],
	['Silvia', 'sms'],
	['Lena', 'email'],
	['Simon', 'kakao'],
	['Kenny', 'email'],
	['Mads', 'email'],
]);

for (const [id, contact] of Users) {
	const notification = notificationCreator(contact);
	notification(); // contact로 새 알림을 보냅니다.
}

// Creator
function notificationCreator(contact: Contact) {
	switch (contact) {
		case 'email':
			return emailNotification;
		case 'sms':
			return smsNotification;
		case 'kakao':
			return kakaoNotification;
		default:
			return otherNotification;
	}
}

// Product
function notification(contact: Contact) {
	if (contact === 'other') {
		console.log(`잘못된 연락처입니다: ${contact}`);
		return;
	}
	console.log(`${contact}로 새 알림을 보냅니다.`);
}

// factory functions
function emailNotification() {
	return notification('email');
}

function smsNotification() {
	return notification('sms');
}

function kakaoNotification() {
	return notification('kakao');
}

function otherNotification() {
	return notification('other');
}
