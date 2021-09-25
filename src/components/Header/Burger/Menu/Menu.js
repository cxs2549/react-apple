import styled from 'styled-components'
import Searchbar from './Searchbar/Searchbar'
const StyledMenu = styled.div`
	position: fixed;
	top: 47px;
	left: ${(props) => (props.open ? '0' : '100%')};
	right: 0;
	bottom: 0;
	height: calc(100vh - 47px);
	background-color: #000000;
	transition: left 400ms;
	z-index: 100;
	color: #f5f5f7;
	

	ul {
		border-color: #2f2f32;
		background-color: #000;
		a {
			font-size: 17px;
			border-color: #2f2f32;
		}
		a:last-of-type {
			border-bottom: none;
		}
	}

	
`
const Menu = ({ open, links }) => {
	return (
		<StyledMenu open={open} className="py-2 md:hidden">
			<div className="px-6">
				<Searchbar />
			</div>
			<ul className="px-6 py-2 border-t flex flex-col">
				{links.map((link, i) => (
					<a href="/" key={i} className="  border  py-2 border-l-0 border-r-0 border-t-0">
						<span className=" opacity-80 hover:opacity-100">{link.name}</span>
					</a>
				))}
			</ul>
		</StyledMenu>
	)
}
export default Menu
