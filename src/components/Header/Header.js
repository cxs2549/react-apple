import styled from 'styled-components'
import Burger from './Burger/Burger'
import Logo from './Logo/Logo'
import { BsBag, BsSearch } from 'react-icons/bs'
import Links from './Links/Links'
import { useState, useRef } from 'react'
import Menu from './Burger/Menu/Menu'
import useOnClickOutside from 'use-onclickoutside'
import Headroom from 'react-headroom'
import Search from './Search/Search'
import { CSSTransition } from 'react-transition-group'
import Bag from './Bag/Bag'

const StyledHeader = styled.header`
	background-color: #101010;
	color: ${(props) => (props.search ? 'black' : 'white')};
	transition: color 1.25s;
	.my-node-enter {
		opacity: 0;
	}
	.my-node-enter-active {
		opacity: 1;
		transition: opacity 600ms;
		transition-delay: 200ms;
	}
	.my-node-exit {
		opacity: 1;
	}
	.my-node-exit-active {
		opacity: 0;
		transition: opacity 600ms;
	}
`
const Header = () => {
	const [ isOpen, setOpen ] = useState(false)
	const [ showSearch, setShowSearch ] = useState(false)
	const [ showBag, setShowBag ] = useState(false)

	const handleClick = () => {
		setOpen(!isOpen)
		document.body.classList.toggle('freeze-flow')
	}
	const handleClose = () => {
		setOpen(false)
		document.body.classList.remove('freeze-flow')
	}
	const links = [ 'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support' ]
	const menuRef = useRef()
	useOnClickOutside(menuRef, handleClose)
	return (
		<Headroom>
			<StyledHeader className="h-12" search={showSearch}>
				<div className="max-w-5xl mx-auto h-full px-6 xl:px-0 flex items-center justify-between md:gap-12 xl:gap-20">
					<div ref={menuRef} className="md:hidden">
						<Burger open={isOpen} click={handleClick} />
						<Menu open={isOpen} links={links} />
					</div>
					<Logo />
					<Links links={links} />
					<div className="flex items-center gap-10 md:gap-12 xl:gap-16 opacity-80">
						<div
							className="hidden md:block transform translate-y-1 mb-1 cursor-pointer"
							onClick={() => setShowSearch(!showSearch)}
						>
							<BsSearch size="1.16em" />
						</div>
						<CSSTransition
							unmountOnExit
							in={showSearch}
							timeout={600}
							classNames="my-node"
						>
							<Search click={() => setShowSearch(false)} />
						</CSSTransition>
						<div className="relative">
							<BsBag size="1.32em" onClick={() => setShowBag(!showBag)} />
							<CSSTransition
								unmountOnExit
								in={showBag}
								timeout={600}
								classNames="my-node"
							>
								<Bag />
							</CSSTransition>
						</div>
					</div>
				</div>
			</StyledHeader>
		</Headroom>
	)
}
export default Header
