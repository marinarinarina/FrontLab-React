import React from 'react';
import { ButtonProps, Button } from './Button.styles';

interface StyledButtonProps extends ButtonProps {
	label: string;
	isSignup?: boolean;
	disabled?: boolean;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const StyledButton: React.FC<StyledButtonProps> = ({ label, colorType, size, isSignup, disabled, onClick }) => {
	return (
		<Button
			className={['button', `button--${size}`, `button--${colorType}`].join(' ')}
			colorType={colorType}
			size={size}
			data-testid={isSignup ? 'signup-button' : 'Login-button'}
			disabled={disabled}
			onClick={onClick}
		>
			{label}
		</Button>
	);
};
