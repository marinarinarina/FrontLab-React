import React from 'react';
import { Form, Input, Label } from './Form.styles';

interface LoginFormProps {
	email: string;
	password: string;
	handleOnChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleOnChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	disabled?: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({
	email,
	password,
	handleOnChangeEmail,
	handleOnChangePassword,
	handleOnSubmit,
	disabled,
}) => {
	return (
		<Form onSubmit={handleOnSubmit}>
			<Label htmlFor="email">이메일</Label>
			<Input
				type="text"
				id="email"
				name="email"
				placeholder="이메일을 입력해주세요"
				value={email}
				onChange={handleOnChangeEmail}
			/>
			<Label htmlFor="password">비밀번호</Label>
			<Input
				type="password"
				id="password"
				name="password"
				placeholder="비밀번호를 입력해주세요"
				value={password}
				onChange={handleOnChangePassword}
			/>
			<Input type="submit" value="submit" disabled={!disabled} />
		</Form>
	);
};
