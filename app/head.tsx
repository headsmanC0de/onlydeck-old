import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from 'src/utils/next-seo-config';

export default function Head() {
	return (
		<>
			<meta charSet='UTF-8' />
			<meta
				content='width=device-width, initial-scale=1'
				name='viewport'
			/>
			<link
				rel='icon'
				href='logo.ico'
			/>
			<meta
				property='og:image'
				content='../public/logo.ico'
			/>
			<meta
				name='keywords'
				content='SteamDeck, SteamDeck 512, SteamDeck 256, SteamDeck 64, SteamDock, стім дек, стім дек 512, стім дек 256, стім дек 64, стім док, купити стім дек'
			/>
			<meta
				name='theme-color'
				content='#0d171f'
			/>
			<link
				rel='apple-touch-icon'
				href='logo.ico'
			/>
			<NextSeo
				{...NEXT_SEO_DEFAULT}
				useAppDir={true}
			/>
		</>
	);
}
