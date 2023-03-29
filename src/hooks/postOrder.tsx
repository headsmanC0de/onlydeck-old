import { requestBot } from 'src/features/axios';

import { OrderMessageDto } from 'types/dto';

export const postOrder = (values: OrderMessageDto) => {
	return new Promise((resolve, reject) => {
		requestBot
			.post(`/order`, values)
			.then((res) => {
				if (res.status >= 200 && res.status <= 299) {
					resolve(res);
				}
			})
			.catch((err) => {
				reject(err);
			});
	});
};
