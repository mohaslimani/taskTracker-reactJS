import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import Button from './Button'


const Header = ( {title, onSet, btnSt} ) => {

	const location = useLocation();
	return (
		<>
		<h1 style={inlinEStylExample}> PP </h1> 
		<header className="header">
			<h1>{title}</h1>
			{
				location.pathname === '/' &&
				<Button color={btnSt ? "gray" : "green"} text={btnSt ? "sed l9lawi" : "zid akh zid"} click={onSet}/>
			}
		</header>
		</>
	)
}


Header.defaultProps = {
	title: 'to do dzeeb.',
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

const inlinEStylExample = {
	color : 'black',
	backgroundColor: 'gray',
	fontSize: '80px',
}

export default Header
