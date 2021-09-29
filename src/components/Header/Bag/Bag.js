import styled from 'styled-components'
const StyledBag = styled.div`
	position: fixed;
	top: 48px;
	left: 0;
	width: 100%;
	background-color: #fff;
	color: #333;
	@media (min-width: 768px) {
		width: 300px;
		right: 1rem;
		left: initial;
		border-radius: 18px;
		border: 1px solid #d2d2d7;
		letter-spacing: -0.196px;
	}
	@media (min-width: 1024px) {
		position: absolute;
		top: 35px;
		right: 0;
	}
	ul {
		li {
			cursor: pointer;
		}
		li:last-of-type {
			border-bottom: none;
		}
	}
`
const Bag = () => {
	const links = [
		{ name: 'bag', icon: '' },
		{ name: 'favorites', icon: '' },
		{ name: 'orders', icon: '' },
		{ name: 'account', icon: '' },
		{ name: 'sign in', icon: '' }
	]
	return (
		<StyledBag className="shadow-lg px-4 pt-8 pb-3">
			<h5 className="text-center text-sm">Your Bag is empty.</h5>
			<ul className="border-t capitalize  mt-8">
				{links.map((link, i) => (
					<li
						key={i}
						className="border-b text-brandBlue hover:text-blue-400 py-3 text-sm font-medium cursor-pointer transition-colors duration-300"
					>
						{link.name}
					</li>
				))}
			</ul>
		</StyledBag>
	)
}
export default Bag
