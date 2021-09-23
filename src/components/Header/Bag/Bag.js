import styled from 'styled-components'
const StyledBag = styled.div`
	position: fixed;
	top: 48px;
    left: 0;
    width: 100%;
	background-color: #fff;
	/* height: 300px; */
	color: #333;
	@media (min-width: 768px) {
        /* position: absolute; */
        width: 300px;
        right: 1rem;
        left: initial;
		/* transform: translateX(-50%); */
        border-radius: 12px;
	}
    @media (min-width: 1024px) {
        position: absolute;
        top: 35px;
        right: 0;
    }
	ul {
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
		<StyledBag className="shadow-lg px-4 pt-8 pb-3 border">
			<h5 className="text-center text-sm">Your Bag is empty.</h5>
			<ul className="border-t capitalize text-blue-700 mt-8">
				{links.map((link, i) => (
					<li key={i} className="border-b py-3 text-sm font-medium">
						{link.name}
					</li>
				))}
			</ul>
		</StyledBag>
	)
}
export default Bag
