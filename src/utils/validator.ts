export const validation = (email: string, password: string): boolean => {
	return email.includes('@') && password.length >= 8;
};
