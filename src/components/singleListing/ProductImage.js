import React, {PropTypes} from 'react';

const ProductImage = ({image}) => {
	return (
		<div className="col-md-6 col-sm-6">
			<img
				style={styles.image}
				src={image} />

		</div>
	)
};

const styles = {
	image: {
		height: "100%",
		width: "100%"
	}
}

export default ProductImage;
