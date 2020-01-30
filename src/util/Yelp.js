const apiKey = "rGCx3NxPvaQnCU1QL1i_ZuJkkrNba1DoPgJBFPkYHSOyRt3qDrA5lGiOpSRXUN8GvSGxKpVaHkgQxLMiKubVZgeEiKN3gTzG3u897hB-Lu765mAxuL_MGY5WXjcyXnYx";

const Yelp = {
	search(term, location, sortBy) {
		console.log(term, location, sortBy);
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { 
		  headers: {
			    Authorization: `Bearer ${apiKey}` 
			  }
			}).then(response => {
				return response.json();
			}).then(jsonResponse=> {
				if (jsonResponse.businesses) {
					return jsonResponse.businesses.map((business=> {
						return {
							id: business.id,
							imageSrc: business.image_url, 
							name: business.name,
							address: business.location.address1, 
							city: business.location.city,
							state: business.location.state,
							zipCode: business.location.zip_code,
							category: business.categories[0].title,
							rating: business.rating,
							reviewCount: business.review_count
						}
					}));
				}
			});
	}
}

/*const search = (term, location, sortBy) => {
	return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { 
		  headers: {
			    Authorization: `Bearer ${apiKey}` 
			  }
			}).then(response => {
				return response.json();
			}).then(jsonResponse=> {
				if (jsonResponse.businesses) {
					return jsonResponse.businesses.map(business=> {
						return {
							id: business.id,
							imageSrc: business.image_url, 
							name: business.name,
							address: business.location.display_address, 
							city: business.location.city,
							state: business.location.state,
							zipcode: business.location.zip_code,
							category: business.categories,
							rating: business.rating,
							reviewCount: business.review_count
						}
					});
				}
			});
}*/

export default Yelp;
