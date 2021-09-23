import styled from 'styled-components'
const StyledLinks = styled.ul`
    li {
        opacity: .85;
       
    }
`
const Links = ({links}) => {
    
return (
<StyledLinks className="hidden md:flex w-full justify-between text-sm font-medium">
    {links.map((link, i) => (
        <li key={i} className="cursor-pointer hover:opacity-100">{link}</li>
    ))}
</StyledLinks>
)
}
export default Links