import axios from 'axios';
import loginType from 'types/loginType';

const signUp = async ({ email, password, navigate }: loginType) => {
	try {
		const res = await axios.post(
			'https://www.pre-onboarding-selection-task.shop/auth/signup',
			{ email: email, password: password },
			{ headers: { 'Content-Type': 'application/json' } }
		);
		const result = res.data;
		console.log(result.data);

		if (res.status === 201) {
			alert('회원가입 성공!');
			navigate('/Login');
		} else {
			throw new Error(result.message);
		}
	} catch (err: any) {
		alert(`회원가입 실패 - ${err.message}`);
	}
};

export default signUp;
