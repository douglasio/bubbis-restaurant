import { createGlobalStyle } from 'styled-components/macro'
import { type ThemeType } from 'styles'
import { FontFamily, FontSize, FontWeight } from 'styles/typography'
import Playfair from 'styles/fonts/playfair/PlayfairDisplaySC-Regular.ttf'
import YsabeauRegular from 'styles/fonts/ysabeau/Ysabeau-Regular.ttf'
import YsabeauThin from 'styles/fonts/ysabeau/Ysabeau-Thin.ttf'
import YsabeauSemiBold from 'styles/fonts/ysabeau/Ysabeau-SemiBold.ttf'
import YsabeauBold from 'styles/fonts/ysabeau/Ysabeau-Bold.ttf'
import YsabeauBlack from 'styles/fonts/ysabeau/Ysabeau-Black.ttf'

// get prettier to format createGlobalStyle tag
const styled = {
	createGlobalStyle: createGlobalStyle,
}

export const GlobalStyle = styled.createGlobalStyle<{ theme: ThemeType }>`
	@font-face {
		font-family: 'Playfair Display SC';
		src: url(${Playfair});
	}

	@font-face {
		font-family: 'Ysabeau';
		src: url(${YsabeauRegular});
		font-weight: ${FontWeight.regular};
	}

	@font-face {
		font-family: 'Ysabeau';
		src: url(${YsabeauThin});
		font-weight: ${FontWeight.light};
	}

	@font-face {
		font-family: 'Ysabeau';
		src: url(${YsabeauSemiBold});
		font-weight: ${FontWeight.semibold};
	}

	@font-face {
		font-family: 'Ysabeau';
		src: url(${YsabeauBold});
		font-weight: ${FontWeight.bold};
	}

	@font-face {
		font-family: 'Ysabeau';
		src: url(${YsabeauBlack});
		font-weight: ${FontWeight.black};
	}

	* {
		margin: 0;
		padding: 0;
	}

	html,
	body {
		background-color: ${({ theme }) => theme.global.background.light};
		color: ${({ theme }) => theme.global.content.body};
		font-family: ${FontFamily.ysabeau};
		font-size: 18px;
	}

	h1 {
		color: ${({ theme }) => theme.global.content.headings.h1};
		font-family: ${FontFamily.playfair};
		font-size: ${FontSize.heading1};
	}

	h2 {
		font-size: ${FontSize.heading2};
		font-weight: ${FontWeight.semibold};
	}

	p {
		color: ${({ theme }) => theme.global.content.body};
		font-size: ${FontSize.base};
	}

	a {
		color: ${({ theme }) => theme.global.content.link};
	}
`
