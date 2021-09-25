import { useEffect } from 'react'
import styled from 'styled-components'
const StyledRevealMenu = styled.nav`
	*,
	*::after,
	*::before {
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	html,
	body,
	.st-container,
	.st-pusher,
	.st-content {
		height: 100%;
	}

	.st-content {
		overflow-y: scroll;
		background: #f3efe0;
	}

	.st-content,
	.st-content-inner {
		position: relative;
	}

	.st-container {
		position: relative;
		overflow: hidden;
	}

	.st-pusher {
		position: relative;
		left: 0;
		z-index: 99;
		-webkit-transition: -webkit-transform 0.5s;
		transition: transform 0.5s;
	}

	.st-pusher::after {
		position: absolute;
		top: 0;
		right: 0;
		width: 0;
		height: 0;
		background: rgba(0, 0, 0, 0.2);
		content: '';
		opacity: 0;
		-webkit-transition: opacity 0.5s, width 0.1s 0.5s, height 0.1s 0.5s;
		transition: opacity 0.5s, width 0.1s 0.5s, height 0.1s 0.5s;
	}

	.st-menu-open .st-pusher::after {
		width: 100%;
		height: 100%;
		opacity: 1;
		-webkit-transition: opacity 0.5s;
		transition: opacity 0.5s;
	}

	.st-menu {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		visibility: hidden;
		width: 300px;
		height: 100%;
		background: #48a770;
		-webkit-transition: all 0.5s;
		transition: all 0.5s;
	}

	.st-menu::after {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.2);
		content: '';
		opacity: 1;
		-webkit-transition: opacity 0.5s;
		transition: opacity 0.5s;
	}

	.st-menu-open .st-menu::after {
		width: 0;
		height: 0;
		opacity: 0;
		-webkit-transition: opacity 0.5s, width 0.1s 0.5s, height 0.1s 0.5s;
		transition: opacity 0.5s, width 0.1s 0.5s, height 0.1s 0.5s;
	}

	/* content style */

	.st-menu ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.st-menu h2 {
		margin: 0;
		padding: 1em;
		color: rgba(0, 0, 0, 0.4);
		text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
		font-weight: 300;
		font-size: 2em;
	}

	.st-menu ul li a {
		display: block;
		padding: 1em 1em 1em 1.2em;
		outline: none;
		box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);
		color: #f3efe0;
		text-transform: uppercase;
		text-shadow: 0 0 1px rgba(255, 255, 255, 0.1);
		letter-spacing: 1px;
		font-weight: 400;
		-webkit-transition: background 0.3s, box-shadow 0.3s;
		transition: background 0.3s, box-shadow 0.3s;
	}

	.st-menu ul li:first-child a {
		box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2), inset 0 1px rgba(0, 0, 0, 0.2);
	}

	.st-menu ul li a:hover {
		background: rgba(0, 0, 0, 0.2);
		box-shadow: inset 0 -1px rgba(0, 0, 0, 0);
		color: #fff;
	}

	/* Individual effects */

	/* Effect 1: Slide in on top */
	.st-effect-1.st-menu {
		visibility: visible;
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0);
	}

	.st-effect-1.st-menu-open .st-effect-1.st-menu {
		visibility: visible;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}

	.st-effect-1.st-menu::after {
		display: none;
	}

	/* Effect 2: Reveal */
	.st-effect-2.st-menu-open .st-pusher {
		-webkit-transform: translate3d(300px, 0, 0);
		transform: translate3d(300px, 0, 0);
	}

	.st-effect-2.st-menu {
		z-index: 1;
	}

	.st-effect-2.st-menu-open .st-effect-2.st-menu {
		visibility: visible;
		-webkit-transition: -webkit-transform 0.5s;
		transition: transform 0.5s;
	}

	.st-effect-2.st-menu::after {
		display: none;
	}

	/* Fallback example for browsers that don't support 3D transforms (and no JS fallback) */
	.no-csstransforms3d .st-pusher,
	.no-js .st-pusher {
		padding-left: 300px;
	}

	/* The styling */
	@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);
	@font-face {
		font-weight: normal;
		font-style: normal;
		font-family: 'codropsicons';
		src: url('../fonts/codropsicons/codropsicons.eot');
		src: url('../fonts/codropsicons/codropsicons.eot?#iefix') format('embedded-opentype'),
			url('../fonts/codropsicons/codropsicons.woff') format('woff'),
			url('../fonts/codropsicons/codropsicons.ttf') format('truetype'),
			url('../fonts/codropsicons/codropsicons.svg#codropsicons') format('svg');
	}

	body {
		background: #444;
		color: #48a770;
		font-weight: 300;
		font-family: 'Lato', Calibri, Arial, sans-serif;
	}

	a {
		text-decoration: none;
		color: #48a770;
		outline: none;
	}

	a:hover,
	a:focus {
		color: #2c774b;
		outline: none;
	}

	/* Clearfix hack by Nicolas Gallagher: http://nicolasgallagher.com/micro-clearfix-hack/ */
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: " ";
	}

	.clearfix:after {
		clear: both;
	}

	.codrops-header,
	.codrops-top {
		font-family: 'Lato', Arial, sans-serif;
	}

	.codrops-header {
		margin: 0 auto 3em;
		padding: 3em;
		text-align: center;
	}

	.codrops-header h1 {
		margin: 0;
		font-weight: 300;
		font-size: 2.625em;
		line-height: 1.3;
	}

	.codrops-header span {
		display: block;
		padding: 0 0 0.6em 0.1em;
		font-size: 60%;
		color: #aca89a;
	}

	/* To Navigation Style */
	.codrops-top {
		width: 100%;
		text-transform: uppercase;
		font-size: 0.69em;
		line-height: 2.2;
		font-weight: 400;
		background: rgba(255, 255, 255, 0.3);
	}

	.codrops-top a {
		display: inline-block;
		padding: 0 1em;
		text-decoration: none;
		letter-spacing: 0.1em;
	}

	.codrops-top a:hover {
		background: rgba(255, 255, 255, 0.4);
		color: #333;
	}

	.codrops-top span.right {
		float: right;
	}

	.codrops-top span.right a {
		display: block;
		float: left;
	}

	.codrops-icon:before {
		margin: 0 4px;
		text-transform: none;
		font-weight: normal;
		font-style: normal;
		font-variant: normal;
		font-family: 'codropsicons';
		line-height: 1;
		/* speak: none; */
		-webkit-font-smoothing: antialiased;
	}

	.codrops-icon-drop:before {
		content: "\e001";
	}

	.codrops-icon-prev:before {
		content: "\e004";
	}

	.main {
		max-width: 69em;
		margin: 0 auto;
	}

	.column {
		float: left;
		width: 50%;
		padding: 0 2em;
		min-height: 300px;
		position: relative;
		text-align: right;
	}

	.column:nth-child(2) {
		box-shadow: -1px 0 0 rgba(0, 0, 0, 0.1);
		text-align: left;
	}

	.column p {
		font-weight: 300;
		font-size: 2em;
		padding: 0 0 0.5em;
		margin: 0;
		line-height: 1.5;
	}

	button {
		border: none;
		padding: 0.6em 1.2em;
		background: #388a5a;
		color: #fff;
		font-family: 'Lato', Calibri, Arial, sans-serif;
		font-size: 1em;
		letter-spacing: 1px;
		text-transform: uppercase;
		cursor: pointer;
		display: inline-block;
		margin: 3px 2px;
		border-radius: 2px;
	}

	button:hover {
		background: #2c774b;
	}

	.info {
		text-align: center;
		font-size: 1.5em;
		margin-top: 3em;
		clear: both;
		padding: 3em 0;
		opacity: 0.7;
		color: #aca89a;
	}

	.info a {
		font-weight: 700;
		font-size: 0.9em;
	}

	@media screen and (max-width: 46.0625em) {
		.column {
			width: 100%;
			min-width: auto;
			min-height: auto;
			padding: 2em;
			text-align: center;
		}

		.column p {
			font-size: 1.5em;
		}

		.column:nth-child(2) {
			text-align: center;
			box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1);
		}
	}

	@media screen and (max-width: 25em) {
		.codrops-header {
			font-size: 80%;
		}

		.codrops-top {
			font-size: 120%;
		}

		.codrops-icon span {
			display: none;
		}
	}
`

