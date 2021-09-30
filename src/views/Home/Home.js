import styled from 'styled-components'
import Hero from './Hero/Hero'
import Super from './Super/Super'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'

import heroSm from '../../assets/hero/hero-sm.png'
import heroMdFlat from '../../assets/hero/hero-md-flat.png'
import heroLg from '../../assets/hero/hero-lg.png'

import ipadSm from '../../assets/hero/hero-ipad-sm.png'
import ipadLg from '../../assets/hero/hero-ipad-lg.png'

const StyledHome = styled.div`
	.indicators {
		transform: translateX(-50%) translateY(-2.75rem);
		z-index: 100;
		position: absolute;
		border-radius: 999999px;
		left: 50%;
		gap: .5rem;
	}
	.react-slideshow-container + ul.indicators .each-slideshow-indicator::before {
		width: 11px;
		height: 11px;
		background-color: black;
	}
	.react-slideshow-container .default-nav {
		button svg path {
			stroke: black;
		}
	}
	.react-slideshow-container .default-nav:first-of-type {
		transform: translateX(1rem);
		background: none;
		color: black;
		opacity: .3;
		@media (min-width: 1280px) {
			transform :translateX(10rem);
		}
		svg {
			fill: black;
		}
	}
	.react-slideshow-container .default-nav:last-of-type {
		transform: translateX(-1rem);
		background-color: transparent;
		opacity: .3;
		@media (min-width: 1280px) {
			transform: translateX(-10rem);
		}
		svg {
			fill: black;
		}
	}
`
const Home = () => {
	const heroes = [
		{
			title: 'iPhone 13 Pro',
			subtitle: 'Oh. So. Pro.',
			sm: heroSm,
			md: heroMdFlat,
			lg: heroLg,
			xlBg: '#fff',
			resize: true
		},
		{
			title: 'iPad mini',
			subtitle: 'Mega power. Mini sized.',
			sm: ipadSm,
			md: ipadLg,
			lg: ipadLg
		}
	]

	return (
		<StyledHome>
			<Fade easing="ease" indicators>
				{heroes.map((hero, i) => (
					<Hero
						sm={hero.sm}
						md={hero.md}
						lg={hero.lg}
						bg={hero.bg}
						resize={hero.resize}
						title={hero.title}
						subtitle={hero.subtitle}
						h1Color={hero.h1Color}
						subColor={hero.subColor}
						xlBg={hero.xlBg}
					/>
				))}
			</Fade>
			<Super />
		</StyledHome>
	)
}
export default Home
