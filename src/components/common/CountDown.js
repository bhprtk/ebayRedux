import React, {PropTypes} from 'react';

const CountDown = ({date}) => {
	// const tempDate = date.getTime();
	// const nowTime = Date.now().getTime();
	return (
		<div>
			<h1>CountDown Component</h1>
			<p>date: {date}</p>
			{/*<p>now: {nowTime}</p>*/}
		</div>
	);
};


export default CountDown;
