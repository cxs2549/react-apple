import styled from 'styled-components'
import { useState, useRef } from 'react'
import {AiOutlineDown} from 'react-icons/ai'

const StyledItem = styled.li``
const Item = ({ title, items }) => {
	const [ isOpen, setIsOpen ] = useState(false)

	const handleOpen = () => {
		setIsOpen(!isOpen)
		arrowRef.current.classList.toggle('rotate-180')
	}

	const arrowRef = useRef()
	return (
		<StyledItem className="py-3 border-b md:border-b-0 cursor-pointer" onClick={handleOpen}>
			<div className="flex items-center justify-between ">
				<h4 className="text-gray-700">{title}</h4>
				<div className="md:hidden transform transition-transform duration-100" ref={arrowRef}>
					<AiOutlineDown />
				</div>
			</div>
			{isOpen && (
				<ul className="ml-4 py-4 flex flex-col gap-y-3 md:hidden">
					{items.map((item, i) => <li key={i} className="hover:text-gray-600">{item}</li>)}
				</ul>
			)}
			<ul className=" py-4 md:flex flex-col gap-y-3 hidden">
					{items.map((item, i) => <li key={i} className="hover:text-gray-600">{item}</li>)}
				</ul>
		</StyledItem>
	)
}
export default Item
