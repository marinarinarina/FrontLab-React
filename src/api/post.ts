import axios from 'axios';

interface loginType {
	email: string;
	password: string;
	navigate: any;
}

export const login = async ({ email, password, navigate }: loginType) => {
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

export const signup = async (email: string, password: string, navigate: any) => {
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
			navigate('/signin');
		} else {
			throw new Error(result.message);
		}
	} catch (err: any) {
		alert(`회원가입 실패 - ${err.message}`);
	}
};
