import React from 'react';
import HooksCounter from '../components/HooksCounter';
import ReduxCounter from '../components/ReduxCounter';


/**
 * '<></>' are fragments, and work similarly to divs. We need to use
 * either of these elements as groups of two or more components must 
 * always have a parent element.
 * 
 * While divs are considered more semantic than a fragment, less divs 
 * in our markup means more readable and performant code.
 */
const StatePage = () => {
	return(
		<>
			<HooksCounter />
			<ReduxCounter />
		</>
	)
}

export default StatePage;