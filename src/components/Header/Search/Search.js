import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
const StyledSearch = styled.div`
	position: absolute;
	top: 0;
	right: 8rem;
	min-width: 70vh;
	height: 48px;
	opacity: 1;
	z-index: 1000;
	@media (min-width: 1280px) {
		transform: translateX(-50%);
		right: 3.8rem;

	}

	#close {
		transform: translateX(2px) translateY(1px);
	}
`
const Search = ({ click }) => {
	return (
		<StyledSearch className="hidden md:block">
			<div className="relative flex items-center h-full">
				<input
					type="search"
					id="searchNav"
					placeholder="Search apple.com"
					className="w-full h-10 rounded pl-8 pr-8 focus:outline-none bg-gray-800 text-gray-200"
				/>
				<div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white">
					<BsSearch size="1em" />
				</div>
				<div id="close" className="absolute cursor-pointer text-white -right-8 opacity-80">
					<AiOutlineClose onClick={click} size="1.3em" />
				</div>
			</div>
		</StyledSearch>
	)
}
export default Search
