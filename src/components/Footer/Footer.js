import styled from 'styled-components'
import Accordion from './Accordion/Accordion'
const StyledFooter = styled.footer`
	background-color: #f2f3f5;
	color: rgb(134, 134, 139);
`
const Footer = () => {
	const footerlinks = [
		'privacy policy',
		'terms of use',
		'sales and refunds',
		'legal',
		'site map'
	]
	return (
		<StyledFooter className="text-xs">
			<div className="max-w-5xl mx-auto px-4 py-8">
				<p className=" border-b pb-4">
					1. SharePlay coming soon. An Apple Fitness+ subscription is required for all
					participants in a SharePlay Group Workout. ​​Apple Fitness+ requires iOS 14.3 or
					later, iPadOS 14.3 or later, watchOS 7.2 or later, and tvOS 14.3 or later. To
					get the newest features, use Apple Fitness+ with Apple Watch Series 3 or later,
					with watchOS 8 paired with iPhone 6s or later with iOS 15, iPad with iPadOS 15,
					Apple TV 4K or Apple TV HD with tvOS 15. <br /> <br /> 2. $9.99/month after free
					trial. No commitment. Plan automatically renews after trial until cancelled.{' '}
					<br /> <br /> To access and use all the features of Apple Card, you must add
					Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or
					iPadOS. Update to the latest version by going to Settings, General, Software
					Update. Tap Download and Install. <br /> <br /> Available for qualifying
					applicants in the United States. <br /> <br /> Apple Card is issued by Goldman
					Sachs Bank USA, Salt Lake City Branch. <br /> <br /> Learn more about how Apple
					Card applications are evaluated at support.apple.com/kb/HT209218. <br /> <br />{' '}
					Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing
					group. Offer good for 3 months after eligible device activation. Plan
					automatically renews until cancelled. Restrictions and other terms apply.
				</p>
				<Accordion />
				<p className="mb-4 text-center pt-2">
					More ways to shop: <span className="text-brandBlue">
						Find an Apple Store
					</span>{' '}
					or <span className="text-brandBlue">other retailer</span> near you. Or call
					1-800-MY-APPLE.
				</p>
				<div className="flex flex-col lg:flex-row items-center justify-between gap-y-4">
					<p>United States</p>
					<p>&copy; 2021 CxS Development for Apple Inc. All rights reserved.</p>
					<ul className="flex gap-4 pt-1 capitalize">
						{footerlinks.map((link, i) => <li key={i}>{link}</li>)}
					</ul>
				</div>
			</div>
		</StyledFooter>
	)
}
export default Footer
