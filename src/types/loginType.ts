import { NavigateFunction } from 'react-router-dom';

interface loginType {
	email: string;
	password: string;
	navigate: NavigateFunction;
}

export default loginType;
