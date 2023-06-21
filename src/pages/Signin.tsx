import { StyledButton } from 'components/Button';
import { Container, Title, SignForm } from './styles';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const navigate = useNavigate();

	const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	// const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
	// 	e.preventDefault;
	// };

	return (
		<Container>
			<Title>로그인</Title>
			<SignForm>
				<input
					placeholder="이메일을 입력해주세요"
					data-testid="email-input"
					value={email}
					onChange={handleOnChangeEmail}
				/>
				<input
					type="password"
					placeholder="비밀번호를 입력해주세요"
					data-testid="password-input"
					value={password}
					onChange={handleOnChangePassword}
				/>
				<StyledButton
					label={'로그인'}
					colorType={'green'}
					size={'small'}
					onClick={() => {
						console.log('로그인 버튼 클릭');
					}}
				/>
			</SignForm>
		</Container>
	);
};

export default Signin;
