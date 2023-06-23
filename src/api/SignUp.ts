import axios from 'axios';
import loginType from 'types/loginType';

const signUp = async ({ email, password, navigate }: loginType) => {
	await axios
		.post('https://www.pre-onboarding-selection-task.shop/auth/signup', {
			headers: { 'Content-Type': 'application/json' },
			data: { email, password },
		})
		.then((response) => {
			alert(`
			회원가입 성공!
			${response.data}
		`);
			navigate('/Login');
		})
		.catch((err) => {
			alert(`회원가입 실패 - ${err.message}`);
			if (err.response) {
				// 요청이 이루어졌고 서버가 응답했을 경우
				const { status, config } = err.response;

				if (status === 404) {
					alert(`
					회원가입 실패!
					${config.url} not found
				`);
				}
				if (status === 500) {
					alert(`
					회원가입 실패!
					Server error
				`);
				}
			} else if (err.request) {
				// 요청이 이루어졌으나 서버에서 응답이 없었을 경우
				alert(`
					회원가입 실패!
					Error ${err.message}
				`);
			} else {
				// 그 외 다른 에러
				alert(`Error ${err.message}`);
			}
		});
};

export default signUp;
