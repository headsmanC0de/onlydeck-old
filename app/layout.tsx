import Script from 'next/script';
import Header from 'src/widgets/header';
import SideBar from 'src/widgets/sideBar';

import '../src/styles/styles.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ua'>
			<head />
			<Script
				id='google-tag-manager'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-T8B322D4');
                    `,
				}}
			/>

			<body>
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-T8B322D4'
						height='0'
						width='0'
						style={{ display: 'none', visibility: 'hidden' }}
					></iframe>
				</noscript>
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