var click = document.querySelectorAll('div button')
var menu = document.querySelector('#st-container')
var pusher = document.querySelector('.st-pusher')

var effect

const RevealMenu = () => {
	useEffect(() => {
		function addClass(e) {
			// to get the correct effect
			effect = e.target.getAttribute('data-effect')
			// adding the effects
			menu.classList.toggle(effect)
			menu.classList.toggle('st-menu-open')

			// console.log(e.target.getAttribute('data-effect'));
		}

		function closeMenu(el) {
			// if the click target has this class then we close the menu by removing all the classes
			if (el.target.classList.contains('st-pusher')) {
				menu.classList.toggle(effect)
				menu.classList.toggle('st-menu-open')
				// console.log(el.target);
			}
		}

		for (var i = 0; i < click.length; i++) {
			click[i].addEventListener('click', addClass)
		}

		pusher.addEventListener('click', closeMenu)
	})
	return (
		<StyledRevealMenu>
			<div id="st-container" class="st-container">
				<nav class="st-menu st-effect-1" id="menu-1">
					<h2 class="icon icon-lab">Sidebar</h2>
					<ul>
						<li>
							<a class="icon icon-data" href="#">
								Data Management
							</a>
						</li>
						<li>
							<a class="icon icon-location" href="#">
								Location
							</a>
						</li>
						<li>
							<a class="icon icon-study" href="#">
								Study
							</a>
						</li>
						<li>
							<a class="icon icon-photo" href="#">
								Collections
							</a>
						</li>
						<li>
							<a class="icon icon-wallet" href="#">
								Credits
							</a>
						</li>
					</ul>
				</nav>

				<nav class="st-menu st-effect-2" id="menu-1">
					<h2 class="icon icon-lab">Sidebar</h2>
					<ul>
						<li>
							<a class="icon icon-data" href="#">
								Data Management
							</a>
						</li>
						<li>
							<a class="icon icon-location" href="#">
								Location
							</a>
						</li>
						<li>
							<a class="icon icon-study" href="#">
								Study
							</a>
						</li>
						<li>
							<a class="icon icon-photo" href="#">
								Collections
							</a>
						</li>
						<li>
							<a class="icon icon-wallet" href="#">
								Credits
							</a>
						</li>
					</ul>
				</nav>
				<nav class="st-menu st-effect-4" id="menu-4">
					<h2 class="icon icon-lab">Sidebar</h2>
					<ul>
						<li>
							<a class="icon icon-data" href="#">
								Data Management
							</a>
						</li>
						<li>
							<a class="icon icon-location" href="#">
								Location
							</a>
						</li>
						<li>
							<a class="icon icon-study" href="#">
								Study
							</a>
						</li>
						<li>
							<a class="icon icon-photo" href="#">
								Collections
							</a>
						</li>
						<li>
							<a class="icon icon-wallet" href="#">
								Credits
							</a>
						</li>
					</ul>
				</nav>

				<nav class="st-menu st-effect-5" id="menu-5">
					<h2 class="icon icon-stack">Sidebar</h2>
					<ul>
						<li>
							<a class="icon icon-data" href="#">
								Data Management
							</a>
						</li>
						<li>
							<a class="icon icon-location" href="#">
								Location
							</a>
						</li>
						<li>
							<a class="icon icon-study" href="#">
								Study
							</a>
						</li>
						<li>
							<a class="icon icon-photo" href="#">
								Collections
							</a>
						</li>
						<li>
							<a class="icon icon-wallet" href="#">
								Credits
							</a>
						</li>
					</ul>
				</nav>

				<nav class="st-menu st-effect-9" id="menu-9">
					<h2 class="icon icon-lab">Sidebar</h2>
					<ul>
						<li>
							<a class="icon icon-data" href="#">
								Data Management
							</a>
						</li>
						<li>
							<a class="icon icon-location" href="#">
								Location
							</a>
						</li>
						<li>
							<a class="icon icon-study" href="#">
								Study
							</a>
						</li>
						<li>
							<a class="icon icon-photo" href="#">
								Collections
							</a>
						</li>
						<li>
							<a class="icon icon-wallet" href="#">
								Credits
							</a>
						</li>
					</ul>
				</nav>

				<nav class="st-menu st-effect-10" id="menu-10">
					<h2 class="icon icon-stack">Sidebar</h2>
					<ul>
						<li>
							<a class="icon icon-data" href="#">
								Data Management
							</a>
						</li>
						<li>
							<a class="icon icon-location" href="#">
								Location
							</a>
						</li>
						<li>
							<a class="icon icon-study" href="#">
								Study
							</a>
						</li>
						<li>
							<a class="icon icon-photo" href="#">
								Collections
							</a>
						</li>
						<li>
							<a class="icon icon-wallet" href="#">
								Credits
							</a>
						</li>
					</ul>
				</nav>

				<nav class="st-menu st-effect-11" id="menu-11">
					<h2 class="icon icon-lab">Sidebar</h2>
					<ul>
						<li>
							<a class="icon icon-data" href="#">
								Data Management
							</a>
						</li>
						<li>
							<a class="icon icon-location" href="#">
								Location
							</a>
						</li>
						<li>
							<a class="icon icon-study" href="#">
								Study
							</a>
						</li>
						<li>
							<a class="icon icon-photo" href="#">
								Collections
							</a>
						</li>
						<li>
							<a class="icon icon-wallet" href="#">
								Credits
							</a>
						</li>
					</ul>
				</nav>

				<nav class="st-menu st-effect-12" id="menu-12">
					<h2 class="icon icon-stack">Sidebar</h2>
					<ul>
						<li>
							<a class="icon icon-data" href="#">
								Data Management
							</a>
						</li>
						<li>
							<a class="icon icon-location" href="#">
								Location
							</a>
						</li>
						<li>
							<a class="icon icon-study" href="#">
								Study
							</a>
						</li>
						<li>
							<a class="icon icon-photo" href="#">
								Collections
							</a>
						</li>
						<li>
							<a class="icon icon-wallet" href="#">
								Credits
							</a>
						</li>
					</ul>
				</nav>

				<nav class="st-menu st-effect-13" id="menu-13">
					<h2 class="icon icon-stack">Sidebar</h2>
					<ul>
						<li>
							<a class="icon icon-data" href="#">
								Data Management
							</a>
						</li>
						<li>
							<a class="icon icon-location" href="#">
								Location
							</a>
						</li>
						<li>
							<a class="icon icon-study" href="#">
								Study
							</a>
						</li>
						<li>
							<a class="icon icon-photo" href="#">
								Collections
							</a>
						</li>
						<li>
							<a class="icon icon-wallet" href="#">
								Credits
							</a>
						</li>
					</ul>
				</nav>

				<div class="st-pusher">
					<nav class="st-menu st-effect-3" id="menu-3">
						<h2 class="icon icon-lab">Sidebar</h2>
						<ul>
							<li>
								<a class="icon icon-data" href="#">
									Data Management
								</a>
							</li>
							<li>
								<a class="icon icon-location" href="#">
									Location
								</a>
							</li>
							<li>
								<a class="icon icon-study" href="#">
									Study
								</a>
							</li>
							<li>
								<a class="icon icon-photo" href="#">
									Collections
								</a>
							</li>
							<li>
								<a class="icon icon-wallet" href="#">
									Credits
								</a>
							</li>
						</ul>
					</nav>

					<nav class="st-menu st-effect-6" id="menu-6">
						<h2 class="icon icon-stack">Sidebar</h2>
						<ul>
							<li>
								<a class="icon icon-data" href="#">
									Data Management
								</a>
							</li>
							<li>
								<a class="icon icon-location" href="#">
									Location
								</a>
							</li>
							<li>
								<a class="icon icon-study" href="#">
									Study
								</a>
							</li>
							<li>
								<a class="icon icon-photo" href="#">
									Collections
								</a>
							</li>
							<li>
								<a class="icon icon-wallet" href="#">
									Credits
								</a>
							</li>
						</ul>
					</nav>

					<nav class="st-menu st-effect-7" id="menu-7">
						<h2 class="icon icon-lab">Sidebar</h2>
						<ul>
							<li>
								<a class="icon icon-data" href="#">
									Data Management
								</a>
							</li>
							<li>
								<a class="icon icon-location" href="#">
									Location
								</a>
							</li>
							<li>
								<a class="icon icon-study" href="#">
									Study
								</a>
							</li>
							<li>
								<a class="icon icon-photo" href="#">
									Collections
								</a>
							</li>
							<li>
								<a class="icon icon-wallet" href="#">
									Credits
								</a>
							</li>
						</ul>
					</nav>

					<nav class="st-menu st-effect-8" id="menu-8">
						<h2 class="icon icon-stack">Sidebar</h2>
						<ul>
							<li>
								<a class="icon icon-data" href="#">
									Data Management
								</a>
							</li>
							<li>
								<a class="icon icon-location" href="#">
									Location
								</a>
							</li>
							<li>
								<a class="icon icon-study" href="#">
									Study
								</a>
							</li>
							<li>
								<a class="icon icon-photo" href="#">
									Collections
								</a>
							</li>
							<li>
								<a class="icon icon-wallet" href="#">
									Credits
								</a>
							</li>
						</ul>
					</nav>

					<nav class="st-menu st-effect-14" id="menu-14">
						<h2 class="icon icon-stack">Sidebar</h2>
						<ul>
							<li>
								<a class="icon icon-data" href="#">
									Data Management
								</a>
							</li>
							<li>
								<a class="icon icon-location" href="#">
									Location
								</a>
							</li>
							<li>
								<a class="icon icon-study" href="#">
									Study
								</a>
							</li>
							<li>
								<a class="icon icon-photo" href="#">
									Collections
								</a>
							</li>
							<li>
								<a class="icon icon-wallet" href="#">
									Credits
								</a>
							</li>
						</ul>
					</nav>

					<div class="st-content">
						<div class="st-content-inner">
							<header class="codrops-header">
								<h1>
									Sidebar Transitions{' '}
									<span>Transition effects for off-canvas views</span>
								</h1>
							</header>
							<div class="main clearfix">
								<div id="st-trigger-effects" class="column">
									<button data-effect="st-effect-1">Slide in on top</button>
									<button data-effect="st-effect-2">Reveal</button>
									<button data-effect="st-effect-3">Push</button>
									<button data-effect="st-effect-4">Slide along</button>
									<button data-effect="st-effect-5">Reverse slide out</button>
									<button data-effect="st-effect-6">Rotate pusher</button>
									<button data-effect="st-effect-7">3D rotate in</button>
									<button data-effect="st-effect-8">3D rotate out</button>
									<button data-effect="st-effect-9">Scale down pusher</button>
									<button data-effect="st-effect-10">Scale Up</button>
									<button data-effect="st-effect-11">
										Scale &amp; rotate pusher
									</button>
									<button data-effect="st-effect-12">Open door</button>
									<button data-effect="st-effect-13">Fall down</button>
									<button data-effect="st-effect-14">Delayed 3D Rotate</button>
								</div>
								<div class="column">
									<p>
										Sidebar menus or off-canvas navigations can be revealed in
										many creative ways.
									</p>
									<p>
										Here is some inspiration for showing them in style using CSS
										transitions.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StyledRevealMenu>
	)
}
export default RevealMenu
