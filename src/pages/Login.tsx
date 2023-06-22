import { LoginForm } from 'components/Form/LoginForm';
import { Container, Title } from './styles';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from 'utils/validator';
import login from 'api/Login';

const Login = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isEmail, setIsEmail] = useState<boolean>(false);
	const [isPassword, setIsPassword] = useState<boolean>(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('token')) {
			navigate('/todo');
		}
	}, []);

	const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);

		if (validateEmail(e.target.value) === false) {
			setIsEmail(false);
		} else {
			setIsEmail(true);
		}
	};

	const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);

		if (validatePassword(e.target.value) === false) {
			setIsPassword(false);
		} else {
			setIsPassword(true);
		}
	};

	const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		login({ email, password, navigate });
	};

	return (
		<Container>
			<Title>로그인</Title>
			<LoginForm
				email={email}
				password={password}
				handleOnChangeEmail={handleOnChangeEmail}
				handleOnChangePassword={handleOnChangePassword}
				handleOnSubmit={handleOnSubmit}
				disabled={isEmail && isPassword}
			/>
		</Container>
	);
};

export default Login;
