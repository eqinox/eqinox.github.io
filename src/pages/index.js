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
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
			<Override slot="SectionContent" flex-direction="row" display="flex" />
			<Link
				text-decoration-line="initial"
				hover-opacity=".8"
				width="20%"
				md-width="40%"
				sm-width="50%"
				href="/"
				display="flex"
			>
				<Text font="normal 700 14px/1.5 --fontFamily-googleFiraSans" color="#1064C7" transform="rotate(-90deg)" margin="0px 0px 0px 0px">
					b2b
				</Text>
				<Text margin="0px 0px 0px 0px" font="--lead" color="--dark">
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
					justify-content="flex-end"
					md-align-items="center"
					md-flex-direction="column"
					md-justify-content="center"
					md-padding="20px 0px 20px 0px"
					md-margin="0px 0px 0px 0px"
					display="flex"
				>
					<Link
						href="#solutions"
						text-decoration-line="initial"
						color="--dark"
						font="--base"
						padding="5px 10px 5px 10px"
						margin="0px 15px 0px 15px"
						transition="opacity 0.3s ease-in-out 0s"
						md-margin="0 0px 8px 0px"
						md-font="normal 400 18px/1.5 &quot;Fira Sans&quot;, sans-serif"
						hover-opacity=".8"
					>
						Solutions
					</Link>
					<Link
						md-margin="0 0px 8px 0px"
						href="#products"
						text-decoration-line="initial"
						color="--dark"
						font="--base"
						margin="0px 15px 0px 15px"
						padding="5px 10px 5px 10px"
						transition="opacity 0.3s ease-in-out 0s"
						hover-opacity=".8"
						md-font="normal 400 18px/1.5 &quot;Fira Sans&quot;, sans-serif"
					>
						Products
					</Link>
					<Link
						md-font="normal 400 18px/1.5 &quot;Fira Sans&quot;, sans-serif"
						href="#pricing"
						text-decoration-line="initial"
						color="--dark"
						font="--base"
						padding="5px 10px 5px 10px"
						margin="0px 15px 0px 15px"
						transition="opacity 0.3s ease-in-out 0s"
						hover-opacity=".8"
						md-margin="0 0px 8px 0px"
					>
						Pricing
					</Link>
					<Link
						color="--dark"
						margin="0px 0px 0px 15px"
						href="#testimonial"
						font="--base"
						padding="5px 10px 5px 10px"
						transition="opacity 0.3s ease-in-out 0s"
						hover-opacity=".8"
						md-margin="0 0px 8px 0px"
						md-font="normal 400 18px/1.5 &quot;Fira Sans&quot;, sans-serif"
						text-decoration-line="initial"
					>
						Testimonial
					</Link>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section background="--color-darkL1" padding="0px 0 0px 0" quarkly-title="HeroBlock" md-flex-wrap="wrap">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				width="50%"
				padding="80px 0px 40px 0px"
				md-padding="40px 0px 40px 0px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				lg-padding="80px 32px 40px 0px"
				md-width="100%"
			>
				<Box
					lg-width="100%"
					display="flex"
					flex-direction="column"
					width="70%"
					justify-content="space-between"
					flex="1 1 0%"
				>
					<Text font="--headline3" color="--light" sm-font="400 36px/1.2 &quot;Fira Sans&quot;, sans-serif" margin="0px 0px 0px 0px">
						B2B Matchmaking Has Never Been Easier
					</Text>
					<Text margin="32px 0px 0px 0px" font="--lead" color="--light" md-padding="0px 0px 40px 0px">
						Targeted dialogues between customers and merchants based on their profiles and preferences will redefine networking.
					</Text>
				</Box>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="50%"
				md-width="100%"
			>
				<Image
					src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
					max-width="100%"
					min-height="600px"
					object-fit="cover"
					lg-min-height="500px"
					sm-min-height="400px"
				/>
			</Box>
		</Section>
		<Section padding="104px 0 104px 0" lg-padding="40px 0 40px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="50%"
				lg-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
			>
				<Text
					font="normal 500 60px/1.2 --fontFamily-googleFiraSans"
					color="--dark"
					md-font="normal 500 40px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					lg-margin="0px 0px 32px 0px"
					margin="0px 0px 0px 0px"
				>
					Why Choose Us?
				</Text>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				width="50%"
				lg-width="100%"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
			>
				<Text margin="0px 0px 0px 0px" font="--lead" color="--dark" sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif">
					Our online event management platform provides various services event planners and project managers may need. Manage all your events in a single app. Our event management system has so many features that it's hardly possible to list them all! You can find some of them below.
				</Text>
				<Box width="33.333%" margin="32px 0px 0px 0px" padding="0px 30px 0px 0px" md-width="100%">
					<Text color="--dark" margin="0px 0px 16px 0px" font="normal 500 18px/1.5 --fontFamily-googleFiraSans">
						Before start
					</Text>
					<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
						Registration
					</Text>
					<Text font="--base" color="--dark" margin="0px 0px 8px 0px">
						Ticketing
					</Text>
					<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
						Website building
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
						On-site badge printing and session tracking
					</Text>
				</Box>
				<Box padding="0px 30px 0px 0px" md-width="100%" width="33.333%" margin="32px 0px 0px 0px">
					<Text margin="0px 0px 16px 0px" font="normal 500 18px/1.5 --fontFamily-googleFiraSans" color="--dark">
						Planning
					</Text>
					<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
						Management of contacts and finances
					</Text>
					<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
						On-site event management
					</Text>
					<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
						Lead retrieval
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
						Networking solutions
					</Text>
				</Box>
				<Box width="33.333%" margin="32px 0px 0px 0px" md-width="100%">
					<Text margin="0px 0px 16px 0px" font="normal 500 18px/1.5 --fontFamily-googleFiraSans" color="--dark">
						Managment
					</Text>
					<Text color="--dark" margin="0px 0px 8px 0px" font="--base">
						Business matchmaking software
					</Text>
					<Text color="--dark" margin="0px 0px 8px 0px" font="--base">
						Polls and surveys
					</Text>
					<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
						Powerful AI-assisted analytics system
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
						Virtual conference, tradeshows, roundtables, and seminars
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-width="64px"
				width="50%"
				align-items="center"
				border-style="solid"
				padding="80px 0px 80px 0px"
				md-padding="60px 0px 60px 0px"
				empty-border-width="1px"
				border-color="#C4C4C4"
				empty-border-style="solid"
				empty-border-color="LightGray"
				border-width="1px 0px 0px 0px"
				empty-min-height="64px"
				display="flex"
				md-width="100%"
			>
				<Text margin="0px 0px 0px 0px" font="--headline2" color="--dark" lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif">
					<Span
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						lg-font="700 30px/48px &quot;Fira Sans&quot;, sans-serif"
						color="--primary"
						word-break="normal"
						white-space="normal"
						font="700 40px/48px &quot;Fira Sans&quot;, sans-serif"
						overflow-wrap="normal"
					>
						b2b
					</Span>
					{" "}e-Platform
				</Text>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="50%"
				md-width="100%"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--headline4"
					color="--light"
					lg-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
					sm-font="normal 400 18px/1.4 &quot;Fira Sans&quot;, sans-serif"
					background="--color-primary"
					padding="32px 24px 32px 24px"
				>
					Great events are created by combining accurate planning and cutting-edge technology. That's why event planners are turning to all-in-one event management software to make virtual, hybrid, or on-site event managing easier.
				</Text>
			</Box>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" md-flex-wrap="wrap" flex-direction="row" />
			<Box
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="50%"
				display="flex"
			>
				<Image
					max-width="100%"
					min-height="632px"
					object-fit="cover"
					sm-min-height="16px"
					src="https://images.unsplash.com/photo-1603539947678-cd3954ed515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
				/>
			</Box>
			<Box
				empty-border-width="1px"
				empty-border-color="LightGray"
				width="50%"
				empty-min-width="64px"
				empty-border-style="solid"
				display="flex"
				flex-direction="column"
				md-width="100%"
				empty-min-height="64px"
			>
				<Box
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					padding="32px 32px 32px 32px"
					height="50%"
					empty-min-width="64px"
					empty-min-height="64px"
				>
					<Text
						width="60%"
						lg-width="100%"
						lg-font="normal 400 24px/1.3 &quot;Fira Sans&quot;, sans-serif"
						margin="0px 0px 16px 0px"
						font="--headline4"
						color="--dark"
					>
						Event Registration Software
					</Text>
					<Text
						margin="0px 0px 65px 0px"
						font="--base"
						color="--dark"
						width="70%"
						lg-width="100%"
					>
						Facilitate event ticketing and registration with an easy-to-navigate event registration page that is responsive on all devices.
					</Text>
					<Link
						font="--lead"
						href="#"
						text-decoration-line="initial"
						color="--primary"
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
					>
						Learn more
					</Link>
				</Box>
				<Box
					empty-border-style="solid"
					empty-border-color="LightGray"
					padding="32px 32px 32px 32px"
					background="--color-lightD1"
					height="50%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
				>
					<Text
						margin="0px 0px 16px 0px"
						font="--headline4"
						color="--dark"
						width="80%"
						lg-width="100%"
						lg-font="normal 400 24px/1.3 &quot;Fira Sans&quot;, sans-serif"
					>
						Business Matchmaking Platform
					</Text>
					<Text
						margin="0px 0px 65px 0px"
						font="--base"
						color="--dark"
						width="70%"
						lg-width="100%"
					>
						Connect customers with a well-curated list of businesses to make event networking more effective.
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--primary"
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
						font="--lead"
					>
						Learn more
					</Link>
				</Box>
			</Box>
		</Section>
		<Section padding="64px 0 0px 0">
			<Override
				slot="SectionContent"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="0px"
				lg-grid-template-columns="1fr"
			/>
			<Box
				empty-border-color="LightGray"
				grid-column="1 / span 3"
				padding="16px 32px 60px 16px"
				lg-grid-column="auto / auto"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Text color="--dark" lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif" margin="0px 0px 16px 0px" font="--headline2">
					On-site{" "}
					<Span
						color="--primary"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-overflow="clip"
						font="700 50px/60px &quot;Fira Sans&quot;, sans-serif"
						lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
						text-indent="0"
						hyphens="manual"
					>
						Event
					</Span>
					{" "}Management
				</Text>
				<Text
					lg-margin="0px 0px 16px 0px"
					margin="0px 0px 32px 0px"
					font="--lead"
					color="--dark"
					width="60%"
					lg-width="100%"
					sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
				>
					Arrange enticing hybrid or on-site events with contactless signups, check-ins, and badge printing.
				</Text>
			</Box>
			<Box
				empty-border-color="LightGray"
				border-style="solid"
				lg-border-style="none"
				lg-border-width="0px"
				empty-border-style="solid"
				empty-min-height="64px"
				empty-border-width="1px"
				padding="16px 32px 60px 16px"
				border-width="1px 1px 1px 0px"
				border-color="--color-grey"
				empty-min-width="64px"
			>
				<Box>
					<Text margin="15px 0px 16px 0px" font="--headline4" color="--dark">
						AI — Based
					</Text>
					<Text
						sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						lg-margin="0px 0px 45px 0px"
						margin="0px 0px 0px 0px"
						font="--lead"
						color="--dark"
						width="100%"
					>
						Let participants have pre-scheduled 1-1 meetings at the event either in-person or virtually.
					</Text>
				</Box>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--primary"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
					font="--lead"
				>
					Learn more
				</Link>
			</Box>
			<Box
				border-color="--color-grey"
				lg-border-style="none"
				lg-border-width="0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				padding="16px 32px 60px 16px"
				border-style="solid"
				empty-border-width="1px"
				empty-border-style="solid"
				border-width="1px 1px 1px 0px"
			>
				<Box>
					<Text margin="15px 0px 16px 0px" font="--headline4" color="--dark">
						On-Site Events
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						font="--lead"
						color="--dark"
						width="100%"
						sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						lg-margin="0px 0px 45px 0px"
					>
						End-to-end event management software that improves the attendance experience and ensures that in-person events run smoothly.
					</Text>
				</Box>
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
				padding="16px 32px 60px 16px"
				border-width="1px 0px 1px 0px"
				border-style="solid"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				border-color="--color-grey"
				lg-border-width="0px"
				lg-border-style="none"
			>
				<Box>
					<Text margin="15px 0px 16px 0px" font="--headline4" color="--dark">
						Diversity Events
					</Text>
					<Text
						color="--dark"
						width="100%"
						sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						sm-margin="0px 0px 4px 0px"
						lg-margin="0px 0px 45px 0px"
						margin="0px 0px 0px 0px"
						font="--lead"
					>
						Arrange diversity and inclusive events.
					</Text>
				</Box>
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
		</Section>
		<Section padding="0px 0 0px 0">
			<Components.Tabs
				width="100%"
				md-flex-wrap="wrap"
				margin="0px 0px -4px 0px"
				defaultTab="one"
				display="flex"
				flex-direction="row-reverse"
			>
				<Override slot="Tab :active" opacity="1" md-color="--dark" transform="translateX(0px)" />
				<Override slot="Tab two">
					User-Friendly
				</Override>
				<Override slot="Tab three">
					Customizable
				</Override>
				<Override slot="Tab four" margin="0px 0px 20px 0px">
					Effective
				</Override>
				<Override slot="Tab one">
					Cost-Effective
				</Override>
				<Override
					slot="Tablist"
					flex-direction="column"
					md-width="100%"
					md-position="static"
					md-align-items="flex-start"
					md-order="1"
					md-flex-direction="row"
					width="25%"
					padding="16px 16px 16px 24px"
					lg-width="40%"
					md-padding="0px 0px 0px 0px"
					md-flex-wrap="wrap"
				/>
				<Override slot="TabPanels" width="75%" lg-width="60%" md-width="100%" />
				<Override
					slot="Tab"
					padding="16px 6px 16px 6px"
					transition="transform 1s ease 0s"
					color="--dark"
					sm-width="50%"
					sm-text-align="left"
					md-width="50%"
					sm-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
					md-color="--grey"
					text-align="left"
					background="rgba(32, 108, 236, 0)"
					margin="0px 0px 40px 0px"
					md-opacity="1"
					md-font="normal 400 16px/1.3 &quot;Fira Sans&quot;, sans-serif"
					font="--headline4"
					transform="translateX(0px)"
					opacity="0.5"
					md-margin="0px 0px 8px 0px"
				/>
				<Components.Tab tabId="one">
					<Override slot="Tab two">
						Animation
					</Override>
					<Image
						lg-height="460px"
						padding="0px 0px 0px 0px"
						src="https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
						max-width="100%"
						height="560px"
						object-fit="cover"
						width="100%"
					/>
				</Components.Tab>
				<Components.Tab tabId="two">
					<Image
						max-width="100%"
						height="560px"
						object-fit="cover"
						width="100%"
						lg-height="460px"
						src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000"
					/>
				</Components.Tab>
				<Components.Tab tabId="three">
					<Image
						width="100%"
						lg-height="460px"
						src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000"
						max-width="100%"
						height="560px"
						object-fit="cover"
					/>
				</Components.Tab>
				<Components.Tab tabId="four">
					<Image
						src="https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000"
						height="560px"
						object-fit="cover"
						width="100%"
						lg-height="460px"
					/>
				</Components.Tab>
			</Components.Tabs>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				align-items="center"
				lg-width="60%"
				md-width="100%"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="75%"
				display="flex"
			>
				<Text
					color="--dark"
					lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
					md-padding="32px 0px 32px 0px"
					margin="0px 0px 0px 0px"
					font="--headline2"
				>
					Event Management
					<br />
					Software{" "}
					<Span color="--primary" font="700 50px/60px &quot;Fira Sans&quot;, sans-serif" lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif">
						Pricing
					</Span>
				</Text>
			</Box>
			<Box
				empty-border-color="LightGray"
				padding="32px 32px 79px 32px"
				md-padding="32px 32px 32px 32px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				lg-width="40%"
				md-width="100%"
				sm-padding="32px 32px 32px 32px"
				empty-border-style="solid"
				width="25%"
				background="--color-primary"
			>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline4"
					color="--light"
					width="100%"
					lg-font="normal 400 24px/1.3 &quot;Fira Sans&quot;, sans-serif"
				>
					Bring Your Events Together
				</Text>
				<Text color="--light" width="100%" margin="0px 0px 16px 0px" font="--base">
					No long-term commitments, setup fees, cancellation fees, or hidden fees.
				</Text>
			</Box>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" lg-flex-wrap="wrap" />
			<Box
				padding="16px 32px 65px 32px"
				border-style="solid"
				border-color="--color-grey"
				empty-min-height="64px"
				empty-border-width="1px"
				width="50%"
				background="--color-lightD1"
				border-width="1px 1px 1px 0px"
				lg-width="100%"
				lg-border-width="0px"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
			>
				<Box margin="0px 0px 54px 0px">
					<Text margin="15px 0px 16px 0px" font="--headline3" color="--dark" lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif">
						Standard
					</Text>
					<Text
						margin="0px 0px 8px 0px"
						font="--lead"
						color="--dark"
						width="100%"
						sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
					>
						128gb SSD storage
					</Text>
					<Text
						color="--dark"
						width="100%"
						sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						margin="0px 0px 8px 0px"
						font="--lead"
					>
						Full UI kit download
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						font="--lead"
						color="--dark"
						width="100%"
						sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
					>
						Public API
					</Text>
				</Box>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--primary"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
					font="--lead"
				>
					From $29
				</Link>
			</Box>
			<Box
				lg-border-width="0px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				width="50%"
				padding="16px 32px 65px 32px"
				border-color="--color-grey"
				border-style="solid"
				lg-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-style="solid"
				position="relative"
				border-width="1px 0px 1px 0px"
			>
				<Image
					bottom="18px"
					left="auto"
					top="auto"
					lg-right="0px"
					sm-bottom="-40px"
					height="156px"
					position="absolute"
					right="88px"
					md-bottom="0px"
					sm-right="-40px"
					width="200px"
					src="https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/Vectary%20texture.png?v=2021-09-18T00:09:23.228Z"
				/>
				<Box
					sm-flex-direction="column"
					margin="0px 0px 54px 0px"
					display="flex"
					width="100%"
					flex-wrap="wrap"
				>
					<Text
						width="100%"
						lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
						margin="15px 0px 16px 0px"
						font="--headline3"
						color="--dark"
					>
						Advanced
					</Text>
					<Box width="50%" sm-width="100%">
						<Text
							margin="0px 0px 8px 0px"
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						>
							256gb SSD storage
						</Text>
						<Text
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
							margin="0px 0px 8px 0px"
						>
							Full UI kit download
						</Text>
						<Text
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
							margin="0px 0px 8px 0px"
							font="--lead"
							color="--dark"
							width="100%"
						>
							Public API
						</Text>
					</Box>
					<Box width="50%" sm-width="100%">
						<Text
							margin="0px 0px 8px 0px"
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						>
							Full UI pack download
						</Text>
						<Text
							margin="0px 0px 8px 0px"
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						>
							24/7 support
						</Text>
					</Box>
				</Box>
				<Link
					color="--primary"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
					font="--lead"
					href="#"
					text-decoration-line="initial"
				>
					From $39
				</Link>
			</Box>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-height="64px"
				sm-align-items="center"
				sm-justify-content="center"
				empty-border-width="1px"
				background="--color-dark"
				md-width="100%"
				sm-display="flex"
				sm-padding="32px 16px 32px 16px"
				empty-min-width="64px"
				empty-border-style="solid"
				width="50%"
				empty-border-color="LightGray"
				padding="64px 32px 257px 0px"
				md-padding="64px 32px 64px 32px"
			>
				<Box display="flex" flex-direction="column" width="80%" lg-width="100%">
					<Text
						color="--light"
						sm-font="400 36px/1.2 &quot;Fira Sans&quot;, sans-serif"
						lg-text-align="center"
						lg-margin="0px 0px 0px 0px"
						margin="0px 0px 0px 32px"
						font="--headline3"
					>
						Testimonials
					</Text>
					<Box background="--color-darkL2" padding="32px 35px 32px 32px" margin="32px 0px 0px 0px">
						<Text color="--light" margin="0px 0px 0px 0px" lg-text-align="center" font="--lead">
							We liked the software's flexibility to adapt to our evolving requirements. For example, being able to create promo codes to provide conference participants with various discounts.
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				empty-border-style="solid"
				background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1543269665-7821011040ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80) 0% 40% /cover repeat scroll padding-box"
				lg-padding="64px 0px 0px 32px"
				md-width="100%"
				md-padding="64px 0px 274px 32px"
				empty-min-height="64px"
				empty-border-width="1px"
				width="50%"
				padding="64px 32px 0px 32px"
				empty-min-width="64px"
				empty-border-color="LightGray"
			>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--light"
					padding="5px 85px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right.svg?v=2021-09-16T22:08:39.193Z) 100% -12px/51px no-repeat"
					font="--headline3"
					sm-padding="5px 55px 5px 0px"
					sm-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
				>
					Our Clients Say...
				</Link>
			</Box>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				padding="80px 32px 80px 0px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				width="75%"
				display="flex"
				align-items="center"
				lg-width="55%"
				md-width="100%"
				empty-min-width="64px"
				empty-border-style="solid"
				md-padding="32px 0px 32px 0px"
			>
				<Text
					width="80%"
					lg-width="100%"
					margin="0px 0px 0px 0px"
					font="--headline2"
					color="--dark"
					lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
				>
					Experience a{" "}
					<Span lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif" font="700 50px/60px &quot;Fira Sans&quot;, sans-serif" color="--primary">
						platform
					</Span>
					{" "}created to run high-quality events better than anyone!
				</Text>
			</Box>
			<Box
				empty-min-height="64px"
				padding="42px 32px 42px 32px"
				md-width="100%"
				flex-direction="column"
				md-border-width="0px"
				md-border-style="none"
				empty-min-width="64px"
				display="flex"
				empty-border-style="solid"
				border-color="--color-grey"
				border-style="solid"
				justify-content="center"
				sm-padding="16px 32px 0px 32px"
				border-width="0px 0px 0px 1px"
				empty-border-color="LightGray"
				width="25%"
				lg-width="45%"
				empty-border-width="1px"
			>
				<Text
					md-text-align="left"
					margin="0px 0px 16px 0px"
					font="--headline4"
					color="--dark"
					width="100%"
					text-align="center"
					md-margin="0px 0px 32px 0px"
				>
					Our Partners
				</Text>
				<Components.QuarklycommunityKitCarousel
					aspectRatio="auto"
					md-padding="0px 0px 30% 0px"
					md-width="50%"
					showText={false}
					autoPlay
					showDots={false}
					slidesProp="5"
					sm-padding="0px 0px 22% 0px"
					sm-height="100px"
					showHead={false}
					height="150px"
					autoPlayIntervalProp="5s"
					overflow-y="hidden"
					md-overflow-x="visible"
					md-overflow-y="visible"
					showLink={false}
					showArrows={false}
				>
					<Override slot="Slide Image 1" src="https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/cola.svg?v=2021-09-21T00:03:54.451Z" />
					<Override slot="Slide Image 3" src="https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/nike.svg?v=2021-09-21T00:03:54.436Z" />
					<Override slot="Arrow" align-items="flex-end" background="none" md-display="none" />
					<Override slot="Slide Image" md-height="auto" md-width="70%" object-fit="contain" />
					<Override slot="Slide Image 4" src="https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/logitech.svg?v=2021-09-21T00:03:54.432Z" />
					<Override slot="Arrow Prev" background="none" />
					<Override slot="Slide Image 2" src="https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/pepsi.svg?v=2021-09-21T00:03:54.442Z" />
					<Override
						slot="Arrow Icon"
						border-width="1px"
						border-style="solid"
						border-radius="100%"
						size="38px"
						color="--primary"
						border-color="#206CEC"
					/>
					<Override slot="Slide Image 5" src="https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/samsung.svg?v=2021-09-21T00:03:54.449Z" />
					<Override slot="Arrow Next" background="none" />
					<Override slot="Slides" height="100%" />
				</Components.QuarklycommunityKitCarousel>
			</Box>
		</Section>
		<Section padding="0px 0 48px 0" quarkly-title="Footer">
			<Override slot="SectionContent" flex-direction="row" lg-flex-wrap="wrap" />
			<Box
				flex-direction="column"
				align-items="flex-start"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				padding="32px 32px 32px 32px"
				display="flex"
				lg-width="100%"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="33.333%"
				background="--color-primary"
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
					href="mailto:info@b2bpltfrm.com"
					text-decoration-line="initial"
					color="--light"
					font="--lead"
					margin="0px 0px 32px 0px"
				>
					info@b2bpltfrm.com
				</Link>
				<Text
					font="--headline4"
					color="--light"
					lg-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
					sm-font="normal 400 18px/1.4 &quot;Fira Sans&quot;, sans-serif"
					margin="0px 0px 16px 0px"
				>
					Follow us
				</Text>
				<SocialMedia margin="0px 0px 0px 0px" justify-content="flex-start" facebook="https://www.facebook.com/quarklyapp" linked-in="https://linkedin.com/">
					<Override
						slot="link"
						color="--grey"
						padding="5x 5px 5px 5px"
						height="36px"
						display="flex"
						width="36px"
						align-items="center"
						justify-content="center"
						background="none"
						border-radius="50%"
						hover-color="--light"
						hover-background="transparent"
						margin="0 5px 0 5px"
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
				padding="32px 32px 32px 32px"
				background="--color-lightD1"
				display="flex"
				flex-direction="column"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				width="33.333%"
				empty-min-width="64px"
				empty-border-style="solid"
				align-items="flex-start"
				lg-width="100%"
			>
				<Link
					margin="0px 0px 27px 0px"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_black.svg?v=2021-09-18T00:53:14.815Z) 100% 0px/30px no-repeat"
					font="--headline4"
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
					href="#"
					text-decoration-line="initial"
					color="--dark"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_black.svg?v=2021-09-18T00:53:14.815Z) 100% 0px/30px no-repeat"
					font="--headline4"
					margin="0px 0px 27px 0px"
				>
					FAQ
				</Link>
				<Link
					text-decoration-line="initial"
					color="--dark"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_black.svg?v=2021-09-18T00:53:14.815Z) 100% 0px/30px no-repeat"
					font="--headline4"
					margin="0px 0px 27px 0px"
					lg-margin="0px 0px 0px 0px"
					href="#"
				>
					Blog
				</Link>
			</Box>
			<Box
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				width="33.333%"
				flex-direction="column"
				border-color="--color-grey"
				empty-min-height="64px"
				empty-border-color="LightGray"
				padding="32px 32px 32px 32px"
				lg-width="100%"
				border-width="1px 0px 0px 0px"
				align-items="flex-start"
				display="flex"
				border-style="solid"
			>
				<Text
					font="--headline4"
					color="--dark"
					lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
					sm-font="400 22px/1.2 &quot;Fira Sans&quot;, sans-serif"
					margin="0px 0px 16px 0px"
				>
					Subscribe to our newsletter and updates
				</Text>
				<Components.QuarklycommunityKitNetlifyForm
					sm-width="100%"
					border-width="0px 0px 1px 0px"
					border-style="solid"
					border-color="--color-grey"
					width="240px"
					md-width="360px"
				>
					<Override slot="Form" justify-content="center" align-items="center" display="flex" />
					<Box display="flex" align-items="center" justify-content="flex-start">
						<Input
							required
							border-color="--color-grey"
							border-width="0px"
							border-style="none"
							md-width="100%"
							name="Email"
							type="email"
							padding="6px 16px 6px 0px"
							placeholder="Type your email here..."
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