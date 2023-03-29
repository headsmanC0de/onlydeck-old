import { FC, useEffect, useState } from 'react';

import styles from './Popup.module.scss';
import type { PopupProps } from './Popup.props';

const CustomPopup: FC<PopupProps> = ({ onClose, visibility, children }) => {
	const [show, setShow] = useState<boolean>(false);

	const closeHandler = () => {
		setShow(false);
		onClose(false);
	};

	useEffect(() => {
		setShow(visibility);
	}, [visibility]);

	return (
		<>
			{show && (
				<div
					style={{
						visibility: show ? 'visible' : 'hidden',
						opacity: show ? '1' : '0',
					}}
					className={styles.overlay}
				>
					<div className={styles.popup}>
						<span
							className={styles.close}
							onClick={closeHandler}
						>
							&times;
						</span>
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export default CustomPopup;
