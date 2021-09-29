import styled from 'styled-components'
import heroSm from '../../../assets/hero/hero-sm.png'
import heroMdFlat from '../../../assets/hero/hero-md-flat.png'
import heroLg from '../../../assets/hero/hero-lg.png'
import HeroText from './HeroText/HeroText'

const StyledHero = styled.div`
	overflow: hidden;
	background-color: #f2f3f5;
	@media (min-width: 768px) {
		background-color: #fafafc;
	}
	@media (min-width: 1024px) {
		background-color: #f2f3f5;
		height: calc(100vh - 48px);
	}
	@media (min-width: 1280px) {
	}
	img {
		object-fit: contain;
		max-width: 85%;
		@media (min-width: 768px) {
			max-height: 50%;
			object-fit: contain;
			transform: scale(1.3);
			object-position: -80px 0;
		}
		@media (min-width: 1024px) {
			object-fit: cover;
			object-position: center top;
			height: 100%;
			min-width: 500px;
			max-width: 200px;
			min-height: 470px;
			transform: scale(1);
		}
	}
	
	
`
const Hero = () => {
	return (
		<StyledHero className="flex flex-col gap-y-5 md:gap-y-32 lg:gap-y-20 items-center  pt-7 md:pt-12 lg:pt-7 ">
			<HeroText title="iPhone 13 Pro" subtitle="Oh. So. Pro." />
			<img src={heroSm} alt="" className=" md:hidden ml-auto" />
			<img src={heroMdFlat} alt="" className="hidden md:block lg:hidden  ml-auto" />
			<img src={heroLg} alt="" className="hidden lg:block" />
		</StyledHero>
	)
}
export default Hero
