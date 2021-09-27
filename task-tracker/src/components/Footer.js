import { Link } from 'react-router-dom'
// we used Link instead of <a href> tag to not refresh after clicking

const Footer = () => {
	return (
		<footer>
			 Copyright ... <Link to="/about">About</Link>
		</footer>
	)
}

export default Footer
