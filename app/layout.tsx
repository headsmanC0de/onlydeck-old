import Script from 'next/script';
import Header from 'src/widgets/header';
import SideBar from 'src/widgets/sideBar';

import '../src/styles/styles.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ua'>
			<head />
			<Script
				async
				src='https://www.googletagmanager.com/gtag/js?id=G-DVDK0YD8FR'
			/>
			<Script
				id='google-analytics'
				strategy='afterInteractive'
			>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

          gtag('config', 'G-DVDK0YD8FR');
        `}
			</Script>
			<body>
				<div className='wrapper'>
					<SideBar />
					<div className='main'>
						<Header />
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
