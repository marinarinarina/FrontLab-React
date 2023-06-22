import styled, { css } from 'styled-components';

export interface InputProps {
	type: 'text' | 'password' | 'submit';
}

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 400px;
	font-size: ${({ theme }) => theme.typography.size.default};
`;

export const Input = styled.input<InputProps>`
	margin-bottom: 5px;
	width: 200px;
	height: 30px;
	padding-left: 5px;

	${(props) =>
		props.type === 'submit' &&
		css`
			padding-left: 0px;
			margin-top: 30px;
			height: 40px;
			font-weight: ${({ theme }) => theme.typography.weight.bold};

			&:active {
				background-color: ${({ theme }) => theme.colors.gray100};
			}

			&:disabled {
				cursor: not-allowed;
				opacity: 0.75;
			}
		`}
`;

export const Label = styled.label`
	margin-top: 5px;
	margin-bottom: 5px;
	width: 200px;
	display: inline-block;
	text-align: start;
`;
