import React, {PropTypes} from 'react';

import DisplayMyListings from './DisplayMyListings';

const MyListings = ({user, listings}) => {
	return (
		<div>
			<DisplayMyListings
				user={user}
				listings={listings} />

		</div>
	);
};

export default MyListings;
