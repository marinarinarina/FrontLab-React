import styled, { css } from 'styled-components';

export interface ButtonProps {
	colorType: 'green' | 'white' | 'pink' | 'gray';
	size: 'small' | 'medium' | 'large';
}

export const Button = styled.button<ButtonProps>`
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	font-size: ${({ theme }) => theme.typography.size.default};
	outline: none;
	border: none;
	border-radius: ${({ theme }) => theme.radius.s1};
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&:focus {
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
	}
	&:disabled {
		cursor: not-allowed;
	}

	${(props) =>
		props.colorType === 'green' &&
		css`
			background-color: ${({ theme }) => theme.colors.green200};
			color: ${({ theme }) => theme.colors.background};

			&:hover {
				background-color: ${({ theme }) => theme.colors.green100};
			}

			&:active {
				background-color: ${({ theme }) => theme.colors.green300};
			}
		`}

	${(props) =>
		props.colorType === 'white' &&
		css`
			background-color: ${({ theme }) => theme.colors.background};
			color: ${({ theme }) => theme.colors.text};
			border: 1px solid theme.color.gray300;
			box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;

			&:active {
				background-color: ${({ theme }) => theme.colors.gray100};
			}
		`}

	${(props) =>
		props.colorType === 'pink' &&
		css`
			background-color: ${({ theme }) => theme.colors.pink200};
			color: ${({ theme }) => theme.colors.text};

			&:hover {
				background-color: ${({ theme }) => theme.colors.pink100};
			}

			&:active {
				background-color: ${({ theme }) => theme.colors.pink300};
			}
		`}

${(props) =>
		props.colorType === 'gray' &&
		css`
			background-color: ${({ theme }) => theme.colors.gray300};
			color: ${({ theme }) => theme.colors.text};

			&:hover {
				background-color: ${({ theme }) => theme.colors.gray200};
			}

			&:active {
				background-color: ${({ theme }) => theme.colors.gray400};
			}
		`}

  ${(props) =>
		props.size === 'small' &&
		css`
			width: 150px;
			height: 35px;
		`}

	${(props) =>
		props.size === 'medium' &&
		css`
			width: 200px;
			height: 40px;
		`}

  ${(props) =>
		props.size === 'large' &&
		css`
			width: 250px;
			height: 50px;
			font-size: ${({ theme }) => theme.typography.size.subtitle};
		`}
`;
