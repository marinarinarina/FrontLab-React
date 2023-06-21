import { StyledButton } from 'components/Button';
import { Container, Title, SignForm, Input } from './styles';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const navigate = useNavigate();

	const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	return (
		<Container>
			<Title>회원가입</Title>
			<SignForm>
				<Input
					placeholder="이메일을 입력해주세요"
					data-testid="email-input"
					value={email}
					onChange={handleOnChangeEmail}
				/>
				<Input
					type="password"
					placeholder="비밀번호를 입력해주세요"
					data-testid="password-input"
					value={password}
					onChange={handleOnChangePassword}
				/>
				<StyledButton
					label={'로그인'}
					colorType={'green'}
					size={'medium'}
					onClick={() => {
						console.log('로그인 버튼 클릭');
					}}
				/>
			</SignForm>
		</Container>
	);
};

export default Signup;
