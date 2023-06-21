import React from 'react';
import { ButtonProps, Button } from './Button.styles';

interface StyledButtonProps extends ButtonProps {
	label: string;
	onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export const StyledButton: React.FC<StyledButtonProps> = ({ label, colorType, size, onClick }) => {
	return (
		<Button
			className={['button', `button--${size}`, `button--${colorType}`].join(' ')}
			colorType={colorType}
			size={size}
			onClick={onClick}
		>
			{label}
		</Button>
	);
};
