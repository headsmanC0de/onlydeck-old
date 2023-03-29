import type { FC } from 'react';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/logo.svg';

export const Logo: FC = ({ ...props }) => {
	return (
		<Link
			href={`/`}
			{...props}
		>
			<Image
				src={logo}
				priority={true}
				alt='Picture of the author'
			/>
		</Link>
	);
};
