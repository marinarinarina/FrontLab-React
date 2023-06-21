import { Form, Input } from './Form.styles';

interface LoginFormProps {
	email: string;
	password: string;
	handleOnChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleOnChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
	email,
	password,
	handleOnChangeEmail,
	handleOnChangePassword,
}) => {
	return (
		<Form>
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
		</Form>
	);
};
