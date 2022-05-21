import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<ul>
				<li><Link to="/">Styles</Link></li>
				<li><Link to="/components">Components</Link></li>
				<li><Link to="/redux">Redux</Link></li>
			</ul>
		</nav>
	);
}

export default Nav;