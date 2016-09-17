import React, {PropTypes} from 'react';

const Parallax = ({scrollDown}) => {
	return (
		<div className="parallax">
			<div className="text-center" style={styles.outerDiv}>
				<h1>FIND THE BEST HEADPHONES</h1>
				<br/>
				<a
					className="btn btn-success"
					style={styles.searchBtn}
					role="button"
					onClick={scrollDown}>
					<h5>SEARCH HEADPHONES</h5>
				</a>
			</div>
		</div>
	);
};

const styles = {
	outerDiv: {
		color: '#fafafa',
		paddingTop: '30vh'
	},
	searchBtn: {
		borderColor: '#fff',
		borderWidth: 2,
		background: 'transparent',
		width: 250
	}
}

export default Parallax;
