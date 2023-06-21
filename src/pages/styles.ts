import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	top: 200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h1`
	margin-bottom: 20px;
`;

// 회원가입
export const SignForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 400px;
	border: '1px solid gray';
`;

export const Input = styled.input`
	margin-top: 5px;
	margin-bottom: 5px;
	width: 200px;
	height: 30px;
`;
