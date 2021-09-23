import Hamburger from 'hamburger-react'


const Burger = ({open, click}) => {
	
	return (
		<div className="transform -translate-x-4 md:hidden opacity-80">
			<Hamburger size={22} rounded toggled={open} toggle={click} />
		</div>
	)
}
export default Burger
