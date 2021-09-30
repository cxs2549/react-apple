import styled from 'styled-components'
import HeroText from './HeroText/HeroText'

const StyledHero = styled.div`
	overflow: hidden;
	/* background-color: ${(props) => props.bg || 'white'}; */
	@media (min-width: 768px) {
		/* background-color: #fafafc; */
	}
	@media (min-width: 1024px) {
		/* height: calc(90vh - 48px); */
	}
	@media (min-width: 1280px) {
		background-color: ${props => (props.xlBg || 'white')};
	}
	img {
		object-fit: cover;
		min-height: 376px;
		@media (min-width: 768px) {
			min-height: 400px;
			max-height: 400px;
			object-fit: contain;
		}
		@media (min-width: 1024px) {
			object-fit: contain;
			object-position: center top;
			height: 100%;
			min-width: 500px;
			max-width: 200px;
			min-height: 470px;
			transform: scale(1);
		}
		@media (min-width: 1280px) {
			max-height: 312px;
			min-height: 312px;
			object-fit: contain;
			object-position: center center;
			max-width: auto;
			min-width: 500px;
		}
	}
`
const Hero = ({ sm, md, lg, bg, title, subtitle, h1Color, subColor, resize, left, xlBg }) => {
	return (
		<StyledHero
			className="flex flex-col justify-between gap-8 md:gap-8  items-center  pt-8"
			bg={bg}
			resize={resize}
			xlBg={xlBg}
		>
			<HeroText title={title} subtitle={subtitle} h1Color={h1Color} subColor={subColor} />
			<img src={sm} alt="" className={`md:hidden ${left ? 'ml-auto' : ''} ml-auto`} />
			<img
				src={md}
				alt=""
				className={`hidden md:block lg:hidden  ${left ? 'ml-auto' : ''}`}
			/>
			<img src={lg} alt="" className="hidden lg:block" />
		</StyledHero>
	)
}
export default Hero
