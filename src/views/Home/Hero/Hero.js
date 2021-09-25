import styled from 'styled-components'
import heroSm from '../../../assets/hero/hero-sm.png'
import heroMd from '../../../assets/hero/hero-md.png'
import heroLg from '../../../assets/hero/hero-lg.png'

const StyledHero = styled.div`
	height: 77vh;
	background-color: #f2f3f5;
	@media (min-width: 1280px) {
		height: calc(100vh - 48px);
	}
	img {
		object-fit: contain;
		@media (min-width: 768px) {
			max-height: 60%;
		}
		@media (min-width: 1280px) {
			max-height: 50%;
			min-width: 40%;
			margin: 0 auto;
			object-fit: cover;
			object-position: center top;
			margin-top: 1rem;
		}
	}
	h1 {
		font-size: 700%;
		margin: 0;
        @media (min-width: 1280px) {
            font-size: 1700%;
            transform: translateY(4rem);
        }
	}
`
const Hero = () => {
	return (
		<StyledHero className="flex flex-col justify-end pt-8 xl:pt-16">
			<div className="xl:mt-8">
				<h1 className="font-medium text-center mb-2">13 Pro</h1>
				<p className="font-medium text-2xl text-center -mt-4">iPhone 13 Pro</p>
				<div className="flex items-center gap-6 justify-center py-3 font-medium text-blue-700 -mt-2">
					<button>Learn more</button>
					<button>Buy</button>
				</div>
			</div>
			<img src={heroSm} alt="" className=" md:hidden" />
			<img src={heroMd} alt="" className="hidden md:block xl:hidden" />
			<img src={heroLg} alt="" className="hidden xl:block" />
		</StyledHero>
	)
}
export default Hero
