import React, { useState } from "react";
import { motion } from "framer-motion";
import komunaImage from "../../assets/img/komuna.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./project.css";

const Project = () => {
	const [isOpen, setIsOpen] = useState(false);

	AOS.init();

	const variantHover = {
		hover: {
			scale: 1.1,
			transition: {
				duration: 0.3,
			},
		},
	};

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className="projects-wrapper"
			data-aos="fade-up"
			data-aos-offset="0"
			data-aos-delay="10"
			data-aos-duration="500"
			data-aos-easing="ease"
			data-aos-once="true"
			data-aos-anchor-placement="top-center"
		>
			<h2 className="projects-title">Projects</h2>
			<div className="card-container">
				<motion.div whileHover={{ scale: 1.1 }} className="card" onClick={handleClick}>
					<div className="project">
						<div className="circle"></div>
						<img src={komunaImage} alt="komuna" />
					</div>
					{isOpen && (
						<div className="info">
							<h2 className="card-title">Komuna</h2>
							<p className="card-description">communal todo list app for Housemates.</p>
							<p className="card-tech">
								<span>Technology:</span> html, react, sass, express, mongoose
							</p>
							<div className="links">
								<motion.a
									variants={variantHover}
									whileHover="hover"
									className="link-code"
									href="https://github.com/MAOZ1707/komuna"
								>
									<i className="fas fa-code"></i>
								</motion.a>
								<motion.a
									whileHover="hover"
									variants={variantHover}
									className="link-demo"
									href="https://komuna-app.herokuapp.com/"
								>
									<i className="fas fa-play"></i>
								</motion.a>
							</div>
						</div>
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default Project;
