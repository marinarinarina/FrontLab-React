import axios from 'axios';
import loginType from 'types/loginType';

const login = async ({ email, password, navigate }: loginType) => {
	try {
		const res = await axios.post(
			'https://www.pre-onboarding-selection-task.shop/auth/signin',
			{ email: email, password: password },
			{ headers: { 'Content-Type': 'application/json' } }
		);
		const result = res.data;
		console.log(result.data);

		if (res.status === 200) {
			localStorage.setItem('token', result.access_token);

			alert('로그인 성공!');
			navigate('/todo');
		} else {
			throw new Error(result.message);
		}
	} catch (err: any) {
		alert(`로그인 실패 - ${err.message}`);
	}
};

export default login;
