import styled from 'styled-components'
import bgSm from '../../../assets/hero/iphone-sm.png'
import bgLg from '../../../assets/hero/iphone-lg.png'
import HeroText from '../Hero/HeroText/HeroText'

const StyledSuper = styled.div`
	background-image: url(${bgSm});
	background-position: center center;
	background-size: cover;
	width: 100%;
	height: 500px;
	display: grid;
	place-items: center;
	@media (min-width: 768px) {
		background-image: url(${bgLg});
		background-position: center bottom;
		height: 80vh;
        display: flex;
        flex-flow: column;
        align-items: center;
	}
`
const Super = () => {
	return (
		<StyledSuper>
			<div className="mt-12 md:mt-16">
				<HeroText
					h1Color="white"
					subColor="rgb(254, 194, 235)"
					title="iPhone 13"
					subtitle="Your new superpower."
				/>
			</div>
		</StyledSuper>
	)
}
export default Super
