import { DefaultTheme } from 'styled-components';

const colors = {
	background: '#FFFFFF', // 하얀색
	error: '#EB5757', // 붉은색
	text: '#202020', // 검은색
	highlight: '#40B3FF', // 하늘색

	yellowGreen100: '#C8DDA4', // 연두색

	green100: '#BCDC89', // 초록버튼 hover
	green200: '#AACB73', // 초록버튼 default
	green300: '#99BC62', // 초록버튼 click

	pink100: '#FFE5E5', // 분홍버튼 hover
	pink200: '#FFD4D4', // 분홍버튼 default
	pink300: '#FFBDBD', // 분홍버튼 click

	gray100: '#F7F8F9', // form 배경 색상
	gray200: '#EBEBEB', // 회색버튼 hover
	gray300: '#D8D8D8', // 회색버튼 default, 선 색상
	gray400: '#C7C7C7', // 회색버튼 click
	gray500: '#888888', // 회색 폰트색
};

const radius = {
	s1: '4px',
	s2: '8px',
	s3: '12px',
	m1: '16px',
	m2: '20px',
	m3: '24px',
};

const typography = {
	weight: {
		regular: '400',
		bold: '700',
		black: '900',
	},
	size: {
		title: '28px',
		subtitle: '22px',
		paragraph: '16px',
		subparagraph: '10px',
		default: '14px',
	},
};

export type ColorsType = typeof colors;
export type RadiusType = typeof radius;
export type TypographyType = typeof typography;

const theme: DefaultTheme = {
	colors,
	radius,
	typography,
};

export default theme;
