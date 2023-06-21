import React from 'react';
import { ButtonProps, Button } from './Button.styles';

interface StyledButtonProps extends ButtonProps {
	label: string;
	disabled?: boolean;
	isSignup?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const StyledButton: React.FC<StyledButtonProps> = ({ label, colorType, size, onClick, disabled, isSignup }) => {
	return (
		<Button
			className={['button', `button--${size}`, `button--${colorType}`].join(' ')}
			colorType={colorType}
			size={size}
			onClick={onClick}
			disabled={disabled}
			data-testid={isSignup ? 'signup-button' : 'signin-button'}
		>
			{label}
		</Button>
	);
};
