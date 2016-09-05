import React, {PropTypes} from 'react';

import DisplayMyListings from './DisplayMyListings';

const MyListings = ({user, listings}) => {
	return (
		<div className="col-md-9 col-sm-9">
			<DisplayMyListings
				user={user}
				listings={listings} />

		</div>
	);
};

export default MyListings;
