import React, { useEffect, useState } from "react";
import imageProfile from "../../assets/img/myImage.png";
import { motion } from "framer-motion";
import pdf from "../../cv/maoz CV.pdf";

import "./Entrance.css";

const textVariant = {
	initial: {
		opacity: 0,
		rotate: -180,
		x: -500,
		y: 700,
	},
	visible: {
		opacity: 1,
		x: 1,
		y: 1,
		rotate: 2,
		scale: 1,
		transition: {
			scale: {
				delay: 1.5,
			},
			duration: 1.2,
			type: "spring",
		},
	},
};
const variantSub = {
	initialSub: {
		opacity: 0,
		rotate: -180,
		x: 500,
		y: -700,
	},

	visibleSub: {
		opacity: 1,
		x: 1,
		y: 1,
		rotate: 2,
		scale: 1,
		transition: {
			scale: {
				delay: 1.5,
			},
			duration: 1.2,
			type: "spring",
		},
	},
};

const variantHover = {
	hover: {
		scale: 1.2,
		transition: {
			duration: 0.5,
		},
	},
};

const Entrance = () => {
	const [width, setWidth] = useState();

	useEffect(() => {
		window.addEventListener("resize", () => {
			setWidth(window.innerWidth);
		});
	}, [width]);

	// let fontResize;
	// if (width > 500 && width < 700) {
	// 	fontResize = "22px";
	// } else if (width > 700) {
	// 	fontResize = "30px";
	// } else {
	// 	fontResize = "13px";
	// }

	return (
		<div className="wrapper">
			<div className="image-container">
				<motion.img src={imageProfile} alt="img-profile" />
			</div>
			<div className="title-container">
				<span className="name-title">Maoz Cohen</span>
				<motion.span
					// style={{ fontSize: fontResize }}
					variants={textVariant}
					animate="visible"
					initial="initial"
					className="main-title"
				>
					Web Developer
				</motion.span>
				<motion.span
					variants={variantSub}
					// style={{ fontSize: fontResize }}
					animate="visibleSub"
					initial="initialSub"
					className="sub-title"
				>
					Designer
				</motion.span>
			</div>
			<div className="contact-ways">
				<motion.a
					variants={variantHover}
					whileHover="hover"
					className="email"
					href="mailto:cohenmaoz39@gmail.com"
				>
					<i className="far fa-envelope"></i>
				</motion.a>
				<motion.a
					variants={variantHover}
					whileHover="hover"
					className="github"
					href="https://github.com/MAOZ1707"
				>
					<i className="fab fa-github"></i>
				</motion.a>
				<motion.a className="cv" variants={variantHover} whileHover="hover" href={pdf} target="#">
					CV
				</motion.a>
			</div>
		</div>
	);
};

export default Entrance;
