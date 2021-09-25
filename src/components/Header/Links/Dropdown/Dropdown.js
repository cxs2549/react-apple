import styled from 'styled-components'

const StyledDropdown = styled.div`
	position: fixed;
	top: 48px;
	left: 0;
	right: 0;
	/* height: 130px; */
	width: 100%;
	opacity: .98;
	color: ${props => (props.text || '#333')};
	img {
		min-width: ${(props) => props.width || '120px'};
		max-height: 90px;
		object-fit: cover;
		filter: ${props => (props.invert ? 'invert(1)' : '')};
	}
	#card {
		/* min-height: 120px; */
        /* max-height: 120px; */
        min-width: 120px;
        max-width: 120px; 
	}
`

const Dropdown = ({ images, width, background, text, invert }) => {
	return (
		<StyledDropdown
			className={` bg-${background}`}
			width={width}
			text={text}
			invert={invert}
		>
			<div className="flex flex-wrap gap-8 gap-y-12 items-center  max-w-7xl mx-auto px-4 py-8 justify-center  overflow-x-scroll">
				{images.map((image, i) => (
					<div
						id="card"
						key={i}
						className="flex flex-col items-center justify-between gap-3  px-4 py-0 hover:shadow rounded-lg hover:border"
					>
						<img
							src={image.image}
							className=" transition-opacity duration-300 "
							alt=""
						/>
						<h4 className="capitalize whitespace-nowrap text-xs">{image.title}</h4>
					</div>
				))}
			</div>
		</StyledDropdown>
	)
}
export default Dropdown
