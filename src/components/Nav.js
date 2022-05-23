import React from 'react';
import { Link } from 'react-router-dom';


/**
 * As mentioned in the documentation under App.js, this is the
 * nav component consisting of page links that were defined under
 * <Routes></Routes>.
 * 
 * This component is structured just like a traditional (non React) 
 * navigation with a nested ul/ol element, however our li children do
 * not have anchor elements, but rather React Router's Link components
 * 
 * Our routing nav has its own component to keep our code compartmentalized,
 * which is crucial because this component alongside its styling object will
 * bloat our App.js file.
 */
const Nav = () => {
	return (
		<nav>
			<ul>
				<li><Link to="/">Styles</Link></li>
				<li><Link to="/state">State</Link></li>
				<li><Link to="/components">Components</Link></li>
			</ul>
		</nav>
	);
}

export default Nav;