import styled from 'styled-components'

const StyledDropdown = styled.div`
	position: fixed;
	top: 48px;
	left: 50%;
	transform: translateX(-50%);
	width: 90%;
	color: ${(props) => props.text || '#333'};
	border-bottom-right-radius: 11px;
	border-bottom-left-radius: 11px;
	img {
		min-width: ${(props) => props.width || '120px'};
		max-height: 90px;
		object-fit: cover;
		filter: ${(props) => (props.invert ? 'invert(1)' : '')};
	}
	#card {
		min-width: 120px;
		max-width: 120px;
	}
	span {
		color: var(--brandBlue);
	}
`

const Dropdown = ({ images, width, background, text, invert }) => {
	return (
		<StyledDropdown className={` bg-${background} max-w-5xl  shadow`} width={width} text={text} invert={invert}>
			<div className="flex flex-wrap gap-8 gap-y-12 items-center  max-w-7xl mx-auto px-4 py-4 justify-center  overflow-x-scroll">
				{images.map((image, i) => (
					<div
						id="card"
						key={i}
						className="flex flex-col items-center justify-between gap-3  px-8 py-4 hover:shadow rounded-lg hover:border cursor-pointer"
					>
						<img
							src={image.image}
							className=" transition-opacity duration-300 "
							alt=""
						/>
						<h4 className=" whitespace-nowrap text-xs">{image.title}</h4>
					</div>
				))}
			</div>
		</StyledDropdown>
	)
}
export default Dropdown
