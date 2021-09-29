import styled from 'styled-components'
import Item from './Item/Item'
const StyledAccordion = styled.ul``

const items = [
	{
		name: 'Shop and Learn',
		links: [
			'Mac',
			'iPhone',
			'iPad',
			'Watch',
			'TV',
			'Music',
			'AirPods',
			'HomePod',
			'iPod touch',
			'AirTag',
			'Accessories',
			'Gift Cards'
		]
	},
	{
		name: 'Services',
		links: [
			'Mac',
			'iPhone',
			'iPad',
			'Watch',
			'TV',
			'Music',
			'AirPods',
			'HomePod',
			'iPod touch',
			'AirTag',
			'Accessories',
			'Gift Cards'
		]
	},
	{
		name: 'Account',
		links: [
			'Mac',
			'iPhone',
			'iPad',
			'Watch',
			'TV',
			'Music',
			'AirPods',
			'HomePod',
			'iPod touch',
			'AirTag',
			'Accessories',
			'Gift Cards'
		]
	},
	{
		name: 'Apple Store',
		links: [
			'Mac',
			'iPhone',
			'iPad',
			'Watch',
			'TV',
			'Music',
			'AirPods',
			'HomePod',
			'iPod touch',
			'AirTag',
			'Accessories',
			'Gift Cards'
		]
	},
	{
		name: 'For Business',
		links: [
			'Mac',
			'iPhone',
			'iPad',
			'Watch',
			'TV',
			'Music',
			'AirPods',
			'HomePod',
			'iPod touch',
			'AirTag',
			'Accessories',
			'Gift Cards'
		]
	},
	{
		name: 'For Education',
		links: [
			'Mac',
			'iPhone',
			'iPad',
			'Watch',
			'TV',
			'Music',
			'AirPods',
			'HomePod',
			'iPod touch',
			'AirTag',
			'Accessories',
			'Gift Cards'
		]
	},
	{
		name: 'For Healthcare',
		links: [
			'Mac',
			'iPhone',
			'iPad',
			'Watch',
			'TV',
			'Music',
			'AirPods',
			'HomePod',
			'iPod touch',
			'AirTag',
			'Accessories',
			'Gift Cards'
		]
	},
	{
		name: 'For Government',
		links: [
			'Mac',
			'iPhone',
			'iPad',
			'Watch',
			'TV',
			'Music',
			'AirPods',
			'HomePod',
			'iPod touch',
			'AirTag',
			'Accessories',
			'Gift Cards'
		]
	},
	{
		name: 'Apple Values',
		links: [
			'Mac',
			'iPhone',
			'iPad',
			'Watch',
			'TV',
			'Music',
			'AirPods',
			'HomePod',
			'iPod touch',
			'AirTag',
			'Accessories',
			'Gift Cards'
		]
	},
	{
		name: 'About Apple',
		links: [
			'Mac',
			'iPhone',
			'iPad',
			'Watch',
			'TV',
			'Music',
			'AirPods',
			'HomePod',
			'iPod touch',
			'AirTag',
			'Accessories',
			'Gift Cards'
		]
	},
]

const Accordion = () => {
	return (
		<StyledAccordion className="py-4 text-sm md:grid grid-cols-5 flex-wrap md:gap-x-8">
			{items.map((item, i) => <Item key={i} title={item.name} items={item.links} />)}
		</StyledAccordion>
	)
}
export default Accordion
