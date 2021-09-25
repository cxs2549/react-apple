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
import links from '../../store/store'

const StyledHeader = styled.header`
	background-color: #101010;
	color: white;
	.my-node-enter {
		opacity: 0;
	}
	.my-node-enter-active {
		opacity: 1;
		transition: all 300ms;
		/* transition-delay: 200ms; */
	}
	.my-node-exit {
		opacity: 1;
	}
	.my-node-exit-active {
		opacity: 0;
		transition: all 200ms;
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
	const handleShowSearch = () => {
		document.getElementById('logo').classList.add('opacity-0')
		document.getElementById('logo').classList.remove('opacity-75')
		document.getElementById('links').classList.add('opacity-0')
		document.getElementById('links').classList.remove('opacity-75')
		document.getElementById('bagSearchContainer').classList.add('text-black')
		setShowSearch(!showSearch)
	}
	const handleCloseSearch = () => {
		document.getElementById('logo').classList.remove('opacity-0')
		document.getElementById('logo').classList.add('opacity-75')
		document.getElementById('links').classList.remove('opacity-0')
		document.getElementById('links').classList.add('opacity-75')
		document.getElementById('bagSearchContainer').classList.remove('text-black')

		setShowSearch(false)
	}
	const handleShowBag = () => {
		setShowBag(!showBag)
		document.getElementById('baggy').classList.toggle('-rotate-45')
	}
	const handleCloseBag = () => {
		setShowBag(false)
		document.getElementById('baggy').classList.remove('-rotate-45')
	}

	const menuRef = useRef()
	const bagRef = useRef()
	useOnClickOutside(menuRef, handleClose)
	useOnClickOutside(bagRef, handleCloseBag)
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
					<div
						id="bagSearchContainer"
						className="flex items-center gap-10 md:gap-12 xl:gap-16  transition-colors duration-300"
					>
						<div
							className="hidden md:block transform translate-y-1 mb-1 cursor-pointer"
							onClick={handleShowSearch}
						>
							<BsSearch
								size="1.16em"
								className="opacity-75 hover:opacity-100 transition-opacity duration-300"
							/>
						</div>
						<CSSTransition
							unmountOnExit
							in={showSearch}
							timeout={300}
							classNames="my-node"
						>
							<Search click={handleCloseSearch} />
						</CSSTransition>
						<div className="relative" ref={bagRef}>
							<BsBag
								id="baggy"
								size="1.32em"
								onClick={handleShowBag}
								className="transform opacity-75 hover:opacity-100 transition-all duration-300"
							/>
							<CSSTransition
								unmountOnExit
								in={showBag}
								timeout={300}
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
