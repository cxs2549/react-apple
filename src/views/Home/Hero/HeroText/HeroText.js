import styled from 'styled-components'
import { AiOutlineRight } from 'react-icons/ai'

const StyledHeroText = styled.div`
    p {
        color: ${props => (props.subColor || 'inherit')}
    }
`
const HeroText = ({title, subtitle, h1Color, subColor}) => {
	return (
		<StyledHeroText subColor={subColor}>
			<h1 className={`font-medium text-center text-${h1Color}`}>{title}</h1>
			<p className=" text-xl md:text-2xl text-center -mt-1 mb-1 opacity-90">{subtitle}</p>
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
		</StyledHeroText>
	)
}
export default HeroText
