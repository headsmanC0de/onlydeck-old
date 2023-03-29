import { useEffect, useState } from 'react';

type UseFetchOptions = {
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
	headers?: Headers;
	body?: BodyInit;
};

export const useFetch = (url: string, options?: UseFetchOptions) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(url, options);
				const json = await response.json();
				setData(json);
			} catch (err: any) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url, options]);

	return { data, error, loading };
};
