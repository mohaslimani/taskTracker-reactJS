import PropTypes from 'prop-types'

const Button = ({color , text, click}) => {
	return (
		<button onClick={click} style={{ backgroundColor: color}} className="btn">{text}</button>
	)
}

Button.propTypes = {
	text: PropTypes.string.isRequired ,
	color: PropTypes.string ,
}

Button.defaultProps = {
	color : 'gray',
}

export default Button
