import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from 'src/utils/next-seo-config';

export default function Head() {
	return (
		<>
			<meta charSet='utf-8' />

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
				content='OnlyDeck, Steam Deck, аксесуари для Steam Deck, ігрові приставки, ігри для PC'
			/>
			<meta
				name='description'
				content='Інтернет-магазин [Ваша назва магазину]: ваше односерійне рішення для придбання Steam Deck та аксесуарів. Великий вибір, ексклюзивні аксесуари, спеціальні пропозиції. Купуйте з нами та отримуйте якісне обслуговування, швидку доставку по всій Україні та гарантію задоволення!'
			/>
			<meta
				name='robots'
				content='index,follow'
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
