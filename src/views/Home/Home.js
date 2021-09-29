import styled from 'styled-components'
import Hero from './Hero/Hero'
import Super from './Super/Super'

const StyledHome = styled.div``
const Home = () => {
	return (
		<StyledHome>
			<Hero />
			<Super />
		</StyledHome>
	)
}
export default Home
