document.getElementById('horoscopoBtn').addEventListener('click', async () => {
	const url = 'https://cors-anywhere.herokuapp.com/https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

	fetch(url, {
		headers: {
			'X-CMC_PRO_API_KEY': '414f1f82-62e8-4c29-8d1a-317f9487c414'
		}
	})
	.then(response => {
		if (!response.ok) {
			throw new Error('Error en la solicitud');
		}
		return response.json();
	})
	.then(json => {
		console.log(json);
	})
	.catch(error => {
		console.error('Error:', error);
	});
	
	
});
