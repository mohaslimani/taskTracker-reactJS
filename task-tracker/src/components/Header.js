import PropTypes from 'prop-types'
import Button from './Button'


const Header = ( {title} ) => {
	return (
		<>
		<h1 style={inlinEStylExample}> PP </h1> 
		<header className="header">
			<h1>{title}</h1>
			<Button color="green" text="zid akh zid"/>
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
