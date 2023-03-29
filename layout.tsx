import Header from 'src/widgets/header';
import SideBar from 'src/widgets/sideBar';

import '../styles/styles.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head />
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
