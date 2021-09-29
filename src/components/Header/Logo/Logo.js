import styled from 'styled-components'
const StyledLogo = styled.div``
const Logo = () => {
	return (
		<StyledLogo
			id="logo"
			className="text-2xl opacity-75 mr-7 md:mr-0 w-full md:w-auto flex justify-center cursor-pointer transition-opacity duration-300 hover:opacity-100"
		>
			<button className="text-white">
				<i className="fa fa-apple" aria-hidden="true" />
			</button>
		</StyledLogo>
	)
}
export default Logo
