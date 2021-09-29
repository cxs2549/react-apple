import styled from 'styled-components'
import heroSm from '../../../assets/hero/hero-sm.png'
import heroMdFlat from '../../../assets/hero/hero-md-flat.png'
import heroLg from '../../../assets/hero/hero-lg.png'
import { AiOutlineRight } from 'react-icons/ai'

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
			/* max-width: 40%; */
			/* max-height: 100%; */
			/* margin: 0 auto; */
			object-fit: cover;
			object-position: center top;
			height: 100%;
			min-width: 500px;
			max-width: 200px;
			min-height: 450px;
			transform: scale(1);
		}
	}
	h1 {
		font-size: 200%;
		margin: 0;
		@media (min-width: 768px) {
			font-size: 300%;
		}
		@media (min-width: 1024px) {
			font-size: 350%;
		}
	}
	button {
		display: flex;
		align-items: center;
		gap: .25rem;
		color: var(--brandBlue);
		svg {
			margin-top: 3px;
			font-size: 14px;
		}
	}
`
const Hero = () => {
	return (
		<StyledHero className="flex flex-col gap-y-5 md:gap-y-32 lg:gap-y-20 items-center  pt-7 md:pt-12 lg:pt-7 ">
			<div className="xl:mt-8 ">
				<h1 className="font-medium text-center">iPhone 13 Pro</h1>
				<p className=" text-xl md:text-2xl text-center -mt-1 mb-1 opacity-90">
					Oh. So. Pro.
				</p>
				<div className="flex items-center gap-6 justify-center py-3 font-medium  -mt-2 md:text-lg">
					<button className="hover:text-blue-400 transition-colors duration-200">
						<span>Learn more</span>
						<AiOutlineRight />
					</button>
					<button className="hover:text-blue-400 transition-colors duration-200">
						<span>Buy</span>
						<AiOutlineRight />
					</button>
				</div>
			</div>
			<img src={heroSm} alt="" className=" md:hidden ml-auto" />
			<img src={heroMdFlat} alt="" className="hidden md:block lg:hidden  ml-auto" />
			<img src={heroLg} alt="" className="hidden lg:block" />
		</StyledHero>
	)
}
export default Hero
