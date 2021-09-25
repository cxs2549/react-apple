import styled from 'styled-components'
import Dropdown from './Dropdown/Dropdown'
import { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import useOnClickOutside from 'use-onclickoutside'

const StyledLinks = styled.ul`
	li {
		color: #f5f5f7;
	}

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
const Links = ({ links }) => {
	const [ isShowingModal1, toggleModal1 ] = useState(false)
	const [ isShowingModal2, toggleModal2 ] = useState(false)
	const [ isShowingModal3, toggleModal3 ] = useState(false)
	const [ isShowingModal4, toggleModal4 ] = useState(false)
	const [ isShowingModal5, toggleModal5 ] = useState(false)
	const [ isShowingModal6, toggleModal6 ] = useState(false)
	const [ isShowingModal7, toggleModal7 ] = useState(false)
	const [ isShowingModal8, toggleModal8 ] = useState(false)

	const allDropToggles = [
		() => {
			toggleModal1(!isShowingModal1)
			document.getElementById('link-0').classList.toggle('opacity-100')
		},
		() => {
			toggleModal2(!isShowingModal2)
			document.getElementById('link-1').classList.toggle('opacity-100')
		},
		() => {
			toggleModal3(!isShowingModal3)
			document.getElementById('link-2').classList.toggle('opacity-100')
		},
		() => {
			toggleModal4(!isShowingModal4)
			document.getElementById('link-3').classList.toggle('opacity-100')
		},
		() => {
			toggleModal5(!isShowingModal5)
			document.getElementById('link-4').classList.toggle('opacity-100')
		},
		() => {
			toggleModal6(!isShowingModal6)
			document.getElementById('link-5').classList.toggle('opacity-100')
		},
		() => {
			toggleModal7(!isShowingModal7)
			document.getElementById('link-6').classList.toggle('opacity-100')
		},
		() => {
			toggleModal8(!isShowingModal8)
			document.getElementById('link-7').classList.toggle('opacity-100')
		},
		
	]

	const allMenus = [
		isShowingModal1,
		isShowingModal2,
		isShowingModal3,
		isShowingModal4,
		isShowingModal5,
		isShowingModal6,
		isShowingModal7,
		isShowingModal8
	]

	const storeMenuRef = useRef()
	const macMenuRef = useRef()
	const iPhoneMenuRef = useRef()
	const iPadMenuRef = useRef()
	const watchMenuRef = useRef()
	const tvMenuRef = useRef()
	const musicMenuRef = useRef()
	const supportMenuRef = useRef()

	const refs = [
		storeMenuRef,
		macMenuRef,
		iPhoneMenuRef,
		iPadMenuRef,
		watchMenuRef,
		tvMenuRef,
		musicMenuRef,
		supportMenuRef
	]

	useOnClickOutside(storeMenuRef, () => {
		toggleModal1(false)
		document.getElementById('link-0').classList.remove('opacity-100')
	})
	useOnClickOutside(macMenuRef, () => {
		toggleModal2(false)
		document.getElementById('link-1').classList.remove('opacity-100')
	})
	useOnClickOutside(iPhoneMenuRef, () => {
		toggleModal3(false)
		document.getElementById('link-2').classList.remove('opacity-100')
	})
	useOnClickOutside(iPadMenuRef, () => {
		toggleModal4(false)
		document.getElementById('link-3').classList.remove('opacity-100')
	})
	useOnClickOutside(watchMenuRef, () => {
		toggleModal5(false)
		document.getElementById('link-4').classList.remove('opacity-100')
	})
	useOnClickOutside(tvMenuRef, () => {
		toggleModal6(false)
		document.getElementById('link-5').classList.remove('opacity-100')
	})
	useOnClickOutside(musicMenuRef, () => {
		toggleModal7(false)
		document.getElementById('link-6').classList.remove('opacity-100')
	})
	useOnClickOutside(supportMenuRef, () => {
		toggleModal8(false)
		document.getElementById('link-7').classList.remove('opacity-100')
	})


	return (
		<StyledLinks
			id="links"
			className="hidden md:flex w-full justify-between text-sm font-medium  transition-opacity duration-300"
		>
			{links.map((link, i) => (
				<li ref={refs[i]} key={i}>
					<div
						id={`link-${i}`}
						onClick={allDropToggles[i]}
						className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300"
					>
						<span>{link.name}</span>
					</div>
					<CSSTransition
						unmountOnExit
						in={allMenus[i]}
						timeout={300}
						classNames="my-node"
					>
						<Dropdown
							images={link.images}
							width={link.width}
							background={link.background}
							text={link.text}
							invert={link.invert}
						/>
					</CSSTransition>
				</li>
			))}
		</StyledLinks>
	)
}
export default Links
