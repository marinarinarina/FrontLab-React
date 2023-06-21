import 'styled-components';
import { ColorsType, RadiusType, TypographyType } from './Theme';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: ColorsType;
		radius: RadiusType;
		typography: TypographyType;
	}
}
