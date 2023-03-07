import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Span, Input, Icon, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowRight } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Business Matchmaking Has Never Been Easier
			</title>
			<meta name={"description"} content={"Manage all your events in a single app. Our online event management platform provides various services event planners and project managers may need."} />
			<meta property={"og:title"} content={"Business Matchmaking Has Never Been Easier"} />
			<meta property={"og:description"} content={"Manage all your events in a single app. Our online event management platform provides various services event planners and project managers may need."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/OG-image.png?v=2021-09-22T11:33:13.239Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/favicon%2032x32.png?v=2021-09-22T11:33:41.498Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/270x270.png?v=2021-09-22T11:33:55.934Z"} />
		</Helmet>
		<Section padding="38px 0 38px 0" quarkly-title="Header">
			<Override slot="SectionContent" display="flex" flex-direction="row" />
			<Link
				hover-opacity=".8"
				width="20%"
				md-width="40%"
				sm-width="50%"
				href="/"
				display="flex"
				text-decoration-line="initial"
			>
				<Text margin="0px 0px 0px 0px" font="normal 700 14px/1.5 --fontFamily-googleFiraSans" color="#1064C7" transform="rotate(-90deg)">
					b2b
				</Text>
				<Text font="--lead" color="--dark" margin="0px 0px 0px 0px">
					e-Platform
				</Text>
			</Link>
			<Components.QuarklycommunityKitMobileSidePanel md-justify-content="flex-end">
				<Override slot="Children" display="flex" />
				<Override slot="Content" padding="0px 0px 0px 0px" md-margin="38px 0px 0px 0px" />
				<Override
					slot="Button Text"
					md-font="--lead"
					md-text-transform="uppercase"
					sm-margin="3px 6.3px 0px 0px"
					md-margin="1px 6.3px 0px 0px"
				/>
				<Box
					md-flex-direction="column"
					md-justify-content="center"
					md-padding="20px 0px 20px 0px"
					md-margin="0px 0px 0px 0px"
					display="flex"
					justify-content="flex-end"
					md-align-items="center"
				>
					<Link
						md-font="normal 400 18px/1.5 &quot;Fira Sans&quot;, sans-serif"
						padding="5px 10px 5px 10px"
						margin="0px 15px 0px 15px"
						transition="opacity 0.3s ease-in-out 0s"
						hover-opacity=".8"
						href="#solutions"
						text-decoration-line="initial"
						color="--dark"
						font="--base"
						md-margin="0 0px 8px 0px"
					>
						Solutions
					</Link>
					<Link
						text-decoration-line="initial"
						font="--base"
						padding="5px 10px 5px 10px"
						transition="opacity 0.3s ease-in-out 0s"
						hover-opacity=".8"
						md-margin="0 0px 8px 0px"
						href="#products"
						color="--dark"
						margin="0px 15px 0px 15px"
						md-font="normal 400 18px/1.5 &quot;Fira Sans&quot;, sans-serif"
					>
						Products
					</Link>
					<Link
						color="--dark"
						margin="0px 15px 0px 15px"
						transition="opacity 0.3s ease-in-out 0s"
						href="#pricing"
						text-decoration-line="initial"
						font="--base"
						padding="5px 10px 5px 10px"
						hover-opacity=".8"
						md-margin="0 0px 8px 0px"
						md-font="normal 400 18px/1.5 &quot;Fira Sans&quot;, sans-serif"
					>
						Pricing
					</Link>
					<Link
						text-decoration-line="initial"
						font="--base"
						margin="0px 0px 0px 15px"
						md-margin="0 0px 8px 0px"
						md-font="normal 400 18px/1.5 &quot;Fira Sans&quot;, sans-serif"
						href="#testimonial"
						color="--dark"
						padding="5px 10px 5px 10px"
						transition="opacity 0.3s ease-in-out 0s"
						hover-opacity=".8"
					>
						Testimonial
					</Link>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section padding="0px 0 0px 0" quarkly-title="HeroBlock">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" sm-width="100%" />
			<Box
				width="100%"
				display="flex"
				padding="0px 0px 0px 0px"
				align-items="center"
				md-width="100%"
				md-padding="0px 0px 0px 0px"
				lg-padding="0px 0px 0px 0px"
			>
				<Image
					max-height="600px"
					src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1980&q=80"
					max-width="100%"
					object-fit="cover"
					lg-min-height="500px"
					sm-min-height="400px"
					width="100%"
				/>
			</Box>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				padding="0px 0px 0px 16px"
				flex-direction="column"
				md-width="100%"
				md-padding="0px 0px 0px 0px"
				display="flex"
				lg-padding="0px 0px 0px 0px"
				width="50%"
			>
				<Box
					flex-direction="column"
					border-width="1px 0px 0px 0px"
					border-color="#C4C4C4"
					align-items="flex-start"
					display="flex"
					height="100%"
					border-style="solid"
					padding="80px 16px 80px 0px"
					md-padding="60px 16px 60px 0px"
				>
					<Text color="--dark" lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif" margin="0px 0px 0px 0px" font="--headline2">
						Something went{" "}
						<Span color="--primary" font="700 50px/60px &quot;Fira Sans&quot;, sans-serif" lg-font="700 30px/60px &quot;Fira Sans&quot;, sans-serif">
							wrong
						</Span>
					</Text>
					<Text lg-font="400 24px/1.2 &quot;Fira Sans&quot;, sans-serif" margin="16px 0px 0px 0px" font="--headline4" color="--dark">
						error 404
					</Text>
				</Box>
			</Box>
			<Box
				width="50%"
				display="flex"
				justify-content="space-between"
				background="--color-primary"
				md-width="100%"
				padding="24px 32px 24px 32px"
				flex-direction="column"
				border-color="#"
				md-margin="0px 0px 0px 0px"
				md-padding="44px 16px 44px 16px"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--headline4"
					color="--light"
					lg-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
					sm-font="normal 400 18px/1.4 &quot;Fira Sans&quot;, sans-serif"
				>
					Whooops... this page isn’t available at this moment.
				</Text>
			</Box>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				md-padding="0px 0px 0px 0px"
				lg-padding="0px 0px 0px 0px"
				width="50%"
				display="flex"
				padding="0px 0px 0px 16px"
				flex-direction="column"
				justify-content="center"
				md-width="100%"
			>
				<Image
					md-border-width="0px"
					src="https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/kubik404.svg?v=2021-10-05T08:46:02.228Z"
					min-height="600px"
					object-fit="cover"
					border-width="1px 1px 0px 0px"
					border-color="--color-grey"
					border-style="solid"
					max-width="100%"
					sm-min-height="16px"
				/>
			</Box>
			<Box
				md-width="100%"
				width="50%"
				display="flex"
				padding="0px 0px 0px 0px"
				flex-direction="column"
				justify-content="space-between"
			>
				<Box
					border-color="--color-grey"
					sm-height="auto"
					align-items="flex-start"
					flex-direction="column"
					sm-padding="31px 32px 31px 0px"
					md-margin="0px 16px 0px 16px"
					sm-margin="0px 23px 0px 23px"
					border-width="0px 0px 1px 0px"
					padding="31px 32px 31px 32px"
					display="flex"
					height="300px"
					justify-content="space-between"
					border-style="solid"
				>
					<Box>
						<Text
							margin="0px 0px 16px 0px"
							font="--headline4"
							color="--dark"
							width="60%"
							lg-width="100%"
							lg-font="normal 400 24px/1.3 &quot;Fira Sans&quot;, sans-serif"
						>
							News and events
						</Text>
						<Text
							margin="0px 0px 65px 0px"
							font="--base"
							color="--dark"
							width="70%"
							lg-width="100%"
							sm-margin="0px 0px 32px 0px"
						>
							Discover our newsletter and find best solutions to resolve your tasks
						</Text>
					</Box>
					<Link
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
						font="--lead"
						href="#"
						text-decoration-line="initial"
						color="--primary"
					>
						Learn more
					</Link>
				</Box>
				<Box
					justify-content="center"
					md-margin="0px 16px 0px 16px"
					display="flex"
					align-items="flex-start"
					height="300px"
					background="--color-lightD1"
					sm-margin="0px 16px 0px 16px"
					md-padding="0px 0px 0px 0px"
					sm-flex-direction="column"
				>
					<Box
						display="flex"
						padding="31px 32px 31px 32px"
						background="#fff"
						sm-width="100%"
						width="50%"
						height="100%"
						justify-content="space-between"
						lg-padding="31px 15px 31px 15px"
						flex-direction="column"
						align-items="flex-start"
					>
						<Text
							margin="0px 0px 16px 0px"
							font="--headline4"
							color="--dark"
							width="80%"
							lg-width="100%"
							lg-font="normal 400 24px/1.3 &quot;Fira Sans&quot;, sans-serif"
						>
							Get answers
						</Text>
						<Link
							text-decoration-line="initial"
							color="--primary"
							padding="5px 35px 5px 0px"
							background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
							font="--lead"
							href="#"
						>
							Learn more
						</Link>
					</Box>
					<Box
						sm-width="100%"
						width="50%"
						height="100%"
						justify-content="space-between"
						padding="31px 32px 31px 32px"
						lg-padding="31px 15px 31px 15px"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
					>
						<Text
							color="--dark"
							width="80%"
							lg-width="100%"
							lg-font="normal 400 24px/1.3 &quot;Fira Sans&quot;, sans-serif"
							margin="0px 0px 16px 0px"
							font="--headline4"
						>
							Contact us
						</Text>
						<Link
							padding="5px 35px 5px 0px"
							background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
							font="--lead"
							href="#"
							text-decoration-line="initial"
							color="--primary"
						>
							Learn more
						</Link>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section quarkly-title="Footer" padding="0px 0 48px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" padding="0px 16px 0px 16px" />
			<Box
				display="flex"
				background="--color-primary"
				md-width="100%"
				lg-padding="32px 64px 32px 32px"
				lg-width="100%"
				width="33.3333%"
				padding="32px 64px 62px 32px"
				flex-direction="column"
				border-color="#"
				md-margin="0px 0px 0px 0px"
				md-padding="24px 16px 24px 16px"
			>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline4"
					color="--light"
					lg-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
					sm-font="normal 400 18px/1.4 &quot;Fira Sans&quot;, sans-serif"
				>
					Contact info
				</Text>
				<Text
					sm-font="normal 400 18px/1.4 &quot;Fira Sans&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="--lead"
					color="--light"
					lg-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
				>
					355 Saint Rose Avenue 22, Suite #2221, Nordway, FL 355523, USA
				</Text>
				<Link
					href="tel:12345678"
					text-decoration-line="initial"
					color="--light"
					font="--lead"
					margin="0px 0px 16px 0px"
				>
					+1 (850) 839-5995
				</Link>
				<Link
					text-decoration-line="initial"
					color="--light"
					font="--lead"
					margin="0px 0px 32px 0px"
					href="mailto:info@b2bpltfrm.com"
				>
					info@b2bpltfrm.com
				</Link>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline4"
					color="--light"
					lg-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
					sm-font="normal 400 18px/1.4 &quot;Fira Sans&quot;, sans-serif"
				>
					Follow us
				</Text>
				<SocialMedia margin="0px 0px 0px 0px" justify-content="flex-start" facebook="https://www.facebook.com/quarklyapp" linked-in="https://linkedin.com/">
					<Override
						slot="link"
						padding="5x 5px 5px 5px"
						width="36px"
						height="36px"
						justify-content="center"
						background="none"
						hover-color="--light"
						hover-background="transparent"
						margin="0 5px 0 5px"
						align-items="center"
						border-radius="50%"
						color="--grey"
						display="flex"
					/>
					<Override
						slot="icon"
						color="--light"
						padding="7px 7px 7px 7px"
						border-width="0px"
						size="34px"
						border-radius="50px"
					/>
					<Override slot="link-facebook" margin="0px 5px 0px 0px">
						<div />
					</Override>
				</SocialMedia>
			</Box>
			<Box
				lg-width="100%"
				padding="32px 32px 32px 32px"
				width="33.3333%"
				background="--color-lightD1"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
			>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--dark"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_black.svg?v=2021-09-18T00:53:14.815Z) 100% 0px/30px no-repeat"
					font="--headline4"
					margin="0px 0px 27px 0px"
				>
					About Us
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--dark"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_black.svg?v=2021-09-18T00:53:14.815Z) 100% 0px/30px no-repeat"
					font="--headline4"
					margin="0px 0px 27px 0px"
				>
					Help
				</Link>
				<Link
					text-decoration-line="initial"
					color="--dark"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_black.svg?v=2021-09-18T00:53:14.815Z) 100% 0px/30px no-repeat"
					font="--headline4"
					margin="0px 0px 27px 0px"
					href="#"
				>
					FAQ
				</Link>
				<Link
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_black.svg?v=2021-09-18T00:53:14.815Z) 100% 0px/30px no-repeat"
					font="--headline4"
					margin="0px 0px 27px 0px"
					lg-margin="0px 0px 0px 0px"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					padding="5px 35px 5px 0px"
				>
					Blog
				</Link>
			</Box>
			<Box
				border-width="1px 0px 0px 0px"
				border-style="solid"
				border-color="--color-grey"
				padding="32px 64px 32px 32px"
				width="33.3333%"
				lg-width="100%"
			>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline4"
					color="--dark"
					lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
					sm-font="400 22px/1.2 &quot;Fira Sans&quot;, sans-serif"
				>
					Subscribe to our newsletter and updates
				</Text>
				<Components.QuarklycommunityKitNetlifyForm
					border-style="solid"
					border-color="--color-grey"
					width="240px"
					md-width="360px"
					sm-width="100%"
					border-width="0px 0px 1px 0px"
				>
					<Override slot="Form" align-items="center" display="flex" justify-content="center" />
					<Box align-items="center" justify-content="flex-start" display="flex">
						<Input
							placeholder="Type your email here..."
							name="Email"
							required
							padding="6px 16px 6px 0px"
							border-width="0px"
							md-width="100%"
							type="email"
							border-color="--color-grey"
							border-style="none"
						/>
						<Button color="transparent" background="transparent" font="normal 400 0px/1.5 &quot;Fira Sans&quot;, sans-serif">
							<Icon category="md" icon={MdKeyboardArrowRight} color="--dark" />
							Button
						</Button>
					</Box>
				</Components.QuarklycommunityKitNetlifyForm>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6143a05129a0a1001e6c835a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}\n\n* {\n    scroll-behavior: smooth;\n    }"}
			</style>
		</RawHtml>
	</Theme>;
});