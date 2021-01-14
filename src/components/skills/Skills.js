import React from "react";
import "./skills.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
	AOS.init();

	return (
		<div
			className="skills-wrapper"
			data-aos="fade-up"
			data-aos-offset="0"
			data-aos-delay="1"
			data-aos-duration="400"
			data-aos-easing="ease"
			data-aos-once="true"
			data-aos-anchor-placement="top-center"
		>
			<h2 className="skills-title">Skills</h2>
			<div className="skills-container">
				<h3>Core</h3>
				<div className="icons-front" data-aos="fade">
					<i className="fab fa-html5 html"></i>
					<i className="fab fa-css3-alt css"></i>
					<i className="fab fa-js-square javascript"></i>
					<i className="fab fa-react react"></i>
					<i className="fab fa-sass sass"></i>
				</div>
				<h3>Familiar</h3>
				<div className="icons-back" data-aos="fade">
					<section>
						<i className="fab fa-node-js node"></i>
						<span>Node js/Express</span>
						<p>creation server, routs, validation, basic security.</p>
					</section>
					<section>
						<i className="fas fa-database mongo"></i>
						<span>MongoDB/Mongoose</span>
						<p>CRUD operation, models, relationships, validation.</p>
					</section>
				</div>
				<h3>DESIGN TOOLS</h3>
				<div className="icons-design" data-aos="fade">
					<img
						src="https://img.icons8.com/ios-filled/100/000000/adobe-indesign.png"
						alt="indesign"
						className="indesign"
					/>
					<img
						src="https://img.icons8.com/ios-filled/100/000000/adobe-illustrator.png"
						alt="illustrator"
						className="illustrator"
					/>
					<img
						src="https://img.icons8.com/ios-filled/100/000000/adobe-photoshop.png"
						alt="photoshop"
						className="photoshop"
					/>
					<i className="fab fa-figma"></i>
				</div>
			</div>
		</div>
	);
};

export default Skills;
