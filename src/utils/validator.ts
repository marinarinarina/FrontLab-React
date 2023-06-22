export const validateEmail = (email: string): boolean => {
	const regex = /\S+@\S+\.\S+/;
	return regex.test(email);
};

export const validatePassword = (password: string): boolean => {
	return password.length >= 8;
};
