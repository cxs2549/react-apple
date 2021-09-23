import styled from 'styled-components'
const StyledLogo = styled.div``
const Logo = () => {
return (
<StyledLogo className="text-2xl opacity-75 mr-7 md:mr-0 w-full md:w-auto flex justify-center cursor-pointer">
    <button><i className="fa fa-apple" aria-hidden="true"></i></button>
</StyledLogo>
)
}
export default Logo