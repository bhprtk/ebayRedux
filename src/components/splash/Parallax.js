import React, {PropTypes} from 'react';
import LoginButton from './LoginButton';

const Parallax = ({scrollDown}) => {
	return (
		<div className="parallax">
			<div className="text-center" style={styles.outerDiv}>
				<h1>AUCTION THIS</h1>
				<br/>
				<LoginButton />
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
