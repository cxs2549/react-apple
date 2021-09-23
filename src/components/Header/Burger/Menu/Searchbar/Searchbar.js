import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
const StyledSearchbar = styled.div`
/* background-color: #000; */
	input {
        font-size: 17px;
		background-color: #333;
		/* opacity: .5; */
		/* background-color: #fff; */
	}
	svg {
		color: white;
	}
`
const Searchbar = () => {
	return (
		<StyledSearchbar className="relative pb-4">
			<input
				type="search"
				placeholder="Search apple.com"
				className="w-full h-10 rounded pl-8 pr-8 focus:outline-none"
			/>
			<div className="absolute left-2 top-3">
				<BsSearch size="1em" />
			</div>
		</StyledSearchbar>
	)
}
export default Searchbar
